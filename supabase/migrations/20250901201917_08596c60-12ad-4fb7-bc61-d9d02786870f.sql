-- Criar tabela para configuração de cron jobs
CREATE TABLE IF NOT EXISTS public.automation_schedule (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    job_name TEXT NOT NULL UNIQUE,
    cron_expression TEXT NOT NULL DEFAULT '0 6 * * *', -- Diariamente às 6h
    function_name TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    last_executed_at TIMESTAMP WITH TIME ZONE,
    next_execution_at TIMESTAMP WITH TIME ZONE,
    execution_count INTEGER DEFAULT 0,
    success_count INTEGER DEFAULT 0,
    error_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.automation_schedule ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
CREATE POLICY "Apenas admins podem gerenciar schedule"
ON public.automation_schedule
FOR ALL
USING (auth.uid() IN (SELECT user_id FROM admin_users));

-- Inserir job de automação diária
INSERT INTO public.automation_schedule (job_name, cron_expression, function_name)
VALUES 
    ('daily_content_generation', '0 6 * * *', 'daily-automation'),
    ('hourly_keyword_analysis', '0 */6 * * *', 'keyword-analyzer'),
    ('daily_competitor_check', '0 7 * * *', 'competitor-analyzer')
ON CONFLICT (job_name) DO NOTHING;

-- Trigger para atualizar updated_at
CREATE TRIGGER update_automation_schedule_updated_at
    BEFORE UPDATE ON public.automation_schedule
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Habilitar extensões necessárias para cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Criar cron job para automação diária (6h da manhã)
SELECT cron.schedule(
    'daily-automation',
    '0 6 * * *',
    $$
    SELECT
        net.http_post(
            url:='https://blmauyummcnxiwumbril.supabase.co/functions/v1/daily-automation',
            headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbWF1eXVtbWNueGl3dW1icmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyMDk2ODIsImV4cCI6MjA3MDc4NTY4Mn0._wv-ddCw8A53L-X_AficPdHrC26a1r3ZsZAc777MBOE"}'::jsonb,
            body:='{"source": "cron_job", "time": "' || now() || '"}'::jsonb
        ) as request_id;
    $$
);

-- Atualizar configuração para habilitar auto_publish
UPDATE public.content_generator_config 
SET 
    auto_publish = true,
    daily_post_limit = 3,
    content_generation_enabled = true
WHERE id IS NOT NULL;

-- Se não existe configuração, criar uma
INSERT INTO public.content_generator_config (
    content_generation_enabled, 
    auto_publish, 
    daily_post_limit, 
    min_keyword_volume,
    target_neighborhoods,
    target_services
) 
SELECT 
    true, 
    true, 
    3, 
    100,
    ARRAY['Pampulha', 'Zona Norte', 'Centro', 'Savassi', 'Funcionários', 'Barro Preto', 'Santa Efigênia', 'Cidade Nova'],
    ARRAY['Elétrica', 'Hidráulica', 'Pintura', 'Reforma', 'Ar Condicionado', 'Gesso', 'Marcenaria', 'Vidraçaria']
WHERE NOT EXISTS (SELECT 1 FROM public.content_generator_config);