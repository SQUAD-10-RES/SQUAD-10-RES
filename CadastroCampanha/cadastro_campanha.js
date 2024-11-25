function atualizarRegraInput() {
    const tipoRegra = document.getElementById("tipo-regra").value;
    const campoValorFixo = document.getElementById("campo-valor-fixo");
    const campoPercentual = document.getElementById("campo-percentual");

    if (tipoRegra === "valor-fixo") {
        campoValorFixo.style.display = "flex";
        campoPercentual.style.display = "none";
    } else if (tipoRegra === "percentual") {
        campoValorFixo.style.display = "none";
        campoPercentual.style.display = "flex";
    } else {
        campoValorFixo.style.display = "none";
        campoPercentual.style.display = "none";
    }
}

let portadores = [];

function abrirPopup() {
    document.getElementById("portador-popup").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("portador-popup").style.display = "none";
}

function associarPortador() {
    const nomePortador = document.getElementById("nome-portador").value;
    const numeroCartao = document.getElementById("numero-cartao").value;

    if (nomePortador && numeroCartao) {
        portadores.push({
            nome: nomePortador,
            cartao: numeroCartao
        });

        document.getElementById("nome-portador").value = '';
        document.getElementById("numero-cartao").value = '';


        fecharPopup();
    } else {
        alert("Por favor, preencha todos os campos do portador.");
    }
}

function salvarCampanha() {
    const nomeCampanha = document.getElementById("nome-campanha").value;
    const descricaoCampanha = document.getElementById("descricao-campanha").value;
    const dataInicio = document.getElementById("data-inicio").value;
    const dataFim = document.getElementById("data-fim").value;
    const status = document.getElementById("status").value;
    const tipoRegra = document.getElementById("tipo-regra").value;
    const valorFixo = document.getElementById("valor-fixo").value;
    const percentual = document.getElementById("percentual").value;
    const imagemCampanha = document.getElementById("imagem-campanha").files[0];

    if (!nomeCampanha || !descricaoCampanha || !dataInicio || !dataFim || !status || !tipoRegra || (tipoRegra === "valor-fixo" && !valorFixo) || (tipoRegra === "percentual" && !percentual) || !imagemCampanha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const imagemURL = e.target.result;

        const novaCampanha = {
            nome: nomeCampanha,
            descricao: descricaoCampanha,
            inicio: dataInicio,
            fim: dataFim,
            status: status,
            regra: tipoRegra,
            valorFixo: tipoRegra === "valor-fixo" ? valorFixo : null,
            percentual: tipoRegra === "percentual" ? percentual : null,
            imagem: imagemURL,
            portadores: portadores
        };

        const campanhas = JSON.parse(localStorage.getItem("campanhas")) || [];
        campanhas.push(novaCampanha);
        localStorage.setItem("campanhas", JSON.stringify(campanhas));

        window.location.href = "../Tela.html";
    };

    reader.readAsDataURL(imagemCampanha);
}

window.onload = atualizarRegraInput;
