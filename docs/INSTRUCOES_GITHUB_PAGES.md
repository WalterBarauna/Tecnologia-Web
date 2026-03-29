# Instruções para Configurar GitHub Pages

Este documento fornece instruções passo a passo para configurar o GitHub Pages e fazer o deploy automático do seu projeto Bootstrap.

## Pré-requisitos

- Conta no GitHub
- Repositório Git local inicializado
- Todos os arquivos do projeto commitados

## Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito e selecione **"New repository"**
3. Configure o repositório:
   - **Repository name**: `projeto-bootstrap` (ou outro nome de sua preferência)
   - **Description**: "Projeto acadêmico de Bootstrap 5 - Currículo Online"
   - **Visibility**: Selecione **Public** (necessário para GitHub Pages gratuito)
   - **NÃO** marque "Initialize this repository with a README" (já temos arquivos locais)
4. Clique em **"Create repository"**

## Passo 2: Conectar Repositório Local ao GitHub

Após criar o repositório, o GitHub mostrará instruções. Execute os seguintes comandos no terminal (na pasta do projeto):

```bash
# Se ainda não inicializou o Git localmente
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Projeto Bootstrap completo"

# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu nome de usuário)
git remote add origin https://github.com/SEU-USUARIO/projeto-bootstrap.git

# Renomear a branch para main (se necessário)
git branch -M main

# Fazer push para o GitHub
git push -u origin main
```

## Passo 3: Configurar GitHub Pages

### ⚠️ Importante: Escolha o método de deploy adequado

**Se sua conta do GitHub tiver problemas de billing ou GitHub Actions bloqueado**, use o **Método 1 (Deploy Manual)**.
Caso contrário, você pode usar o **Método 2 (Deploy Automático com GitHub Actions)**.

### Método 1: Deploy Manual via Branch (Recomendado se Actions estiver bloqueado)

1. No seu repositório no GitHub, clique na aba **"Settings"** (Configurações)
2. No menu lateral esquerdo, clique em **"Pages"** (na seção "Code and automation")
3. Na seção **"Build and deployment"**:
   - **Source**: Selecione **"Deploy from a branch"**
   - **Branch**: Selecione **"main"** e **"/ (root)"**
   - Clique em **"Save"**
4. Aguarde alguns minutos e o site estará disponível

✅ **Vantagens**: Funciona mesmo com Actions bloqueado, simples e direto
❌ **Desvantagens**: Não tem validação automática dos arquivos

### Método 2: Deploy Automático com GitHub Actions (Requer Actions habilitado)

1. No seu repositório no GitHub, clique na aba **"Settings"** (Configurações)
2. No menu lateral esquerdo, clique em **"Pages"** (na seção "Code and automation")
3. Na seção **"Build and deployment"**:
   - **Source**: Selecione **"GitHub Actions"**
   - Não é necessário selecionar branch manualmente, o workflow fará isso automaticamente
4. Clique em **"Save"** (se houver botão de salvar)

✅ **Vantagens**: Validação automática, deploy automatizado
❌ **Desvantagens**: Requer GitHub Actions habilitado (pode ter problemas de billing)

## Passo 4: Verificar o Deploy

### Se você usou o Método 1 (Deploy Manual):

1. Aguarde 2-3 minutos após fazer push
2. Vá para **Settings → Pages**
3. Você verá uma mensagem indicando que o site está sendo publicado
4. Quando estiver pronto, aparecerá: "Your site is live at https://SEU-USUARIO.github.io/projeto-bootstrap/"

### Se você usou o Método 2 (GitHub Actions):

1. Vá para a aba **"Actions"** no seu repositório
2. Você verá o workflow **"Deploy to GitHub Pages"** em execução
3. Aguarde até que o workflow seja concluído (ícone verde ✓)
4. Se houver erro (ícone vermelho ✗), clique no workflow para ver os logs e identificar o problema

## Passo 5: Acessar o Site Publicado

Após o deploy ser concluído com sucesso:

1. Volte para **Settings → Pages**
2. No topo da página, você verá uma mensagem:
   ```
   Your site is live at https://SEU-USUARIO.github.io/projeto-bootstrap/
   ```
