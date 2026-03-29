# 💻 Projeto - Atividade Bootstrap (Tecnologia Web)

## 📌 Descrição

Este projeto foi desenvolvido como parte da disciplina de **Tecnologia Web**, com o objetivo de praticar a utilização do framework **Bootstrap** na criação de interfaces web responsivas.

A atividade consiste na criação de:

* Uma tela de login
* Uma página principal (landing page) com informações pessoais/profissionais

Não há necessidade de integração com banco de dados — o login apenas redireciona o usuário para a página principal.

---

## 🚀 Tecnologias Utilizadas

* **HTML5**: Estrutura semântica das páginas
* **CSS3**: Estilos personalizados complementares
* **Bootstrap 5.3.x**: Framework CSS responsivo (via CDN)
* **JavaScript ES6**: Funcionalidades de redirecionamento e interação
* **Font Awesome 6.4.x**: Ícones para redes sociais
* **GitHub Pages**: Hospedagem e deploy do site estático
* **Git/GitHub**: Controle de versão e colaboração

---

## 📂 Estrutura do Projeto

```
📁 projeto-bootstrap
│
├── .github/
│   └── workflows/
│       └── deploy.yml    # Workflow de CI/CD (desabilitado - usar deploy manual)
├── .kiro/                # Configurações do Kiro IDE
│   └── specs/            # Especificações do projeto
├── index.html            # Tela de login (página de entrada)
├── portfolio.html        # Landing page (currículo)
├── css/
│   └── styles.css        # Estilos personalizados
├── js/
│   └── script.js         # Lógica de redirecionamento e interações
├── assets/
│   └── imagens/          # Imagens usadas no projeto
├── docs/
│   ├── INSTRUCOES_GITHUB_PAGES.md  # Guia de configuração do GitHub Pages
│   ├── RESUMO_TECNICO.md           # Resumo técnico do projeto
│   └── README.md         # Documentação adicional
└── README.md             # Este arquivo
```

### Descrição dos Arquivos Principais

* **index.html**: Página inicial com formulário de login simples
* **portfolio.html**: Landing page responsiva com currículo profissional
* **css/styles.css**: Estilos personalizados que complementam o Bootstrap
* **js/script.js**: Funcionalidades JavaScript (redirecionamento, scroll suave, etc.)
* **docs/INSTRUCOES_GITHUB_PAGES.md**: Guia completo para configurar o deploy
* **docs/RESUMO_TECNICO.md**: Documentação técnica detalhada do projeto

---

## 🔐 Funcionalidade de Login

A tela de login (`index.html`) permite ao usuário inserir:

* Nome de usuário
* Senha

Após clicar no botão **"Entrar"**, o sistema:
➡️ Redireciona para a página `portfolio.html` (currículo)

⚠️ Observação:
Não há validação com banco de dados, conforme solicitado na atividade.

---

## 🌐 Landing Page

A página principal (`portfolio.html`) funciona como uma **landing page**, contendo:

* Apresentação pessoal
* Informações de contato
* Formação acadêmica
* Habilidades técnicas
* Experiência profissional
* Links para redes sociais

---

## 🚀 Deploy com GitHub Pages

Este projeto está configurado para deploy no **GitHub Pages** usando o método de **deploy manual via branch**.

### Como funciona:

1. **Push para a branch main**: Sempre que você faz push de alterações para a branch `main`, o GitHub Pages atualiza automaticamente o site
2. **Deploy direto**: O GitHub Pages serve os arquivos diretamente da branch `main` sem necessidade de workflow
3. **Publicação**: O site é publicado automaticamente em 2-3 minutos após cada push

### Acessar o site publicado:

Após o deploy, o site estará disponível em:
```
https://seu-usuario.github.io/projeto-bootstrap/
```

**Nota**: A página inicial é `index.html` (login). Após fazer login, você será redirecionado para `portfolio.html` (currículo).

### Configurar GitHub Pages:

Para instruções detalhadas sobre como configurar o GitHub Pages no seu repositório, consulte:
📄 [docs/INSTRUCOES_GITHUB_PAGES.md](docs/INSTRUCOES_GITHUB_PAGES.md)

