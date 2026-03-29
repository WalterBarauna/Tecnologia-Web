# Plano de Implementação: Atividade Prática Bootstrap

## Visão Geral

Este plano implementa uma aplicação web responsiva com Bootstrap 5 para projeto acadêmico, incluindo tela de login e landing page (currículo online). O foco está em demonstrar competências em desenvolvimento front-end responsivo com validação simplificada e deploy automatizado no GitHub Pages.

## Tarefas

- [x] 1. Configurar estrutura do projeto e repositório GitHub
  - Criar estrutura de diretórios (css/, js/, assets/imagens/)
  - Inicializar repositório Git local
  - Criar repositório no GitHub
  - Configurar GitHub Pages nas configurações do repositório
  - _Requisitos: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 2. Implementar página de login (login.html)
  - [x] 2.1 Criar estrutura HTML5 com Bootstrap CDN
    - Implementar template HTML com meta tags e Bootstrap 5.3.x
    - Adicionar formulário de login com campos usuário e senha
    - Incluir validação HTML5 nos campos obrigatórios
    - _Requisitos: 1.1, 1.2, 1.5_
  
  - [x] 2.2 Implementar responsividade da tela de login
    - Configurar sistema de grid Bootstrap para diferentes telas
    - Aplicar classes responsivas (col-12, col-sm-8, col-md-6, col-lg-4)
    - Testar layout em mobile, tablet e desktop
    - _Requisitos: 1.4, 3.1, 3.2, 3.3, 3.4_

- [x] 3. Implementar funcionalidade de redirecionamento
  - [x] 3.1 Criar arquivo JavaScript (js/script.js)
    - Implementar função handleLogin() para capturar submit do formulário
    - Adicionar preventDefault() para evitar comportamento padrão
    - Implementar redirecionamento para index.html após 500ms
    - _Requisitos: 6.1, 6.2, 6.3_
  
  - [x] 3.2 Adicionar feedback visual durante login
    - Implementar spinner de carregamento no botão
    - Desabilitar botão durante processamento
    - Adicionar validação visual dos campos obrigatórios
    - _Requisitos: 6.4_

- [x] 4. Checkpoint - Validar página de login
  - Testar redirecionamento em Chrome, Firefox, Safari e Edge
  - Verificar responsividade usando DevTools (375px, 768px, 1366px)
  - Validar HTML5 em https://validator.w3.org/
  - Garantir que todos os testes passem, perguntar ao usuário se há dúvidas

- [x] 5. Implementar landing page (index.html)
  - [x] 5.1 Criar estrutura HTML com navegação Bootstrap
    - Implementar navbar responsiva com menu hambúrguer
    - Criar seções: Hero, Sobre, Formação, Habilidades, Experiência, Contato
    - Adicionar navegação suave entre seções com links âncora
    - _Requisitos: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_
  
  - [x] 5.2 Implementar seção Hero com informações pessoais
    - Adicionar nome "Walter Gonçalves Baraúna Filho"
    - Incluir objetivo profissional e botões de call-to-action
    - Configurar layout responsivo com imagem de perfil
    - _Requisitos: 2.1, 2.3_
  
  - [x] 5.3 Implementar seções de conteúdo do currículo
    - Criar seção Formação (Técnico em Informática, Sistemas de Informação)
    - Implementar seção Habilidades (Git/Github, Python, Django, SQL, PostgreSQL, AWS, APIs)
    - Adicionar seção Experiência (Suprelogic Tecnologia)
    - _Requisitos: 2.4, 2.5, 2.6_

- [x] 6. Implementar responsividade completa da landing page
  - [x] 6.1 Configurar breakpoints Bootstrap
    - Aplicar classes responsivas em todas as seções
    - Implementar layout vertical para mobile (<768px)
    - Configurar layout horizontal para desktop (≥992px)
    - _Requisitos: 2.7, 2.8, 3.1, 3.2, 3.3, 3.4_
  
  - [x] 6.2 Otimizar navegação para diferentes dispositivos
    - Configurar navbar colapsável para mobile
    - Implementar scroll suave com offset para navbar fixa
    - Adicionar indicador de seção ativa na navegação
    - _Requisitos: 3.5_

