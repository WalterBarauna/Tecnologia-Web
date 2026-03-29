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
    
    // Simula processamento e redireciona
    setTimeout(() => {
        window.location.href = 'index.html';
    }, CONFIG.tempoRedirecionamento);
}

function validarCampos() {
    const usuario = document.getElementById('usuario')?.value.trim();
    const senha = document.getElementById('senha')?.value.trim();
    
    const erros = [];
    
    if (!usuario) {
        erros.push('Campo usuário é obrigatório');
    }
    
    if (!senha) {
        erros.push('Campo senha é obrigatório');
    }
    
    return {
        valido: erros.length === 0,
        erros: erros
    };
}

function mostrarErros(erros) {
    const errorDiv = document.getElementById('login-error');
    if (errorDiv) {
        errorDiv.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                ${erros.join('<br>')}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        errorDiv.style.display = 'block';
    }
}

// ===== FUNÇÕES DA LANDING PAGE =====
function inicializarAnimacoes() {
    // Scroll suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Offset para navbar fixa
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
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
    }
    
    // Verificar se Bootstrap carregou corretamente
    if (typeof bootstrap === 'undefined') {
        console.warn('Bootstrap CDN pode não ter carregado corretamente');
    }
});