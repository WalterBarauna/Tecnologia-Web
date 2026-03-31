# Stack Tecnológica

## Front-end

### Core
- **HTML5**: Estrutura semântica com meta tags para SEO e Open Graph
- **CSS3**: Estilos personalizados com variáveis CSS, animações e transições
- **JavaScript ES6**: Funcionalidades interativas e validação de formulários

### Framework e Bibliotecas
- **Bootstrap 5.3.x**: Framework CSS responsivo (via CDN)
  - Sistema de grid responsivo (12 colunas)
  - Componentes: navbar, cards, forms, buttons, badges
  - Utilitários de espaçamento e tipografia
- **Font Awesome 6.4.x**: Ícones vetoriais (via CDN)
- **SweetAlert2**: Modais e alertas customizados (apenas em index.html)

### CDNs Utilizados
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- SweetAlert2 (apenas login) -->
<link href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<!-- SweetAlert2 JS (apenas login) -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

## Estrutura de Arquivos

```
projeto/
├── index.html              # Página de login
├── portfolio.html          # Landing page (currículo)
├── css/
│   └── styles.css          # Estilos customizados (~1600 linhas)
├── js/
│   └── script.js           # Lógica JavaScript (~200 linhas)
├── assets/
│   └── imagens/            # Imagens e favicons
├── docs/                   # Documentação técnica
└── .kiro/                  # Configurações do Kiro IDE
```

## Deploy e Hospedagem

- **Controle de Versão**: Git
- **Repositório**: GitHub
- **Hospedagem**: GitHub Pages
- **Método de Deploy**: Deploy manual via branch main
- **URL**: `https://[usuario].github.io/[repositorio]/`

## Comandos Comuns

### Desenvolvimento Local

```bash
# Opção 1: Abrir diretamente no navegador
# Navegue até a pasta e abra index.html

# Opção 2: Live Server (VS Code/Kiro)
# Clique com botão direito em index.html → "Open with Live Server"

# Opção 3: Servidor HTTP Python
python -m http.server 8000
# Acesse: http://localhost:8000/index.html
```

### Deploy

```bash
# Adicionar alterações
git add .

# Commit com mensagem descritiva
git commit -m "Descrição das alterações"

# Push para GitHub (deploy automático)
git push origin main
```

### Validação

```bash
# Validar HTML5
# Acesse: https://validator.w3.org/
# Cole a URL ou faça upload do arquivo

# Validar CSS3
# Acesse: https://jigsaw.w3.org/css-validator/
# Cole a URL ou faça upload do arquivo

# Testar Performance
# Acesse: https://pagespeed.web.dev/
# Insira a URL do site publicado
```

## Breakpoints Responsivos

```css
/* Extra Small (Mobile) */
@media (max-width: 575px) { }

/* Small (Smartphones landscape) */
@media (min-width: 576px) and (max-width: 767px) { }

/* Medium (Tablets) */
@media (min-width: 768px) and (max-width: 991px) { }

/* Large (Desktops) */
@media (min-width: 992px) and (max-width: 1199px) { }

/* Extra Large (Large Desktops) */
@media (min-width: 1200px) { }

/* XXL (Very Large Screens) */
@media (min-width: 1400px) { }
```

## Variáveis CSS Principais

```css
:root {
    /* Cores */
    --cor-primaria: #0d6efd;
    --cor-secundaria: #6c757d;
    --bg-light: #f8f9fa;
    --bg-dark: #212529;
    
    /* Tipografia */
    --fonte-principal: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --fonte-tamanho-base: 1rem;
    
    /* Espaçamento */
    --espacamento-sm: 0.5rem;
    --espacamento-md: 1rem;
    --espacamento-lg: 1.5rem;
    --espacamento-xl: 3rem;
    
    /* Sombras */
    --sombra-pequena: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    --sombra-media: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    
    /* Transições */
    --transicao-normal: 0.3s ease-in-out;
}
```

## Compatibilidade

- ✅ Google Chrome (versão atual)
- ✅ Mozilla Firefox (versão atual)
- ✅ Microsoft Edge (versão atual)
- ✅ Safari (versão atual)
- ✅ Dispositivos móveis (iOS e Android)

## Performance

- Tamanho total: ~52 KB (arquivos locais)
- Tempo de carregamento: < 3 segundos
- Recursos via CDN com cache compartilhado
- Imagens otimizadas
