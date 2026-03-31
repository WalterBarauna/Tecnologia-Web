# Estrutura do Projeto

## Organização de Diretórios

```
projeto-bootstrap/
│
├── .git/                   # Controle de versão Git
├── .github/                # Configurações do GitHub
│   └── workflows/          # GitHub Actions (desabilitado)
│
├── .kiro/                  # Configurações do Kiro IDE
│   ├── specs/              # Especificações de features
│   └── steering/           # Regras de steering (este arquivo)
│
├── assets/                 # Recursos estáticos
│   └── imagens/            # Imagens e ícones
│       ├── favicon.ico     # Favicon do site
│       ├── favicon.svg     # Favicon vetorial
│       ├── icon-cv.png     # Logo do currículo
│       ├── foto1.png       # Foto de perfil
│       └── perfil.jpg      # Foto alternativa
│
├── css/                    # Estilos
│   └── styles.css          # Arquivo CSS principal (~1600 linhas)
│
├── js/                     # Scripts
│   └── script.js           # JavaScript principal (~200 linhas)
│
├── docs/                   # Documentação
│   ├── CHECKLIST_ENTREGA.md        # Checklist de entrega
│   ├── INSTRUCOES_GITHUB_PAGES.md  # Guia de deploy
│   ├── OTIMIZACAO_PERFORMANCE.md   # Guia de otimização
│   ├── RESUMO_TECNICO.md           # Resumo técnico completo
│   └── README.md                   # Documentação adicional
│
├── index.html              # Página de login (entrada)
├── portfolio.html          # Landing page (currículo)
├── README.md               # Documentação principal
└── .gitignore              # Arquivos ignorados pelo Git
```

## Páginas HTML

### index.html (Página de Login)
- **Propósito**: Tela de entrada com formulário de autenticação
- **Componentes principais**:
  - Layout split-screen (desktop): logo à esquerda, formulário à direita
  - Formulário com campos de email e senha
  - Validação visual de campos
  - Feedback de loading com SweetAlert2
  - Redirecionamento para portfolio.html
- **Dependências**: Bootstrap 5, SweetAlert2, styles.css, script.js

### portfolio.html (Landing Page)
- **Propósito**: Currículo online profissional
- **Seções**:
  1. Navbar fixa com navegação por âncoras
  2. Hero Section com apresentação e foto
  3. Sobre (informações pessoais e objetivo)
  4. Formação (educação acadêmica)
  5. Habilidades (badges de tecnologias)
  6. Experiência (histórico profissional)
  7. Contato (links sociais e informações)
  8. Footer
- **Dependências**: Bootstrap 5, Font Awesome, styles.css, script.js

## CSS (styles.css)

### Estrutura do Arquivo

```css
/* 1. VARIÁVEIS CSS (linhas 1-60) */
:root { /* cores, tipografia, espaçamento, sombras, transições */ }

/* 2. ESTILOS GLOBAIS (linhas 61-100) */
* { /* reset */ }
body { /* configurações base */ }
h1-h6, p, a, img, section { /* elementos base */ }

/* 3. PÁGINA DE LOGIN (linhas 101-450) */
.login-left-panel { /* painel esquerdo */ }
.login-right-panel { /* painel direito */ }
.login-form-container { /* container do formulário */ }
.form-control-custom { /* inputs customizados */ }
.btn-login { /* botão de login */ }

/* 4. LANDING PAGE (linhas 451-700) */
.hero-section { /* seção hero com gradiente */ }
.navbar { /* barra de navegação */ }
footer { /* rodapé */ }

/* 5. COMPONENTES REUTILIZÁVEIS (linhas 701-900) */
.card-personalizado { /* cards com hover */ }
.btn { /* botões customizados */ }
.botao-social { /* botões de redes sociais */ }
.badge-habilidade { /* badges de tecnologias */ }

/* 6. ANIMAÇÕES (linhas 901-1000) */
@keyframes fadeIn, fadeInUp, fadeInDown, slideInLeft, slideInRight

/* 7. RESPONSIVIDADE (linhas 1001-1500) */
@media (max-width: 575px) { /* mobile */ }
@media (min-width: 576px) and (max-width: 767px) { /* small */ }
@media (min-width: 768px) and (max-width: 991px) { /* tablet */ }
@media (min-width: 992px) and (max-width: 1199px) { /* desktop */ }
@media (min-width: 1200px) { /* large desktop */ }

/* 8. ACESSIBILIDADE (linhas 1501-1600) */
.sr-only { /* screen reader only */ }
:focus { /* estados de foco */ }
@media (prefers-reduced-motion) { /* movimento reduzido */ }
@media (prefers-color-scheme: dark) { /* modo escuro */ }

/* 9. IMPRESSÃO (linhas 1601-1619) */
@media print { /* estilos para impressão */ }
```

