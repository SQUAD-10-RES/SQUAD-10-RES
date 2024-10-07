document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeCampanha').value;
    const descricao = document.getElementById('descricaoCampanha').value;
    const dataInicio = document.getElementById('dataInicio').value;
    const dataFinal = document.getElementById('dataFinal').value;
    const status = document.getElementById('statusCampanha').value;

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `<h2>Resultados da Consulta</h2>
                               <p>Nome: ${nome}</p>
                               <p>Descrição: ${descricao}</p>
                               <p>Data de Início: ${dataInicio}</p>
                               <p>Data Final: ${dataFinal}</p>
                               <p>Status: ${status}</p>`;
});

function verDetalhes() {
    alert("Detalhes da campanha.");
}

function editarCampanha() {
    alert("Funcionalidade para editar campanha.");
}

function cadastrarNovaCampanha() {
    alert("Funcionalidade para cadastrar nova campanha.");
}
