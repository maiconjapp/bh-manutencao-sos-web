-- Atualizar os serviços na configuração do gerador de conteúdo
UPDATE public.content_generator_config 
SET target_services = ARRAY['Eletricista', 'Encanador', 'Desentupimento'],
    updated_at = now()
WHERE id IS NOT NULL;