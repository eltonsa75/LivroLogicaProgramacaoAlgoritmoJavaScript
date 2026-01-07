function calcularPeso() {

    // cria referencia aos elementos manipulados pela function

    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResposta = document.getElementById("outResposta");


    // obtem o conteudo dos campos de edicao da pagina
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    // Verifica se nome foi preenchido e sexo selecionado
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, Informe o nome e selecione o sexo");
        inNome.focus();     //posiciona (joga o foco) no campo de edicao inNome
        return;
    }

    // se altura vazio (0) ou Nan: Not-a-Number (um texto for informado, por exemplo)
    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente...");
        inAltura.focus();
        return;
    }

    // se masculino (significa se masculino == true)
    if(masculino) {
        var peso = 22 * Math.pow(altura, 2);    // Math.pow eleva ao quadrado
    } else {
        var peso = 21 * Math.pow(altura, 2)
    }

    // apresenta a resposta (altera o conteudo da linha outResposta)
    outResposta.textContent = nome + ": Seu peso ideal e " + peso.toFixed(3) + " kg";

}

// seleciona os botões
const btLimpar = document.getElementById("btLimpar");

// evento de clique
btLimpar.addEventListener("click", limparCampos);

function limparCampos() {
    // limpa os campos de texto
    document.getElementById("inNome").value = "";
    document.getElementById("inAltura").value = "";

    // desmarca os radios
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;

    // limpa a resposta
    document.getElementById("outResposta").textContent = "";

    // volta o foco para o nome
    document.getElementById("inNome").focus();
}


// cria referencia ao elemento btnCalcular e registrar evento associado a calcularPeso
var btResultado = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPeso);



