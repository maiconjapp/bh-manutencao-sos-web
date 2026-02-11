
# Reestruturacao do Site com Silos Semanticos de SEO

## Visao Geral

Reestruturar completamente o site S.O.S Manutencoes Residenciais com arquitetura de silos semanticos, criando paginas pilares por servico, paginas filhas especificas e paginas locais otimizadas para SEO em Belo Horizonte, com enfase na Pampulha.

---

## Estrutura de URLs e Paginas

### Pagina Pilar Principal (Hub Geral)
- **Rota:** `/` (substituir o Index atual)
- **Titulo SEO:** "Marido de Aluguel em Belo Horizonte -- Servicos Residenciais Profissionais"
- Hub central com links para todos os 4 silos
- Destaque para Pampulha e conversao via WhatsApp

### Silo 1 -- Marido de Aluguel
| Pagina | URL |
|--------|-----|
| Pilar | `/marido-de-aluguel` |
| Filha | `/marido-de-aluguel/pampulha` |
| Filha | `/marido-de-aluguel/pequenos-reparos` |
| Filha | `/marido-de-aluguel/instalacao-prateleiras` |
| Filha | `/marido-de-aluguel/montagem-moveis` |
| Filha | `/marido-de-aluguel/troca-fechaduras` |

### Silo 2 -- Encanador
| Pagina | URL |
|--------|-----|
| Pilar | `/encanador` |
| Filha | `/encanador/pampulha` |
| Filha | `/encanador/conserto-vazamentos` |
| Filha | `/encanador/troca-torneiras` |
| Filha | `/encanador/conserto-descarga` |
| Filha | `/encanador/instalacao-hidraulica` |

### Silo 3 -- Eletricista
| Pagina | URL |
|--------|-----|
| Pilar | `/eletricista` |
| Filha | `/eletricista/pampulha` |
| Filha | `/eletricista/troca-disjuntores` |
| Filha | `/eletricista/instalacao-tomadas` |
| Filha | `/eletricista/instalacao-chuveiro` |
| Filha | `/eletricista/manutencao-eletrica` |

### Silo 4 -- Desentupimento
| Pagina | URL |
|--------|-----|
| Pilar | `/desentupimento` |
| Filha | `/desentupimento/pampulha` |
| Filha | `/desentupimento/ralo` |
| Filha | `/desentupimento/pia` |
| Filha | `/desentupimento/vaso-sanitario` |
| Filha | `/desentupimento/limpeza-tubulacao` |

### Paginas Locais (Geograficas)
| Pagina | URL |
|--------|-----|
| Pampulha | `/atendimento/pampulha` |
| Savassi | `/atendimento/savassi` |
| Buritis | `/atendimento/buritis` |
| Castelo | `/atendimento/castelo` |
| Santa Efigenia | `/atendimento/santa-efigenia` |
| Sion | `/atendimento/sion` |

---

## Implementacao Tecnica

### 1. Dados Centralizados (novo arquivo)

**`src/data/silos.ts`** -- Arquivo central com todos os dados dos silos, servicos, conteudos e metadados SEO. Isso evita duplicacao e facilita manutencao.

Contera:
- Dados de cada silo (titulo, descricao, meta, keywords, conteudo)
- Dados de cada pagina filha
- Dados de cada bairro/regiao
- Funcoes auxiliares para gerar links internos corretos

### 2. Componentes Reutilizaveis (novos)

- **`src/components/SiloPillarPage.tsx`** -- Template para paginas pilares de servico. Recebe dados do silo e renderiza: hero, descricao, lista de servicos, links para paginas filhas, CTA WhatsApp, breadcrumbs
- **`src/components/SiloChildPage.tsx`** -- Template para paginas filhas. Recebe dados e renderiza: hero, conteudo unico, link de volta para pilar, CTA WhatsApp, breadcrumbs
- **`src/components/LocalPage.tsx`** -- Template para paginas geograficas. Conteudo exclusivo do bairro, links para todos os silos, CTA WhatsApp
- **`src/components/SEOHead.tsx`** -- Componente com Helmet para title, meta description, canonical URL, e structured data (LocalBusiness + Service)

### 3. Alteracoes em Arquivos Existentes

