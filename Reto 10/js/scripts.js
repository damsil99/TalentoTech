document.addEventListener('DOMContentLoaded', function() {
    const calcularBtn = document.getElementById("calcular-btn");
    const consumoInput = document.getElementById("consumo");
    const tipoEnergiaSelect = document.getElementById("tipo-energia");
    const resultadosSection = document.getElementById("resultados");
    const ahorroKwhSpan = document.getElementById("ahorro-kwh");
    const ahorroCo2Span = document.getElementById("ahorro-co2");
    const ahorroUsdSpan = document.getElementById("ahorro-usd");


    calcularBtn.addEventListener("click", function(){
        const consumo = parseFloat(consumoInput.value);
        const tipoEnergia = tipoEnergiaSelect.value;

        if(isNaN(consumo) || consumo <= 0) {
            alert("Por favor, ingresa un valor válido para el consumo de energía.");
            return;
        }

        let factorAhorro;
        switch(tipoEnergia){
            case "solar":
                factorAhorro = 0.2;
                break;
            case "eolica":
                factorAhorro = 0.25;
                break;
            case "hidrogeno":
                factorAhorro = 0.3;
                break;
            default:
                factorAhorro = 0;
        }

        const ahorroEnergetico = consumo * factorAhorro;
        const reduccionCo2 = ahorroEnergetico * 0.5;
        const ahorroEconomico = ahorroEnergetico * 0.15;


        ahorroKwhSpan.textContent = ahorroEnergetico.toFixed(2);
        ahorroCo2Span.textContent = reduccionCo2.toFixed(2);
        ahorroUsdSpan.textContent = ahorroEconomico.toFixed(2);
        ahorroEconomico.toFixed(2);

        resultadosSection.classList.remove("hidden");
    });
});