3. Clique no link ou copie a URL
4. Acesse a URL no navegador

**Importante**: A página inicial será `login.html`. Para acessá-la diretamente, use:
```
https://SEU-USUARIO.github.io/projeto-bootstrap/login.html
```

## Passo 6: Configurar Página Inicial (Opcional)

Se você quiser que `login.html` seja a página inicial padrão, você tem duas opções:

### Opção 1: Renomear login.html para index.html
```bash
# Renomear o arquivo atual index.html
mv index.html curriculo.html

# Renomear login.html para index.html
mv login.html index.html

# Atualizar o redirecionamento no JavaScript (js/script.js)
# Mudar de: window.location.href = 'index.html';
# Para: window.location.href = 'curriculo.html';

# Commit e push
git add .
git commit -m "Configurar login.html como página inicial"
git push
```

### Opção 2: Criar um index.html que redireciona
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=login.html">
    <title>Redirecionando...</title>
</head>
<body>
    <p>Redirecionando para a página de login...</p>
    <script>window.location.href = 'login.html';</script>
</body>
</html>
```

## Atualizações Futuras

Sempre que você fizer alterações no projeto:

```bash
# Adicionar arquivos modificados
git add .

# Fazer commit com mensagem descritiva
git commit -m "Descrição das alterações"

# Enviar para o GitHub
git push
```

**Se você usou Deploy Manual (Método 1)**: O site será atualizado automaticamente em 2-3 minutos após o push.

**Se você usou GitHub Actions (Método 2)**: O GitHub Actions automaticamente executará o workflow e atualizará o site em alguns minutos.

## Solução de Problemas

### Erro: "The job was not started because your account is locked due to a billing issue"
Este erro ocorre quando o GitHub Actions está bloqueado na sua conta por questões de billing.

**Solução**: Use o **Método 1 (Deploy Manual via Branch)** descrito no Passo 3.
1. Vá em Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: "main" / "/ (root)"
4. Save

### Erro: "login.html não encontrado"
- Verifique se o arquivo existe na raiz do projeto
- Certifique-se de que fez commit do arquivo antes do push

### Erro: "css/styles.css não encontrado"
- Verifique se a pasta `css` existe
- Certifique-se de que o arquivo `styles.css` está dentro da pasta `css`

### Erro: "js/script.js não encontrado"
- Verifique se a pasta `js` existe
- Certifique-se de que o arquivo `script.js` está dentro da pasta `js`

### Site não atualiza após push
- Aguarde 2-3 minutos para o deploy ser concluído
- Limpe o cache do navegador (Ctrl + Shift + R ou Cmd + Shift + R)
- Verifique se o workflow foi executado com sucesso na aba Actions

### Erro 404 ao acessar o site
- Verifique se o GitHub Pages está ativado em Settings → Pages
- Confirme que a URL está correta: `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`
- Aguarde alguns minutos após o primeiro deploy

## Verificação Final

Use este checklist para confirmar que tudo está funcionando:

- [ ] Repositório criado no GitHub
- [ ] Código local enviado para o GitHub (git push)
- [ ] GitHub Pages configurado com source "GitHub Actions"
- [ ] Workflow executado com sucesso (ícone verde na aba Actions)
- [ ] Site acessível via URL do GitHub Pages
- [ ] Página de login carrega corretamente
- [ ] Redirecionamento para o currículo funciona
- [ ] Layout responsivo funciona em diferentes dispositivos
- [ ] Links sociais abrem em nova aba

## Recursos Adicionais

- [Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages)
- [Documentação do GitHub Actions](https://docs.github.com/pt/actions)
- [Guia de Markdown do GitHub](https://docs.github.com/pt/get-started/writing-on-github)

## Suporte

Se encontrar problemas:
1. Verifique os logs do workflow na aba Actions
2. Consulte a documentação oficial do GitHub
3. Peça ajuda ao professor ou colegas de turma

---

**Última atualização**: 2024
**Projeto**: Atividade Prática Bootstrap - Tecnologia Web
