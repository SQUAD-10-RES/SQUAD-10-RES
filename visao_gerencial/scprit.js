// Captura os botões
const registerCampaignBtn = document.getElementById('registerCampaignBtn');
const editCampaignBtn = document.getElementById('editCampaignBtn');

// Adiciona evento de clique para redirecionar o usuário
registerCampaignBtn.addEventListener('click', function() {
    window.location.href = 'campanhas/cadastrar_campanha.html'; // Substitua pelo caminho real
});

editCampaignBtn.addEventListener('click', function() {
    window.location.href = 'campanhas/editar_campanha.html'; // Substitua pelo caminho real
});
console.log("Arquivo app.js carregado com sucesso");