**Configuração recomendada**:
- Settings → Pages
- Source: "Deploy from a branch"
- Branch: "main" / "/ (root)"

---

## ▶️ Como Executar o Projeto Localmente

### Opção 1: Abrir diretamente no navegador

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/projeto-bootstrap.git
cd projeto-bootstrap
```

2. Abra o arquivo `index.html` diretamente no navegador:
   - Navegue até a pasta do projeto
   - Clique duas vezes em `index.html`
   - Ou arraste o arquivo para o navegador

3. Insira qualquer usuário/senha e clique em **Entrar**

### Opção 2: Usar Live Server (recomendado)

1. Abra o projeto no **VS Code** ou **Kiro IDE**

2. Instale a extensão **Live Server** (se ainda não tiver)

3. Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**

4. O navegador abrirá automaticamente em `http://localhost:5500/index.html`

### Opção 3: Usar servidor HTTP Python

```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000/index.html
```

---

## 🔄 Deploy e Atualizações

O projeto utiliza **deploy manual via branch** no GitHub Pages:

✅ Deploy automático a cada push na branch `main`
✅ Sem necessidade de configuração de GitHub Actions
✅ Simples e direto, ideal para projetos estáticos
✅ Atualização em 2-3 minutos após cada push

### Como atualizar o site:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

### Verificar o deploy:

Acesse **Settings → Pages** no repositório para ver o status e a URL do site publicado.

---

## 📸 Prévia do Projeto

### 🔑 Tela de Login

* Formulário com campos de usuário e senha
* Botão de acesso estilizado com Bootstrap
* Design responsivo para mobile e desktop
* Feedback visual durante o login

### 🧑‍💼 Landing Page

* Página estilo currículo profissional
* Layout responsivo com Bootstrap 5
* Navegação suave entre seções
* Links para redes sociais (LinkedIn, Instagram, Email)
* Seções: Sobre, Formação, Habilidades, Experiência, Contato

---

## 🎯 Objetivo da Atividade

Aplicar conceitos de:

* Estruturação HTML5 semântica
* Estilização com Bootstrap 5
* Navegação entre páginas
* Criação de interfaces responsivas
* Deploy automatizado com GitHub Pages
* Publicação de sites estáticos

### Requisitos Atendidos

Este projeto atende aos seguintes requisitos da atividade acadêmica:

✅ **Tela de Login**: Formulário funcional com redirecionamento
✅ **Landing Page Responsiva**: Currículo online adaptável a diferentes dispositivos
✅ **Sistema de Grid Bootstrap**: Layout responsivo com breakpoints adequados
✅ **Navegação e Links Sociais**: Links para redes sociais e contato
✅ **Estrutura de Arquivos Organizada**: Separação clara de HTML, CSS e JS
✅ **Funcionalidade de Redirecionamento**: JavaScript para navegação entre páginas
✅ **Compatibilidade Cross-Browser**: Testado em navegadores modernos
✅ **Deploy no GitHub Pages**: Site publicado e acessível online

---

## 🛠️ Recursos Adicionais

* **Bootstrap 5**: Framework CSS utilizado via CDN
* **Font Awesome**: Ícones para redes sociais
* **Scroll Suave**: Navegação suave entre seções da landing page
* **Validação de Formulário**: Feedback visual para campos obrigatórios
* **Responsividade**: Layout adaptável para mobile, tablet e desktop

---

## ✅ Validação e Testes

### Validação de Código

Para garantir a qualidade do código, utilize as seguintes ferramentas online:

