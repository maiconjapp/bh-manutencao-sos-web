# Plano de Testes - Sistema de Gerenciamento de Posts

## Status Atual
✅ 6 posts no sistema (todos em draft)
✅ 3 posts novos relevantes (Desentupimento x2, Eletricista x1)  
✅ 3 posts antigos para deletar (Reforma, Gesso, Ar Condicionado)

## Testes a Executar no Painel Admin (/admin)

### 1. Testar Publicação de Posts
- [ ] Clicar no botão verde (👁️) no post "Desentupimento em Savassi"
- [ ] Verificar toast de sucesso
- [ ] Confirmar mudança de status para "Publicado" 
- [ ] Verificar data de publicação preenchida

### 2. Testar Visualização de Post
- [ ] Clicar no botão azul (📄) em qualquer post
- [ ] Verificar se abre o post corretamente
- [ ] Testar navegação de volta

### 3. Limpeza de Posts Antigos
- [ ] Deletar post "Reforma em Funcionários" (botão vermelho 🗑️)
- [ ] Deletar post "Serviços de Gesso em Barro Preto" (botão vermelho 🗑️)
- [ ] Deletar post "Ar Condicionado Savassi" (botão vermelho 🗑️)
- [ ] Confirmar diálogo de confirmação
- [ ] Verificar remoção da lista

### 4. Testar Blog Público (/blog)
- [ ] Navegar para /blog
- [ ] Verificar se post publicado aparece
- [ ] Testar link do post
- [ ] Verificar se posts em draft NÃO aparecem

### 5. Testar Outras Funcionalidades
- [ ] Publicar post "Eletricista em Funcionários"
- [ ] Testar despublicação (botão ⏸️)
- [ ] Gerar novo conteúdo (botão "Gerar Conteúdo")
- [ ] Executar análise de keywords
- [ ] Gerar sitemap

## Resultados Esperados
✅ Posts publicados visíveis no blog  
✅ Posts em draft invisíveis no público  
✅ Ações com feedback via toast  
✅ Interface responsiva e intuitiva  
✅ Confirmações para ações destrutivas

## Status Final Desejado
- 3 posts limpos (antigos deletados)
- 2-3 posts publicados e visíveis no blog
- Sistema de gerenciamento 100% funcional