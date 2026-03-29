# Documento de Requisitos - Atividade Prática Bootstrap

## Introdução

Este projeto consiste no desenvolvimento de uma aplicação web responsiva utilizando Bootstrap 5 para a disciplina de Tecnologia Web. O sistema inclui uma tela de login simples e uma landing page que funciona como currículo online, demonstrando competências em criação de interfaces web responsivas.

## Glossário

- **Sistema_Login**: Componente responsável pela autenticação e redirecionamento do usuário
- **Landing_Page**: Página principal que apresenta o currículo online de forma responsiva
- **Bootstrap**: Framework CSS utilizado para criação de interfaces responsivas
- **Currículo_Online**: Apresentação digital das informações profissionais e acadêmicas do usuário

## Requisitos

### Requisito 1: Tela de Login

**User Story:** Como usuário, eu quero acessar uma tela de login simples, para que eu possa ser redirecionado à página principal do currículo.

#### Critérios de Aceitação

1. O Sistema_Login DEVE apresentar campos para usuário e senha
2. O Sistema_Login DEVE incluir um botão de login estilizado com Bootstrap
3. QUANDO o usuário clicar no botão de login, O Sistema_Login DEVE redirecionar para index.html
4. O Sistema_Login DEVE ser responsivo em dispositivos móveis e desktop
5. O Sistema_Login DEVE utilizar componentes Bootstrap para estilização

### Requisito 2: Landing Page Responsiva

**User Story:** Como visitante, eu quero visualizar um currículo online responsivo, para que eu possa conhecer as informações profissionais em qualquer dispositivo.

#### Critérios de Aceitação

1. A Landing_Page DEVE apresentar as informações pessoais de Walter Gonçalves Baraúna Filho
2. A Landing_Page DEVE incluir seção com dados de contato (telefone e email)
3. A Landing_Page DEVE apresentar objetivo profissional claramente
4. A Landing_Page DEVE listar formação acadêmica (Técnico em Informática e Sistemas de Informação)
5. A Landing_Page DEVE exibir habilidades técnicas (Git/Github, Python, Django, SQL, PostgreSQL, AWS, APIs)
6. A Landing_Page DEVE apresentar experiência profissional na Suprelogic Tecnologia
7. QUANDO acessada em dispositivos móveis, A Landing_Page DEVE manter legibilidade e usabilidade
8. QUANDO acessada em desktop, A Landing_Page DEVE utilizar o espaço disponível eficientemente

### Requisito 3: Responsividade Bootstrap

**User Story:** Como usuário, eu quero que as páginas se adaptem a diferentes tamanhos de tela, para que eu possa acessar o conteúdo em qualquer dispositivo.

#### Critérios de Aceitação

1. O Sistema DEVE utilizar o sistema de grid do Bootstrap 5
2. O Sistema DEVE implementar breakpoints responsivos (xs, sm, md, lg, xl)
3. QUANDO visualizado em tela pequena (mobile), O Sistema DEVE empilhar elementos verticalmente
4. QUANDO visualizado em tela grande (desktop), O Sistema DEVE organizar elementos em layout horizontal
5. O Sistema DEVE utilizar classes utilitárias do Bootstrap para espaçamento e tipografia

### Requisito 4: Navegação e Links Sociais

**User Story:** Como visitante, eu quero acessar links para redes sociais e contato, para que eu possa me conectar profissionalmente.

#### Critérios de Aceitação

1. A Landing_Page DEVE incluir links para Instagram e LinkedIn
2. A Landing_Page DEVE incluir link para email (Gmail)
3. A Landing_Page DEVE incluir referência a plataformas de emprego
4. QUANDO o usuário clicar nos links sociais, O Sistema DEVE abrir em nova aba
5. Os links DEVE ser estilizados com ícones Bootstrap ou Font Awesome

### Requisito 5: Estrutura de Arquivos

**User Story:** Como desenvolvedor, eu quero uma estrutura de arquivos organizada, para que o projeto seja fácil de manter e entender.

#### Critérios de Aceitação

1. O Sistema DEVE incluir arquivo login.html na raiz do projeto
2. O Sistema DEVE incluir arquivo index.html na raiz do projeto
3. O Sistema DEVE organizar estilos personalizados em css/styles.css
4. O Sistema DEVE organizar scripts JavaScript em js/script.js
5. O Sistema DEVE incluir diretório assets/imagens/ para recursos visuais
6. QUANDO executado, O Sistema DEVE funcionar sem dependências externas além do Bootstrap CDN

### Requisito 6: Funcionalidade de Redirecionamento

**User Story:** Como usuário, eu quero que o login me redirecione automaticamente, para que eu acesse rapidamente o currículo.

#### Critérios de Aceitação

1. QUANDO o formulário de login for submetido, O Sistema DEVE executar função JavaScript
2. O Sistema DEVE redirecionar para index.html independente das credenciais inseridas
3. O Sistema DEVE prevenir o comportamento padrão de submit do formulário
4. O Sistema DEVE fornecer feedback visual durante o redirecionamento

### Requisito 7: Compatibilidade e Performance

**User Story:** Como usuário, eu quero que o sistema carregue rapidamente e funcione em diferentes navegadores, para que eu tenha uma boa experiência de uso.

#### Critérios de Aceitação

1. O Sistema DEVE utilizar Bootstrap 5 via CDN para otimização de carregamento
2. O Sistema DEVE ser compatível com navegadores modernos (Chrome, Firefox, Safari, Edge)
3. O Sistema DEVE carregar em menos de 3 segundos em conexão padrão
4. O Sistema DEVE validar HTML5 sem erros críticos
5. QUANDO acessado, O Sistema DEVE funcionar sem JavaScript habilitado (exceto redirecionamento)