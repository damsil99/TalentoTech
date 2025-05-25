document.addEventListener("DOMContentLoaded", function(){
    console.log('Iniciando...')
    // Obtener la referencia al input y al contenido del output
    const inputBox = document.getElementById('inputBox');
    console.log("inputBox CAPTURADO!!!")
    const outputBox = document.getElementById('outputBox')



    // Anadir evento 'input' para actualizar el contenido en tiempo real
    inputBox.addEventListener('input', function(){
        outputBox.textContent = inputBox.value
    });

});