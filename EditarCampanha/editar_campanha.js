function carregarDadosCampanha() {
    const campanhaIndex = localStorage.getItem("campanhaEditIndex");
    if (campanhaIndex !== null) {
        const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
        const campanha = campanhas[campanhaIndex];

        if (campanha) {
            document.getElementById("nome-campanha").value = campanha.nome || "";
            document.getElementById("descricao-campanha").value = campanha.descricao || "";
            document.getElementById("data-inicio").value = campanha.inicio || "";
            document.getElementById("data-fim").value = campanha.fim || "";
            document.getElementById("tipo-regra").value = campanha.regra || "valor-fixo";
            document.getElementById("status").value = campanha.status || "ativa";
            document.getElementById("valor-fixo").value = campanha.valorFixo || "";
            document.getElementById("percentual").value = campanha.percentual || "";
            carregarPortadores(campanha.portadores || []);
        }
    }
}


function carregarPortadores(portadores = []) {
    const lista = document.getElementById("portadores-list");
    lista.innerHTML = "";

    portadores.forEach((portador, index) => {
        const item = document.createElement("div");
        item.classList.add("portador-item");
        item.innerHTML = `
            <span>${portador.nome} - ID: ${portador.cartao}</span>
            <button onclick="excluirPortador(${index})">Excluir</button>
        `;
        lista.appendChild(item);
    });
}


function excluirPortador(index) {
    const campanhaIndex = localStorage.getItem("campanhaEditIndex");
    const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
    const campanha = campanhas[campanhaIndex];

    if (campanha.portadores) {
        campanha.portadores.splice(index, 1);
        localStorage.setItem("campanhas", JSON.stringify(campanhas));
        carregarPortadores(campanha.portadores);
    }
}

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function mostrarFormularioAdicionarPortador() {
    document.getElementById("add-portador-form").style.display = "block";
    document.getElementById("show-add-form").style.display = "none";
}
function adicionarPortador() {
    const nome = document.getElementById("nome-portador").value;
    const cartao = document.getElementById("numero-cartao").value;

    if (nome && cartao) {
        const campanhaIndex = localStorage.getItem("campanhaEditIndex");
        const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
        const campanha = campanhas[campanhaIndex];

        if (!campanha.portadores) {
            campanha.portadores = [];
        }

        campanha.portadores.push({ nome, cartao });
        localStorage.setItem("campanhas", JSON.stringify(campanhas));

        carregarPortadores(campanha.portadores);
        document.getElementById("add-portador-form").reset(); 
        document.getElementById("add-portador-form").style.display = "none"; 
        document.getElementById("show-add-form").style.display = "block"; 
    }
}


function salvarEdicao() {
    const campanhaIndex = localStorage.getItem("campanhaEditIndex");
    const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
    const campanha = campanhas[campanhaIndex];

    campanha.nome = document.getElementById("nome-campanha").value;
    campanha.descricao = document.getElementById("descricao-campanha").value;
    campanha.inicio = document.getElementById("data-inicio").value;
    campanha.fim = document.getElementById("data-fim").value;
    campanha.regra = document.getElementById("tipo-regra").value;
    campanha.status = document.getElementById("status").value;
    campanha.valorFixo = document.getElementById("valor-fixo").value || null;
    campanha.percentual = document.getElementById("percentual").value || null;

    localStorage.setItem("campanhas", JSON.stringify(campanhas));
    window.location.href = "../Tela.html";
}

window.onload = carregarDadosCampanha;
