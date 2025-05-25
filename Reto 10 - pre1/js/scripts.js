// Se están creando unas variables para almacenar los elementos del DOM
document.addEventListener("DOMContentLoaded", function(){
    const inputBox = document.getElementById('inputBox');
    const mostrarBtn = document.getElementById('mostrarBtn');
    const outputBox = document.getElementById('outputBox');

    // Se está añadiendo un evento al botón para que cuando se haga clic, se ejecute una función
    mostrarBtn.addEventListener('click', function() {
        // Se está obteniendo el valor del input y se está mostrando en el output
        const mensaje = inputBox.value;
        // Se está utilizando el método textContent para mostrar el mensaje
        outputBox.textContent = mensaje;
    });

});
