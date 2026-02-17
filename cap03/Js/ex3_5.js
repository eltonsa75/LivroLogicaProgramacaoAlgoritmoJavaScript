function calcularRaiz() {

    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    // Validação
    if (inNumero.value === "" || isNaN(numero) || numero < 0) {
        alert("Informe um número válido (maior ou igual a 0)...");
        inNumero.focus();
        return;
    }

    var raiz = Math.sqrt(numero);

    // Exibe com 4 casas decimais
    outResposta.textContent = "Raiz quadrada de " + numero + " é: " + raiz.toFixed(4);
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularRaiz);
