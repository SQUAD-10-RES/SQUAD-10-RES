// Captura os elementos da página
const startBtn = document.getElementById('startBtn');
const backBtn = document.getElementById('backBtn');
const loginForm = document.getElementById('loginForm');
const content = document.querySelector('.content');
const loginFormElement = document.getElementById('loginFormElement');

// Alternar para a tela de login quando o botão "Começar" for clicado
startBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Previne comportamento padrão do link
    content.style.display = 'none'; // Esconde o conteúdo principal
    loginForm.style.display = 'block'; // Exibe o formulário de login
});

// Alternar de volta para a tela inicial quando o botão "Voltar" for clicado
backBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Previne comportamento padrão do botão
    loginForm.style.display = 'none'; // Esconde o formulário de login
    content.style.display = 'block'; // Exibe o conteúdo principal
});

// Simulação de login e redirecionamento para a tela de menu
loginFormElement.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne envio do formulário para testar o login

    // Simulação de validação de login (pode implementar uma validação real)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        // Redirecionar para a página de menu de opções após login bem-sucedido
        window.location.href = 'menu.html'; // Redireciona para a página de menu
    } else {
        alert('Usuário ou senha incorretos!');
    }
});