
function carregarCampanhas() {
    const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
    const container = document.getElementById("campaign-cards");
    container.innerHTML = "";

    campanhas.forEach((campanha, index) => {
        const card = document.createElement("div");
        card.classList.add("campaign-card");

        const img = document.createElement("img");
        img.src = campanha.imagem || "imagem-padrao.jpg";
        card.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = campanha.nome;
        card.appendChild(title);

        const period = document.createElement("p");
        period.innerHTML = `<strong>Período:</strong> ${campanha.inicio} a ${campanha.fim}`;
        card.appendChild(period);

        const rule = document.createElement("p");
        rule.innerHTML = `<strong>Tipo de Regra:</strong> ${campanha.regra} ${
            campanha.regra === "valor-fixo" ? `(R$ ${campanha.valorFixo})` : `(${campanha.percentual}%)`
        }`;
        card.appendChild(rule);

        const status = document.createElement("p");
        status.innerHTML = `<strong>Status:</strong> ${campanha.status}`;
        card.appendChild(status);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("card-buttons");

        const viewButton = document.createElement("button");
        viewButton.classList.add("card-button");
        viewButton.textContent = "Visualizar";
        viewButton.addEventListener("click", () => visualizarCampanha(index));
        buttonContainer.appendChild(viewButton);

        const editButton = document.createElement("button");
        editButton.classList.add("card-button");
        editButton.textContent = "Editar";
        editButton.addEventListener("click", () => editarCampanha(index));
        buttonContainer.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("card-button", "delete");
        deleteButton.textContent = "Excluir";
        deleteButton.addEventListener("click", () => excluirCampanha(index));
        buttonContainer.appendChild(deleteButton);

        card.appendChild(buttonContainer);
        container.appendChild(card);
    });
}

function visualizarCampanha(index) {
    const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
    const campanha = campanhas[index];

    if (campanha) {
        document.getElementById("popup-img").src = campanha.imagem || "imagem-padrao.jpg";
        document.getElementById("popup-nome").textContent = campanha.nome;
        document.getElementById("popup-descricao").textContent = campanha.descricao;
        document.getElementById("popup-periodo").textContent = `Período: ${campanha.inicio} a ${campanha.fim}`;
        document.getElementById("popup-regra").textContent = `Tipo de Regra: ${campanha.regra} ${
            campanha.regra === "valor-fixo" ? `(R$ ${campanha.valorFixo})` : `(${campanha.percentual}%)`
        }`;
        document.getElementById("popup-status").textContent = `Status: ${campanha.status}`;
        
        const portadoresContainer = document.getElementById("popup-portadores");
        portadoresContainer.innerHTML = "";  
        campanha.portadores.forEach(portador => {
            const p = document.createElement("p");
            p.textContent = `Portador: ${portador.nome} - Cartão: ${portador.cartao}`;
            portadoresContainer.appendChild(p);
        });

        document.getElementById("visualizar-popup").style.display = "flex";
    }
}


function fecharVisualizarPopup() {
    document.getElementById("visualizar-popup").style.display = "none";
}


function editarCampanha(index) {
    localStorage.setItem("campanhaEditIndex", index);
    window.location.href = "EditarCampanha/editar_campanha.html";
}

function excluirCampanha(index) {
    const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
    campanhas.splice(index, 1);
    localStorage.setItem("campanhas", JSON.stringify(campanhas));
    carregarCampanhas();
}

function toggleLogoutPopup() {
    const popup = document.getElementById("logout-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

// Fechar a popup ao clicar fora dela
window.onclick = function(event) {
    const popup = document.getElementById("logout-popup");
    if (event.target !== document.querySelector(".user-circle") && popup.style.display === "block") {
        popup.style.display = "none";
    }
}

window.onload = carregarCampanhas;
