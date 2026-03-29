# 💻 Projeto - Atividade Bootstrap (Tecnologia Web)

## 📌 Descrição

Este projeto foi desenvolvido como parte da disciplina de **Tecnologia Web**, com o objetivo de praticar a utilização do framework **Bootstrap** na criação de interfaces web responsivas.

A atividade consiste na criação de:

* Uma tela de login
* Uma página principal (landing page) com informações pessoais/profissionais

Não há necessidade de integração com banco de dados — o login apenas redireciona o usuário para a página principal.

---

## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (para redirecionamento)
* GitHub Actions (CI/CD)
* GitHub Pages (Deploy automático)
* Viber Coder IDE (Kiro)

---

## 📂 Estrutura do Projeto

```
📁 projeto-bootstrap
│
├── .github/
│   └── workflows/
│       └── deploy.yml    # Workflow de CI/CD
├── login.html            # Tela de login
├── index.html            # Landing page (currículo)
├── css/
│   └── styles.css        # Estilos personalizados
├── js/
│   └── script.js         # Lógica de redirecionamento
├── assets/
│   └── imagens/          # Imagens usadas no projeto
└── docs/
    └── INSTRUCOES_GITHUB_PAGES.md  # Guia de configuração do GitHub Pages
```

---

## 🔐 Funcionalidade de Login

A tela de login permite ao usuário inserir:

* Nome de usuário
* Senha

Após clicar no botão **"Entrar"**, o sistema:
➡️ Redireciona para a página `index.html`

⚠️ Observação:
Não há validação com banco de dados, conforme solicitado na atividade.

---

## 🌐 Landing Page

A página principal (`index.html`) funciona como uma **landing page**, contendo:

* Apresentação pessoal
* Informações de contato
* Formação acadêmica
* Habilidades técnicas
* Experiência profissional
* Links para redes sociais

---

## 🚀 Deploy Automático com GitHub Pages

Este projeto utiliza **GitHub Actions** para deploy automático no **GitHub Pages**.

### Como funciona:

1. **Push para a branch main**: Sempre que você faz push de alterações para a branch `main`, o workflow é acionado automaticamente
2. **Validação**: O workflow valida a existência dos arquivos essenciais (HTML, CSS, JS)
3. **Deploy**: Se a validação passar, o site é automaticamente publicado no GitHub Pages

### Acessar o site publicado:

Após o deploy, o site estará disponível em:
```
https://seu-usuario.github.io/projeto-bootstrap/login.html
```

### Configurar GitHub Pages:

Para instruções detalhadas sobre como configurar o GitHub Pages no seu repositório, consulte:
📄 [docs/INSTRUCOES_GITHUB_PAGES.md](docs/INSTRUCOES_GITHUB_PAGES.md)

---

## ▶️ Como Executar o Projeto Localmente

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/projeto-bootstrap.git
```

2. Abra o projeto no **Viber Coder IDE (Kiro)** ou em qualquer editor de código

3. Abra o arquivo `login.html` no navegador:
   - Clique com o botão direito no arquivo
   - Selecione "Open with Live Server" (se disponível)
   - Ou simplesmente abra o arquivo diretamente no navegador

4. Insira qualquer usuário/senha e clique em **Entrar**

---

## 🔄 Workflow de CI/CD

O projeto inclui um workflow do GitHub Actions (`.github/workflows/deploy.yml`) que:

✅ Valida a existência dos arquivos HTML, CSS e JavaScript
✅ Configura o GitHub Pages automaticamente
✅ Faz o deploy do site para produção
✅ Executa a cada push na branch `main`

### Status do Deploy:

Você pode verificar o status do deploy na aba **Actions** do repositório no GitHub.

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
* Deploy automatizado com CI/CD
* Publicação de sites estáticos

---

## 🛠️ Recursos Adicionais

* **Bootstrap 5**: Framework CSS utilizado via CDN
* **Font Awesome**: Ícones para redes sociais
* **Scroll Suave**: Navegação suave entre seções da landing page
* **Validação de Formulário**: Feedback visual para campos obrigatórios
* **Responsividade**: Layout adaptável para mobile, tablet e desktop

---

## 📚 Referência

Atividade baseada no material disponibilizado pelo professor na disciplina de Tecnologia Web.

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
