var botao_tema_claro = document.getElementById("botao_tema_claro");
    var botao_tema_escuro = document.getElementById("botao_tema_escuro");

    function AdicionarTarefa() {

        var tarefaInput = document.getElementById("tarefa");
        var tarefa = tarefaInput.value;

        tarefaInput.value = "";
        var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];

        var novaLinha = tabela.insertRow();

        var celulaTarefa = novaLinha.insertCell(0);
        var celulaStatus = novaLinha.insertCell(1);
        var celulaExcluir = novaLinha.insertCell(2);

        celulaTarefa.innerHTML = tarefa;
        celulaStatus.innerHTML = "<button class='botoes' onclick='RiscarTarefa(this)'>✓</button>"
        celulaExcluir.innerHTML = "<button class='botoes' onclick='ExcluirTarefa(this.parentNode.parentNode)'>✖</button>";
    
        if (document.body.style.backgroundColor === "black") {
            tema_escuro();
        }

    }

    function ExcluirTarefa(row) {
        row.parentNode.removeChild(row);
    }

    function RiscarTarefa(botao) {
        var celulaTarefa = botao.parentNode.previousElementSibling;
        celulaTarefa.style.textDecoration = "line-through"
    }

    function tema_claro() {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementById("tarefa").style.backgroundColor = "black";
        document.getElementById("tarefa").style.color = "white";
        document.getElementById("adicionar").style.backgroundColor = "black";
        document.getElementById("adicionar").style.color = "white";

        var botoes = document.getElementsByClassName("botoes");
        for (var i = 0; i < botoes.length; i++) {
            botoes[i].style.backgroundColor = "black";
            botoes[i].style.color = "white";
        }
    }

    function tema_escuro() {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementById("tarefa").style.backgroundColor = "white";
        document.getElementById("tarefa").style.color = "black";
        document.getElementById("adicionar").style.backgroundColor = "white";
        document.getElementById("adicionar").style.color = "black";

        var botoes = document.getElementsByClassName("botoes");
        for (var i = 0; i < botoes.length; i++) {
            botoes[i].style.backgroundColor = "white";
            botoes[i].style.color = "black";
        }
    }