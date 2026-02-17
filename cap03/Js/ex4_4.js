function calcularFuso() {

    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    var valor = inHoraBrasil.value;

    // Validação básica
    if (valor === "" || !valor.includes(":")) {
        alert("Informe a hora no formato HH:MM");
        inHoraBrasil.focus();
        return;
    }

    // Separar hora e minuto
    var partes = valor.split(":");
    var hora = Number(partes[0]);
    var minuto = Number(partes[1]);

    // Validação
    if (isNaN(hora) || isNaN(minuto) || hora < 0 || hora > 23 || minuto < 0 || minuto > 59) {
        alert("Informe um horário válido (HH:MM)");
        inHoraBrasil.focus();
        return;
    }

    // Soma 5 horas (França)
    hora += 5;

    if (hora >= 24) {
        hora -= 24;
    }

    // Formatar com dois dígitos
    var horaFormatada = String(hora).padStart(2, "0");
    var minutoFormatado = String(minuto).padStart(2, "0");

    outHoraFranca.textContent = "Hora na França: " + horaFormatada + ":" + minutoFormatado;
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularFuso);
