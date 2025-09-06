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

    console.log('Iniciando scheduler automático...')

    // Verificar e executar daily-automation
    const now = new Date()
    const today = now.toISOString().split('T')[0]
    const currentHour = now.getHours()

    // Executar automação diária entre 6h e 22h
    if (currentHour >= 6 && currentHour <= 22) {
      console.log('Executando daily-automation...')
      
      try {
        const { data: automationResult } = await supabase.functions.invoke('daily-automation')
        console.log('Daily automation resultado:', automationResult)
      } catch (automationError) {
        console.error('Erro na automação diária:', automationError)
      }
    }

    // Verificar análise de keywords (a cada 4 horas)
    if (currentHour % 4 === 0) {
      console.log('Executando análise de keywords...')
      
      try {
        const { data: keywordResult } = await supabase.functions.invoke('keyword-analyzer', {
          body: { auto_mode: true }
        })
        console.log('Keyword analysis resultado:', keywordResult)
      } catch (keywordError) {
        console.error('Erro na análise de keywords:', keywordError)
      }
    }

    // Log do scheduler
    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'scheduler',
        status: 'success',
        message: `Scheduler executado às ${now.toISOString()}`,
        data: {
          hour: currentHour,
          actions_executed: []
        },
        execution_time_ms: Date.now()
      })

    return new Response(JSON.stringify({
      success: true,
      message: 'Scheduler executado com sucesso',
      timestamp: now.toISOString(),
      hour: currentHour
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Erro no scheduler:', error)

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'scheduler',
        status: 'error',
        message: `Erro no scheduler: ${error.message}`,
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