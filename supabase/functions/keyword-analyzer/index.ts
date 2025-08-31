import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface KeywordData {
  keyword: string;
  searchVolume: number;
  competition: number;
  trends: number[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Buscar configuração
    const { data: config } = await supabase
      .from('content_generator_config')
      .select('*')
      .single();

    if (!config) {
      throw new Error('Configuração não encontrada');
    }

    // Lista de palavras-chave base para análise
    const baseKeywords = [
      'eletricista belo horizonte',
      'encanador belo horizonte',
      'pintor belo horizonte',
      'reforma pampulha',
      'eletricista pampulha',
      'encanador zona norte bh',
      'pintura residencial bh',
      'instalacao eletrica belo horizonte',
      'vazamento de agua bh',
      'ar condicionado belo horizonte',
      'gesso belo horizonte',
      'reforma apartamento bh',
      'manutencao residencial bh',
      'eletricista savassi',
      'encanador funcionarios',
      'pintor centro bh',
      'reforma barro preto',
      'instalacao hidraulica bh',
      'eletricista zona norte',
      'pintura predial bh',
    ];

    // Combinar serviços e bairros para gerar mais keywords
    const generatedKeywords: string[] = [];
    
    for (const service of config.target_services) {
      for (const neighborhood of config.target_neighborhoods) {
        generatedKeywords.push(`${service.toLowerCase()} ${neighborhood.toLowerCase()}`);
        generatedKeywords.push(`${service.toLowerCase()} ${neighborhood.toLowerCase()} bh`);
        generatedKeywords.push(`${service.toLowerCase()} belo horizonte ${neighborhood.toLowerCase()}`);
      }
    }

    const allKeywords = [...baseKeywords, ...generatedKeywords];

    // Simular análise de keywords (em produção, usar APIs reais como Google Keyword Planner, SEMrush, etc.)
    const analyzedKeywords: KeywordData[] = [];

    for (const keyword of allKeywords.slice(0, 50)) { // Limitar para não sobrecarregar
      // Simular dados realistas baseados em padrões de busca locais
      const baseVolume = Math.floor(Math.random() * 1000) + 100;
      const locationBonus = keyword.includes('belo horizonte') || keyword.includes('bh') ? 1.5 : 1;
      const serviceBonus = keyword.includes('eletricista') || keyword.includes('encanador') ? 1.3 : 1;
      
      const searchVolume = Math.floor(baseVolume * locationBonus * serviceBonus);
      const competition = Math.random() * 0.8 + 0.1; // Entre 0.1 e 0.9
      const trendScore = Math.floor(Math.random() * 40) + 60; // Entre 60 e 100

      analyzedKeywords.push({
        keyword,
        searchVolume,
        competition,
        trends: [trendScore],
      });

      // Salvar/atualizar no banco
      await supabase
        .from('keyword_analysis')
        .upsert({
          keyword,
          search_volume: searchVolume,
          competition_score: competition,
          trend_score: trendScore,
          monthly_searches: searchVolume,
          difficulty_score: Math.floor(competition * 100),
          related_neighborhoods: config.target_neighborhoods.filter(n => 
            keyword.toLowerCase().includes(n.toLowerCase())
          ),
          related_services: config.target_services.filter(s => 
            keyword.toLowerCase().includes(s.toLowerCase())
          ),
          last_analyzed: new Date().toISOString(),
        }, {
          onConflict: 'keyword'
        });
    }

    // Identificar melhores oportunidades
    const opportunities = analyzedKeywords
      .filter(k => k.searchVolume >= config.min_keyword_volume && k.competition < 0.6)
      .sort((a, b) => (b.searchVolume / (b.competition + 0.1)) - (a.searchVolume / (a.competition + 0.1)))
      .slice(0, 10);

    // Estatísticas
    const stats = {
      total_analyzed: analyzedKeywords.length,
      high_volume: analyzedKeywords.filter(k => k.searchVolume > 500).length,
      low_competition: analyzedKeywords.filter(k => k.competition < 0.4).length,
      opportunities: opportunities.length,
      avg_volume: Math.floor(analyzedKeywords.reduce((sum, k) => sum + k.searchVolume, 0) / analyzedKeywords.length),
      avg_competition: analyzedKeywords.reduce((sum, k) => sum + k.competition, 0) / analyzedKeywords.length,
    };

    // Log da análise
    await supabase
      .from('automation_logs')
      .insert({
        process_type: 'keyword_analysis',
        status: 'success',
        message: `Análise de ${analyzedKeywords.length} keywords concluída`,
        data: { stats, top_opportunities: opportunities.slice(0, 5) },
      });

    return new Response(JSON.stringify({ 
      success: true,
      keywords: analyzedKeywords,
      opportunities,
      stats,
      message: 'Análise de keywords concluída'
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Erro na análise de keywords:', error);

    return new Response(JSON.stringify({ 
      error: error.message,
      success: false
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});