### Convenções de Nomenclatura CSS

- **Classes de componentes**: `.card-personalizado`, `.botao-social`, `.badge-habilidade`
- **Classes de página**: `.login-left-panel`, `.hero-section`
- **Classes de estado**: `.active`, `.loading`, `.hover-lift`
- **Classes utilitárias**: `.text-gradient`, `.shadow-md-custom`

## JavaScript (script.js)

### Estrutura do Arquivo

```javascript
// 1. CONFIGURAÇÕES GLOBAIS
const CONFIG = { animacoes: true, tempoRedirecionamento: 500 }

// 2. FUNÇÕES DE LOGIN (index.html)
function handleLogin(event) { /* gerencia submit do formulário */ }
function validarCampos() { /* valida email e senha */ }
function validarEmail(email) { /* regex de validação */ }
function mostrarErros(erros) { /* exibe erros com SweetAlert2 */ }

// 3. FUNÇÕES DA LANDING PAGE (portfolio.html)
function inicializarAnimacoes() { /* scroll suave */ }
function configurarLinksExternos() { /* abre em nova aba */ }
function atualizarNavbarAtiva() { /* destaca seção ativa */ }

// 4. INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() { /* setup */ })
```

### Convenções JavaScript

- **Funções**: camelCase (`handleLogin`, `validarCampos`)
- **Constantes**: UPPER_CASE (`CONFIG`)
- **Event listeners**: arrow functions ou funções nomeadas
- **Comentários**: descritivos e concisos

## Padrões de Código

### HTML
- Indentação: 4 espaços
- Atributos: ordem alfabética quando possível
- Semântica: uso correto de tags (`<nav>`, `<section>`, `<footer>`)
- Acessibilidade: `aria-label`, `alt` text, labels para inputs

### CSS
- Indentação: 4 espaços
- Ordem de propriedades: posicionamento → box model → tipografia → visual → outros
- Comentários: seções delimitadas com `/* ===== TÍTULO ===== */`
- Variáveis CSS: uso extensivo para manutenibilidade

### JavaScript
- Indentação: 4 espaços
- Ponto e vírgula: sempre
- Strings: aspas simples preferencialmente
- Comentários: descritivos acima de funções complexas

## Sistema de Grid Bootstrap

### Estrutura Padrão

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
            <!-- Conteúdo -->
        </div>
    </div>
</div>
```

### Breakpoints Utilizados

- `col-12`: Mobile (100% largura)
- `col-sm-*`: ≥576px
- `col-md-*`: ≥768px (tablets)
- `col-lg-*`: ≥992px (desktops)
- `col-xl-*`: ≥1200px (large desktops)

## Componentes Reutilizáveis

### Cards
```html
<div class="card card-personalizado">
    <div class="card-body">
        <h5 class="card-title"><i class="fas fa-icon"></i>Título</h5>
        <p>Conteúdo</p>
    </div>
</div>
```

### Botões Sociais
```html
<a href="URL" class="botao-social [email|linkedin|instagram]" target="_blank">
    <i class="fab fa-icon"></i>
</a>
```

### Badges de Habilidades
```html
<span class="badge bg-primary badge-habilidade">Tecnologia</span>
```

## Navegação e Âncoras

### Estrutura de IDs
- `#home`: Hero section
- `#sobre`: Seção sobre
- `#formacao`: Formação acadêmica
- `#habilidades`: Habilidades técnicas
- `#experiencia`: Experiência profissional
- `#contato`: Contato e redes sociais

### Offset para Navbar Fixa
O JavaScript calcula automaticamente o offset da navbar para scroll suave correto.

## Convenções de Commit

```bash
# Formato: tipo: descrição curta

# Exemplos:
git commit -m "feat: adiciona seção de projetos"
git commit -m "fix: corrige responsividade em mobile"
git commit -m "style: melhora espaçamento dos cards"
git commit -m "docs: atualiza README com instruções"
git commit -m "refactor: reorganiza CSS em seções"
```

## Arquivos Importantes

- **README.md**: Documentação principal do projeto
- **docs/RESUMO_TECNICO.md**: Documentação técnica detalhada
- **docs/INSTRUCOES_GITHUB_PAGES.md**: Guia de deploy
- **.gitignore**: Ignora node_modules, .DS_Store, etc.