* **HTML5**: [W3C Markup Validation Service](https://validator.w3.org/)
  - Acesse o validador
  - Cole a URL do seu site ou faça upload dos arquivos HTML
  - Verifique se não há erros críticos

* **CSS3**: [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  - Valide o arquivo `css/styles.css`
  - Corrija warnings importantes

* **Performance**: [PageSpeed Insights](https://pagespeed.web.dev/)
  - Teste a velocidade de carregamento
  - Verifique métricas de performance

### 🚀 Otimização de Performance

O projeto foi otimizado para garantir carregamento rápido e boa experiência do usuário:

#### Métricas Atuais
* **Tamanho Total**: ~52 KB (arquivos locais)
* **Tempo de Carregamento**: < 3 segundos (meta atingida ✓)
* **Tamanho do Projeto**: < 2 MB (meta atingida ✓)

#### Otimizações Implementadas
* ✅ Meta tags de SEO completas (description, keywords, Open Graph, Twitter Cards)
* ✅ Preconnect para CDNs (reduz latência)
* ✅ Favicon SVG otimizado (< 1 KB)
* ✅ CSS com variáveis reutilizáveis
* ✅ JavaScript modular e eficiente
* ✅ Recursos via CDN com cache compartilhado

#### Gerar Favicon ICO
Para gerar o favicon.ico:
1. Abra `assets/imagens/favicon-generator.html` no navegador
2. Clique em "Gerar e Baixar Favicon"
3. Mova o arquivo para `assets/imagens/`

📄 **Documentação Completa**: [docs/OTIMIZACAO_PERFORMANCE.md](docs/OTIMIZACAO_PERFORMANCE.md)

### Testes de Responsividade

Teste o site nos seguintes breakpoints:

* **Mobile**: 375px (iPhone), 360px (Android)
* **Tablet**: 768px (iPad), 800px (Android Tablet)
* **Desktop**: 1366px (Laptop), 1920px (Desktop)

Use as ferramentas de desenvolvedor do navegador (F12) para simular diferentes dispositivos.

### Testes de Compatibilidade

Verifique o funcionamento em:

* ✅ Google Chrome (versão atual)
* ✅ Mozilla Firefox (versão atual)
* ✅ Microsoft Edge (versão atual)
* ✅ Safari (se disponível)

### Checklist de Entrega

- [ ] Site publicado no GitHub Pages
- [ ] URL de produção funcionando corretamente
- [ ] Login redireciona para a landing page
- [ ] Todas as seções da landing page estão visíveis
- [ ] Links sociais abrem em nova aba
- [ ] Layout responsivo em mobile, tablet e desktop
- [ ] Navegação suave entre seções funciona
- [ ] HTML validado sem erros críticos
- [ ] CSS validado
- [ ] README.md completo e atualizado
- [ ] Código commitado e enviado para o GitHub

📄 **Checklist Completo**: [docs/CHECKLIST_ENTREGA.md](docs/CHECKLIST_ENTREGA.md)

---

## 📚 Referência

Atividade baseada no material disponibilizado pelo professor na disciplina de Tecnologia Web.

### Documentação Adicional

- 📄 [Instruções de Configuração do GitHub Pages](docs/INSTRUCOES_GITHUB_PAGES.md)
- 📄 [Resumo Técnico do Projeto](docs/RESUMO_TECNICO.md)
- 📄 [Documentação Complementar](docs/README.md)

---

## 👨‍💻 Autor

**Walter Gonçalves Baraúna Filho**

* Email: walter.barauna@gmail.com
* LinkedIn: [linkedin.com/in/walter-barauna](https://linkedin.com/in/walter-barauna)
* Instagram: [@walter.barauna](https://instagram.com/walter.barauna)

---

## 📝 Licença

Este projeto foi desenvolvido para fins acadêmicos e está disponível para uso educacional.

---

## 🤝 Contribuições

Este é um projeto acadêmico, mas sugestões e melhorias são bem-vindas!

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

Se tiver dúvidas sobre o projeto ou sobre como configurar o GitHub Pages, consulte:

* [Documentação do Bootstrap 5](https://getbootstrap.com/docs/5.3/)
* [Documentação do GitHub Pages](https://docs.github.com/pt/pages)
* [Documentação do GitHub Actions](https://docs.github.com/pt/actions)
* [Guia de Configuração do GitHub Pages](docs/INSTRUCOES_GITHUB_PAGES.md)

---

**Desenvolvido com 💙 usando Bootstrap 5**
