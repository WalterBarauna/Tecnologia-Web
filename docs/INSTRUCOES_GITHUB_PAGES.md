# 📘 Instruções para Configuração do GitHub e GitHub Pages

## ✅ Status Atual do Projeto

A estrutura do projeto já está configurada:
- ✅ Diretórios criados (css/, js/, assets/imagens/)
- ✅ Repositório Git local inicializado
- ✅ Arquivos HTML, CSS e JavaScript criados

## 🚀 Próximos Passos

### 1️⃣ Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Configure o repositório:
   - **Repository name**: `Tecnologia-Web` (ou outro nome de sua preferência)
   - **Description**: "Projeto acadêmico - Aplicação web responsiva com Bootstrap 5"
   - **Visibility**: Público (necessário para GitHub Pages gratuito)
   - ⚠️ **NÃO** marque "Initialize this repository with a README" (já temos arquivos locais)
5. Clique em **"Create repository"**

### 2️⃣ Conectar Repositório Local ao GitHub

Após criar o repositório no GitHub, execute os seguintes comandos no terminal:

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/SEU-USUARIO/Tecnologia-Web.git

# Verificar se foi adicionado corretamente
git remote -v

# Adicionar todos os arquivos ao staging
git add .

# Fazer o primeiro commit
git commit -m "feat: estrutura inicial do projeto com Bootstrap"

# Enviar para o GitHub (primeira vez)
git push -u origin main
```

⚠️ **Importante**: Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub!

### 3️⃣ Configurar GitHub Pages

Após fazer o push dos arquivos:

1. No seu repositório no GitHub, clique em **"Settings"** (Configurações)
2. No menu lateral esquerdo, clique em **"Pages"**
3. Em **"Source"** (Fonte):
   - Selecione **"Deploy from a branch"**
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **"Save"**
5. Aguarde alguns minutos (geralmente 1-3 minutos)
6. A URL do seu site será exibida: `https://SEU-USUARIO.github.io/Tecnologia-Web/`

### 4️⃣ Acessar o Site Publicado

Após a publicação, você pode acessar:

- **Página de Login**: `https://SEU-USUARIO.github.io/Tecnologia-Web/login.html`
- **Landing Page**: `https://SEU-USUARIO.github.io/Tecnologia-Web/index.html`

## 🔄 Atualizações Futuras

Sempre que fizer alterações no projeto:

```bash
# Adicionar arquivos modificados
git add .

# Fazer commit com mensagem descritiva
git commit -m "descrição das alterações"

# Enviar para o GitHub
git push origin main
```

O GitHub Pages atualizará automaticamente em alguns minutos!

## 📋 Checklist de Verificação

Marque conforme for completando:

- [ ] Repositório criado no GitHub
- [ ] Repositório local conectado ao remoto
- [ ] Arquivos enviados para o GitHub (git push)
- [ ] GitHub Pages configurado nas Settings
- [ ] Site acessível via URL do GitHub Pages
- [ ] Página de login funcionando
- [ ] Landing page funcionando
- [ ] Responsividade testada em diferentes dispositivos

## 🆘 Problemas Comuns

### Erro: "remote origin already exists"
```bash
# Remover o remote existente
git remote remove origin

# Adicionar novamente
git remote add origin https://github.com/SEU-USUARIO/Tecnologia-Web.git
```

### Erro: "failed to push some refs"
```bash
# Forçar o push (use com cuidado!)
git push -u origin main --force
```

### Site não carrega no GitHub Pages
- Aguarde 5-10 minutos após a configuração
- Verifique se o repositório é público
- Confirme que os arquivos estão na branch main
- Limpe o cache do navegador (Ctrl + F5)

## 📚 Recursos Adicionais

- [Documentação GitHub Pages](https://docs.github.com/pt/pages)
- [Guia Git Básico](https://git-scm.com/book/pt-br/v2)
- [Bootstrap 5 Documentação](https://getbootstrap.com/docs/5.3/)

---

**Desenvolvido para a disciplina de Tecnologia Web**
