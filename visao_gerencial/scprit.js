document.addEventListener('DOMContentLoaded', function() {
    // Captura o avatar e o menu dropdown
    const logoutAvatar = document.getElementById('logoutAvatar');
    const dropdownMenu = document.getElementById('dropdownMenu');

    // Verifique se os elementos foram encontrados
    if (!logoutAvatar || !dropdownMenu) {
        console.error("Elementos 'logoutAvatar' ou 'dropdownMenu' não foram encontrados.");
        return; // Interrompe o código se os elementos não existem
    }

    // Função para alternar a visibilidade do menu
    function toggleDropdown() {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    }

    // Exibe/oculta o menu ao clicar no avatar
    logoutAvatar.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que o clique fora do menu o feche imediatamente
        toggleDropdown();
    });

    // Fecha o menu dropdown ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!logoutAvatar.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

