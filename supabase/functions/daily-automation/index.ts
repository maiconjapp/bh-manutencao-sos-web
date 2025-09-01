import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    console.log('Iniciando automação diária...')

    // 1. Verificar configuração
    const { data: config } = await supabase
      .from('content_generator_config')
      .select('*')
      .single()

    if (!config || !config.content_generation_enabled) {
      console.log('Geração de conteúdo desabilitada')
      return new Response(JSON.stringify({
        success: false,
        message: 'Geração de conteúdo desabilitada'
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // 2. Verificar limite diário
    const today = new Date().toISOString().split('T')[0]
    const { data: todayPosts } = await supabase
      .from('blog_posts')
      .select('id')
      .gte('created_at', `${today}T00:00:00.000Z`)
      .lt('created_at', `${today}T23:59:59.999Z`)

    const todayCount = todayPosts?.length || 0
    
    if (todayCount >= config.daily_post_limit) {
      console.log(`Limite diário atingido: ${todayCount}/${config.daily_post_limit}`)
      
      await supabase
        .from('automation_logs')
        .insert({
          process_type: 'daily_automation',
          status: 'skipped',
          message: `Limite diário atingido: ${todayCount}/${config.daily_post_limit}`,
          execution_time_ms: Date.now()
        })

      return new Response(JSON.stringify({
        success: false,
        message: `Limite diário atingido: ${todayCount}/${config.daily_post_limit}`
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // 3. Analisar keywords e identificar oportunidades
    console.log('Analisando keywords...')
    
    const keywordResponse = await supabase.functions.invoke('keyword-analyzer', {
      body: { auto_mode: true }
    })

    if (!keywordResponse.data?.success) {
      throw new Error('Falha na análise de keywords')
    }

    const opportunities = keywordResponse.data.opportunities || []
    console.log(`${opportunities.length} oportunidades encontradas`)

    // 4. Selecionar melhor oportunidade
    let selectedKeyword = null
    
    if (opportunities.length > 0) {
      // Ordenar por volume de busca e menor competição
      opportunities.sort((a, b) => {
        const scoreA = (a.searchVolume || 0) / Math.max(a.competition || 1, 0.1)
        const scoreB = (b.searchVolume || 0) / Math.max(b.competition || 1, 0.1)
        return scoreB - scoreA
      })
      
      selectedKeyword = opportunities[0]
    }

    // 5. Se não há oportunidades, usar configuração padrão
    if (!selectedKeyword) {
      const neighborhoods = config.target_neighborhoods || ['Centro', 'Savassi', 'Funcionários']
      const services = config.target_services || ['Elétrica', 'Hidráulica', 'Pintura']
      
      const randomNeighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)]
      const randomService = services[Math.floor(Math.random() * services.length)]
      
      selectedKeyword = {
        keyword: `${randomService} ${randomNeighborhood}`,
        searchVolume: Math.floor(Math.random() * 2000) + 500,
        competition: Math.random() * 0.7 + 0.1
      }
      
      console.log('Usando seleção aleatória:', selectedKeyword)
    }

    // 6. Gerar conteúdo
    console.log('Gerando conteúdo para:', selectedKeyword.keyword)
    
    const contentResponse = await supabase.functions.invoke('content-generator', {
      body: {
        neighborhood: selectedKeyword.keyword.split(' ').slice(-1)[0],
        service_type: selectedKeyword.keyword.split(' ').slice(0, -1).join(' '),
        auto_mode: true
      }
    })

    if (!contentResponse.data?.success) {
      throw new Error(`Falha na geração de conteúdo: ${contentResponse.data?.error}`)
    }

    // 7. Se auto_publish está habilitado, publicar automaticamente
    if (config.auto_publish) {
      const postId = contentResponse.data.post_id
      
      const { error: publishError } = await supabase
        .from('blog_posts')
        .update({
          status: 'published',
          published_at: new Date().toISOString()
        })
        .eq('id', postId)

      if (publishError) {
        console.error('Erro ao publicar post:', publishError)
      } else {
        console.log('Post publicado automaticamente:', postId)
      }
    }

    // 8. Log de sucesso
    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'daily_automation',
        status: 'success',
        message: `Automação diária concluída. Post gerado: ${selectedKeyword.keyword}`,
        data: {
          keyword: selectedKeyword.keyword,
          post_id: contentResponse.data.post_id,
          opportunities_analyzed: opportunities.length,
          auto_published: config.auto_publish
        },
        execution_time_ms: Date.now()
      })

    console.log('Automação diária concluída com sucesso')

    return new Response(JSON.stringify({
      success: true,
      message: 'Automação diária concluída',
      data: {
        keyword: selectedKeyword.keyword,
        post_id: contentResponse.data.post_id,
        opportunities_found: opportunities.length,
        daily_count: todayCount + 1,
        daily_limit: config.daily_post_limit,
        auto_published: config.auto_publish
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Erro na automação diária:', error)

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'daily_automation',
        status: 'error',
        message: `Erro na automação diária: ${error.message}`,
        execution_time_ms: Date.now()
      })

    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})