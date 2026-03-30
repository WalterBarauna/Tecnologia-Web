// ===== CONFIGURAÇÕES GLOBAIS =====
const CONFIG = {
    animacoes: true,
    tempoRedirecionamento: 500
};

// ===== FUNÇÕES DE LOGIN =====
function handleLogin(event) {
    event.preventDefault();
    
    // Validar campos
    const validacao = validarCampos();
    if (!validacao.valido) {
        mostrarErros(validacao.erros);
        return;
    }
    
    // Feedback visual
    const button = event.target.querySelector('button[type="submit"]');
    const textoOriginal = button.innerHTML;
    button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status"></span> Entrando...';
    button.disabled = true;
    
    // Simula processamento
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Login realizado!',
            text: 'Redirecionando para o portfólio...',
            timer: 1500,
            showConfirmButton: false,
            confirmButtonColor: '#2d2d7f',
            customClass: {
                popup: 'swal-popup-custom',
                title: 'swal-title-custom',
                htmlContainer: 'swal-text-custom'
            }
        }).then(() => {
            window.location.href = 'portfolio.html';
        });
    }, CONFIG.tempoRedirecionamento);
}

function validarCampos() {
    const email = document.getElementById('email')?.value.trim();
    const senha = document.getElementById('senha')?.value.trim();
    
    const erros = [];
    
    if (!email) {
        erros.push('Campo e-mail é obrigatório');
    } else if (!validarEmail(email)) {
        erros.push('Por favor, insira um e-mail válido');
    }
    
    if (!senha) {
        erros.push('Campo senha é obrigatório');
    }
    
    return {
        valido: erros.length === 0,
        erros: erros
    };
}

function validarEmail(email) {
    // Regex para validação de e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function mostrarErros(erros) {
    Swal.fire({
        icon: 'error',
        title: 'Erro de validação',
        html: erros.join('<br>'),
        confirmButtonText: 'OK',
        confirmButtonColor: '#2d2d7f',
        background: '#ffffff',
        customClass: {
            popup: 'swal-popup-custom',
            title: 'swal-title-custom',
            htmlContainer: 'swal-text-custom'
        }
    });
}

// ===== FUNÇÕES DA LANDING PAGE =====
function inicializarAnimacoes() {
    // Scroll suave para links âncora com offset para navbar fixa
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calcular offset dinâmico baseado na altura da navbar
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                const offsetTop = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Fechar navbar colapsável em mobile após clicar no link
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            }
        });
    });
}

function configurarLinksExternos() {
    // Configurar links sociais para abrir em nova aba
    document.querySelectorAll('.link-externo').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(link.href, '_blank', 'noopener,noreferrer');
        });
    });
}

function atualizarNavbarAtiva() {
    // Adicionar indicador de seção ativa na navegação
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const atualizarAtivo = () => {
        let current = '';
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 70;
        const scrollPosition = window.pageYOffset + navbarHeight + 100;
        
        // Determinar qual seção está visível
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Se estiver no topo da página, ativar o primeiro link (home)
        if (window.pageYOffset < 100) {
            current = 'home';
        }
        
        // Atualizar classes active nos links
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    
    // Executar ao carregar e ao fazer scroll
    atualizarAtivo();
    window.addEventListener('scroll', atualizarAtivo);
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos na página de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Verificar se estamos na landing page
    if (document.querySelector('.hero-section')) {
        inicializarAnimacoes();
        configurarLinksExternos();
        atualizarNavbarAtiva();
    }
    
    // Verificar se Bootstrap carregou corretamente
    if (typeof bootstrap === 'undefined') {
        console.warn('Bootstrap CDN pode não ter carregado corretamente');
    }
});