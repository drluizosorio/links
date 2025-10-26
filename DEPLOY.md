# 🚀 Guia de Deploy para Vercel

Este documento descreve o processo completo para fazer deploy do site Dr. Luiz Osório na Vercel.

## 📋 Pré-requisitos

### 1. Conta na Vercel
- Crie uma conta em [vercel.com](https://vercel.com)
- Conecte sua conta GitHub/GitLab/Bitbucket

### 2. Banco de Dados Neon
- Crie uma conta em [neon.tech](https://neon.tech)
- Configure um banco PostgreSQL
- Obtenha a string de conexão `DATABASE_URL`

## 🔧 Configuração do Projeto

### 1. Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env.local` e configure:

```bash
# Database
DATABASE_URL="postgresql://username:password@host/database?sslmode=require"

# App Configuration
NEXT_PUBLIC_APP_URL="https://seu-dominio.vercel.app"
NODE_ENV="production"
```

### 2. Arquivos de Configuração
O projeto já inclui:
- ✅ `vercel.json` - Configurações específicas da Vercel
- ✅ `.env.example` - Template das variáveis de ambiente
- ✅ `package.json` - Dependências e scripts

## 🚀 Processo de Deploy

### Opção 1: Deploy via Dashboard Vercel (Recomendado)

1. **Acesse o Dashboard**
   - Vá para [vercel.com/dashboard](https://vercel.com/dashboard)
   - Clique em "New Project"

2. **Conecte o Repositório**
   - Selecione seu provedor Git (GitHub/GitLab/Bitbucket)
   - Escolha o repositório do projeto
   - Clique em "Import"

3. **Configure o Projeto**
   - **Project Name**: `dr-luiz-osorio` (ou nome desejado)
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: `./` (raiz do projeto)
   - **Build Command**: `npm run build` (padrão)
   - **Output Directory**: `.next` (padrão)

4. **Adicione Variáveis de Ambiente**
   - Na seção "Environment Variables", adicione:
     - `DATABASE_URL`: Sua string de conexão Neon
     - `NEXT_PUBLIC_APP_URL`: URL do seu projeto Vercel
     - `NODE_ENV`: `production`

5. **Deploy**
   - Clique em "Deploy"
   - Aguarde o processo de build e deploy

### Opção 2: Deploy via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login na Vercel
vercel login

# Deploy do projeto
vercel

# Para deploy de produção
vercel --prod
```

## 🔗 Configuração de Domínio Personalizado

### 1. Domínio Próprio
Se você tem um domínio próprio:

1. **No Dashboard Vercel**:
   - Vá para Settings > Domains
   - Adicione seu domínio personalizado
   - Configure os DNS conforme instruções

2. **Configuração DNS**:
   ```
   Type: CNAME
   Name: www (ou @)
   Value: cname.vercel-dns.com
   ```

### 2. Subdomínio Vercel
Por padrão, seu projeto estará disponível em:
- `https://seu-projeto.vercel.app`
- `https://seu-projeto-git-main-seu-usuario.vercel.app`

## 🗄️ Configuração do Banco de Dados

### 1. Setup Inicial
Após o primeiro deploy, execute o setup do banco:

```bash
# Via curl
curl -X POST https://seu-dominio.vercel.app/api/database/setup

# Ou acesse diretamente no browser
https://seu-dominio.vercel.app/api/database/setup
```

### 2. Verificação
Teste se o banco está funcionando:
```bash
curl https://seu-dominio.vercel.app/api/blog
```

## 📊 Monitoramento e Logs

### 1. Dashboard Vercel
- **Functions**: Monitore performance das API routes
- **Analytics**: Acompanhe métricas de uso
- **Logs**: Visualize logs de build e runtime

### 2. Comandos Úteis
```bash
# Ver logs em tempo real
vercel logs

# Ver deployments
vercel ls

# Ver informações do projeto
vercel inspect
```

## 🔄 Atualizações Automáticas

### Git Integration
- Pushes para `main` → Deploy automático de produção
- Pushes para outras branches → Deploy de preview
- Pull Requests → Deploy de preview com URL única

### Configuração de Branches
No Dashboard Vercel > Settings > Git:
- **Production Branch**: `main`
- **Preview Branches**: Todas as outras

## 🛠️ Troubleshooting

### Problemas Comuns

1. **Build Failure**
   ```bash
   # Teste local
   npm run build
   
   # Verifique logs no Dashboard Vercel
   ```

2. **Erro de Variáveis de Ambiente**
   - Verifique se todas as variáveis estão configuradas
   - Redeploy após adicionar variáveis

3. **Erro de Banco de Dados**
   - Verifique a string de conexão
   - Execute o setup do banco
   - Verifique logs da função API

4. **Erro 404 em Rotas**
   - Verifique se `vercel.json` está configurado
   - Confirme estrutura de pastas do Next.js

### Comandos de Debug
```bash
# Build local
npm run build

# Teste produção local
npm run start

# Verificar dependências
npm audit

# Limpar cache
rm -rf .next node_modules
npm install
```

## 📈 Otimizações de Performance

### 1. Configurações Vercel
- **Regions**: Configurado para `iad1` (US East)
- **Functions**: Timeout de 10s para API routes
- **Headers**: Cache e segurança configurados

### 2. Next.js Otimizações
- Static Generation para páginas estáticas
- API Routes otimizadas
- Lazy loading de componentes
- Compressão de imagens

## 🔒 Segurança

### Headers de Segurança
Configurados no `vercel.json`:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy

### Variáveis Sensíveis
- Nunca commite `.env.local`
- Use apenas variáveis de ambiente da Vercel
- Rotacione credenciais regularmente

## 📞 Suporte

### Recursos Úteis
- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Next.js](https://nextjs.org/docs)
- [Neon Database Docs](https://neon.tech/docs)

### Contato
Para suporte específico do projeto, consulte a documentação do código ou entre em contato com a equipe de desenvolvimento.

---

**✅ Projeto pronto para produção!**

Este guia garante um deploy seguro e otimizado do site Dr. Luiz Osório na Vercel.