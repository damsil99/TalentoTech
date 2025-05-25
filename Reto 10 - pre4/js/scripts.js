document.addEventListener("DOMContentLoaded", function(){
    // Referencias del input y el contenedor del output
    const numero_1 = document.getElementById('numero_1');
    const numero_2 = document.getElementById('numero_2');
    const outputBox = document.getElementById('outputBox');

        // Función para realizar el cálculo
        window.calcular = function(operacion){
            // Convertir losvalores de los input a numeros
            const num1 = parseFloat(numero_1.value);
            const num2 = parseFloat(numero_2.value)

            // Verificar que ambos numeros son validos
            if(isNaN(num1) || isNaN(num2)){
                outputBox.textContent = "Resultado: Ingrese números válidos";
                return;
            }

            let result;

            // Realizar operación correspondiente
            switch(operacion){
                case 'sumar':
                    result = num1 + num2;
                    break;
                case 'restar':
                    result = num1 - num2;
                    break;
                case 'multiplicar':
                    result = num1 * num2;
                    break;
                case 'dividir':
                    if(num2===0){
                        outputBox.textContent = "Resultado: No se puede dividir en cero"
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    result = "Operación no válida"
            }

            result = parseFloat(result.toFixed(2));
            outputBox.textContent = "Resultado: " + result;
            
        }


});