

# Restaurar Fotos e Otimizar Meta Descriptions dos Silos

## O que aconteceu

As paginas pilares dos silos (Encanador, Eletricista, Desentupimento, Marido de Aluguel) perderam as fotos que existiam na pagina de servicos antiga. As imagens originais estavam em `Services.tsx` e precisam ser adicionadas aos novos templates de silo.

## Alteracoes

### 1. Atualizar `src/data/silos.ts`

Adicionar campo `imageUrl` na interface `SiloData` e inserir as URLs das imagens originais:

- **Marido de Aluguel:** `https://i.ibb.co/v6TfXJDH/IMG-7008.jpg`
- **Encanador:** `https://i.ibb.co/1YnM1GV2/IMG-7003-2.jpg`
- **Eletricista:** `https://i.ibb.co/NzndpZS/Servi-os-de-eletricista-em-Belo-Horizonte-com-a-S-O-S-Manuten-es-Residenciais-Marido-de-Aluguel-B.jpg`
- **Desentupimento:** `https://i.ibb.co/Z6BVJCJ5/Desentupimento-de-vaso-sanit-rio-em-Belo-Horizonte-com-a-S-O-S-Manuten-es-Residenciais-Marido-de.jpg`

Otimizar meta descriptions para serem mais persuasivas (ate 160 caracteres, com chamada para acao):

- **Encanador:** "Encanador em Belo Horizonte: conserto de vazamentos, troca de torneiras e instalacoes hidraulicas. Atendimento no mesmo dia. Orcamento gratis pelo WhatsApp!"
- **Eletricista:** "Eletricista em Belo Horizonte: instalacao de tomadas, troca de disjuntores e chuveiros. Servico seguro e garantido. Chame no WhatsApp agora!"
- **Desentupimento:** "Desentupimento em Belo Horizonte: ralos, pias e vasos sanitarios. Equipamento profissional, sem quebradeira. Atendimento urgente pelo WhatsApp!"
- **Marido de Aluguel:** "Marido de aluguel em BH: pequenos reparos, montagem de moveis e instalacoes. Profissional experiente com atendimento rapido. Orcamento gratis!"

### 2. Atualizar `src/components/SiloPillarPage.tsx`

Adicionar a imagem do silo na secao de conteudo, usando o componente `OptimizedImage` que ja existe no projeto. A imagem aparecera ao lado do texto de introducao do servico, similar ao layout original da pagina de servicos.

### 3. Atualizar `src/components/SiloChildPage.tsx`

Adicionar a imagem do silo pai tambem nas paginas filhas, na secao de conteudo, para manter consistencia visual.

## Resumo das alteracoes

| Arquivo | Alteracao |
|---------|-----------|
| `src/data/silos.ts` | Adicionar `imageUrl` na interface e nos 4 silos + otimizar meta descriptions |
| `src/components/SiloPillarPage.tsx` | Exibir imagem do silo com OptimizedImage |
| `src/components/SiloChildPage.tsx` | Exibir imagem do silo pai com OptimizedImage |