- [x] 7. Implementar links sociais e contato
  - [x] 7.1 Adicionar links para redes sociais
    - Implementar links para Instagram e LinkedIn
    - Adicionar link para email (Gmail)
    - Configurar abertura em nova aba com rel="noopener noreferrer"
    - _Requisitos: 4.1, 4.2, 4.3, 4.4_
  
  - [x] 7.2 Estilizar botões sociais com ícones
    - Integrar Font Awesome via CDN
    - Criar botões circulares com cores específicas das redes
    - Adicionar efeitos hover e transições CSS
    - _Requisitos: 4.5_

- [x] 8. Implementar estilos personalizados (css/styles.css)
  - [x] 8.1 Criar variáveis CSS e estilos globais
    - Definir paleta de cores e tipografia personalizada
    - Implementar estilos para cards, botões e componentes
    - Adicionar animações e transições suaves
    - _Requisitos: 1.5, 3.5_
  
  - [x] 8.2 Implementar estilos responsivos personalizados
    - Criar media queries para ajustes específicos
    - Otimizar espaçamento e tipografia por breakpoint
    - Adicionar estilos para impressão e acessibilidade
    - _Requisitos: 3.1, 3.2, 3.3, 3.4_

- [x] 9. Checkpoint - Validar landing page completa
  - Testar navegação entre todas as seções
  - Verificar links sociais abrem em nova aba
  - Validar responsividade em todos os breakpoints
  - Testar performance de carregamento (<3 segundos)
  - Garantir que todos os testes passem, perguntar ao usuário se há dúvidas

- [x] 10. Configurar CI/CD para GitHub Pages
  - [x] 10.1 Criar workflow de deploy automatizado
    - Criar arquivo .github/workflows/deploy.yml
    - Configurar validação automática de arquivos HTML, CSS e JS
    - Implementar deploy automático para GitHub Pages
    - _Requisitos: 5.6_
  
  - [x] 10.2 Configurar GitHub Pages
    - Ativar GitHub Pages nas configurações do repositório
    - Configurar source como "GitHub Actions"
    - Testar URL de produção (https://usuario.github.io/projeto-bootstrap/)
    - _Requisitos: 7.1, 7.2_

- [x] 11. Validação e testes finais
  - [x] 11.1 Executar validação automática online
    - Validar HTML5 em https://validator.w3.org/
    - Validar CSS3 em https://jigsaw.w3.org/css-validator/
    - Testar performance em https://pagespeed.web.dev/
    - _Requisitos: 7.4, 7.3_
  
  - [x] 11.2 Realizar testes manuais de compatibilidade
    - Testar em Chrome, Firefox, Safari e Edge
    - Verificar funcionamento em dispositivos móveis reais
    - Testar com JavaScript desabilitado (exceto redirecionamento)
    - _Requisitos: 7.2, 7.5_

- [ ] 12. Finalização e documentação
  - [x] 12.1 Otimizar recursos e performance
    - Adicionar favicon e meta tags de SEO
    - Otimizar imagens para web (< 500KB cada)
    - Verificar tamanho total do projeto (< 2MB)
    - _Requisitos: 7.3_
  
  - [x] 12.2 Preparar entrega acadêmica
    - Atualizar README.md com instruções de uso
    - Documentar estrutura do projeto e tecnologias utilizadas
    - Verificar funcionamento completo da URL de produção
    - _Requisitos: 5.6_

- [ ] 13. Checkpoint final - Entrega do projeto
  - Confirmar que todas as funcionalidades estão operacionais
  - Verificar que o site está acessível via GitHub Pages
  - Validar que todos os requisitos acadêmicos foram atendidos
  - Garantir que o projeto está pronto para apresentação

## Notas Importantes

- **Foco Acadêmico**: Este projeto demonstra competências em Bootstrap e desenvolvimento front-end responsivo
- **Validação Simplificada**: Utiliza ferramentas online e testes manuais, sem testes automatizados complexos
- **Deploy Automatizado**: GitHub Pages com CI/CD simples para demonstrar conhecimento em DevOps básico
- **Compatibilidade**: Testado em navegadores modernos com foco na experiência do usuário
- **Performance**: Otimizado para carregamento rápido usando CDN e boas práticas web

## Estrutura Final do Projeto

```
projeto-bootstrap/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD para GitHub Pages
├── login.html                  # Página de entrada
├── index.html                  # Landing page principal
├── css/
│   └── styles.css             # Estilos personalizados
├── js/
│   └── script.js              # Funcionalidades JavaScript
├── assets/
│   └── imagens/               # Recursos visuais
│       ├── profile.jpg        # Foto de perfil
│       └── favicon.ico        # Ícone do site
└── README.md                  # Documentação do projeto
```