- **`src/App.tsx`** -- Adicionar todas as novas rotas (aprox. 30 rotas novas)
- **`src/pages/Index.tsx`** -- Reformular como Hub Central "Marido de Aluguel em BH", com cards linkando para os 4 silos e destaque Pampulha
- **`src/pages/Services.tsx`** -- Sera substituida/removida (conteudo migra para as paginas pilares dos silos)
- **`src/components/Layout.tsx`** -- Atualizar navegacao com dropdown "Servicos" mostrando os 4 silos, e footer com links para silos e bairros

### 4. Paginas Novas (arquivos)

Cada pagina sera criada como componente React individual usando os templates:

- `src/pages/silos/MaridoDeAluguelPilar.tsx`
- `src/pages/silos/MaridoDeAluguelPampulha.tsx`
- `src/pages/silos/MaridoDeAluguelPequenosReparos.tsx`
- `src/pages/silos/MaridoDeAluguelPrateleiras.tsx`
- `src/pages/silos/MaridoDeAluguelMoveis.tsx`
- `src/pages/silos/MaridoDeAluguelFechaduras.tsx`
- `src/pages/silos/EncanadorPilar.tsx`
- `src/pages/silos/EncanadorPampulha.tsx`
- `src/pages/silos/EncanadorVazamentos.tsx`
- `src/pages/silos/EncanadorTorneiras.tsx`
- `src/pages/silos/EncanadorDescarga.tsx`
- `src/pages/silos/EncanadorInstalacao.tsx`
- `src/pages/silos/EletricistaPilar.tsx`
- `src/pages/silos/EletricistaPampulha.tsx`
- `src/pages/silos/EletricistDisjuntores.tsx`
- `src/pages/silos/EletricistaTomadas.tsx`
- `src/pages/silos/EletricistaChuveiro.tsx`
- `src/pages/silos/EletricistaManutencao.tsx`
- `src/pages/silos/DesentupimentoPilar.tsx`
- `src/pages/silos/DesentupimentoPampulha.tsx`
- `src/pages/silos/DesentupimentoRalo.tsx`
- `src/pages/silos/DesentupimentoPia.tsx`
- `src/pages/silos/DesentupimentoVaso.tsx`
- `src/pages/silos/DesentupimentoTubulacao.tsx`
- `src/pages/local/PampulhaPage.tsx`
- `src/pages/local/SavassiPage.tsx`
- `src/pages/local/BuritisPage.tsx`
- `src/pages/local/CasteloPage.tsx`
- `src/pages/local/SantaEfigeniaPage.tsx`
- `src/pages/local/SionPage.tsx`

### 5. Linkagem Interna (regras implementadas nos templates)

- Hub Central (Index) linka para as 4 paginas pilares
- Cada pilar linka para suas 5 paginas filhas
- Cada filha linka de volta para sua pilar (via breadcrumb e link no conteudo)
- Paginas locais linkam para todos os silos com contexto geografico
- Links entre silos diferentes NAO serao feitos

### 6. SEO por Pagina

Cada pagina tera via `SEOHead`:
- Tag `<title>` unica com servico + local
- Meta description persuasiva (max 160 chars)
- H1 unico, H2s e H3s semanticos
- Canonical URL
- Schema.org structured data (LocalBusiness)
- Breadcrumbs com schema markup

### 7. Navegacao Atualizada

O header tera um menu dropdown "Servicos" com:
- Marido de Aluguel
- Encanador
- Eletricista
- Desentupimento

O footer tera secoes para:
- Links dos silos
- Areas atendidas (bairros novos)

---

## Conteudo

- Cada pagina tera entre 900 e 1.600 caracteres de conteudo unico
- Linguagem simples, persuasiva, com vocabulario local de BH
- Foco em resolver problemas reais do cliente
- Zero conteudo duplicado entre paginas
- Variacao semantica de palavras-chave (sinonimos)
- CTA claro para WhatsApp em todas as paginas

---

## Sequencia de Implementacao

1. Criar `src/data/silos.ts` com todos os dados centralizados
2. Criar `src/components/SEOHead.tsx`
3. Criar templates: `SiloPillarPage`, `SiloChildPage`, `LocalPage`
4. Criar todas as paginas dos 4 silos (24 paginas)
5. Criar as 6 paginas locais
6. Atualizar `src/pages/Index.tsx` como Hub Central
7. Atualizar `src/components/Layout.tsx` (navegacao e footer)
8. Atualizar `src/App.tsx` com todas as rotas
9. Remover/redirecionar a pagina `/servicos` antiga
10. Atualizar o NeighborhoodPage existente para redirecionar para as novas rotas
