function cadastrarAgendamento(){

    let nome = document.getElementById("nome").value;

    let profissional = document.getElementById("profissional").value;

    let sexo = document.querySelector('input[name = "sexo"]:checked').value;

    let data = document.getElementById("data").value;

    let horario = document.getElementById("horario").value;

    let servicos = document.querySelectorAll(".serv:checked");

    let listaServicos = [];

    servicos.forEach(function(servicos){

        listaServicos.push(servicos.value);

    });

    localStorage.setItem ("nomeCliente", nome);
    localStorage.setItem ("profissional", profissional);
    localStorage.setItem ("sexoCliente", sexo);
    localStorage.setItem ("listaServicos",listaServicos.join(","));
    localStorage.setItem ("data", data);
    localStorage.setItem ("horario", horario);

    window.location.href = "comprovante.html";

};