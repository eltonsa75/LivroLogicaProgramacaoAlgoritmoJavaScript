function calcularRaiz() {
    // Cria uma referencia aos elementos da página
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value); // obtém conteúdo do campo inNumero

    // se não preencheu ou Not-a-Number (Nan)
    if(numero == 0 || isNaN(numero)) {
        alert("Informe um número válido..."); // exibe alerta
        inNumero.focus();                     // posiciona no campo inNumero
        return;                               // retorna
    }

    var raiz = Math.sqrt(numero);  // calcula raiz quadrada do número

    // ase o valor da variavel raiz for igual a este valor arredondado para baixo...
    if (raiz == Math.floor(raiz)) {
        outResposta.textContent = "Raiz: " + raiz;      // mostra a raiz 
    } else {
        // senão, exibe mensagem indicando que não há raiz exata
        outResposta.textContent = "Não há raiz exata para " + numero;
    }
}

// cria referencia ao elemento btExibir e registrar evento que irá carregar fucntion
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);