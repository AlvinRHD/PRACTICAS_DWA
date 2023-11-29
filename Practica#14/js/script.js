//Funcion para sumar dos numeros
function sumar(){
    var num1 = parseFloat(document.getElementById('numero1').value)
    var num2 = parseFloat(document.getElementById('numero2').value)

    var resultado = num1 + num2;

    mostrarResultado(resultado);
}
function restar(){
    var num1 = parseFloat(document.getElementById('numero1').value)
    var num2 = parseFloat(document.getElementById('numero2').value)

    var resultado = num1 - num2;

    mostrarResultado(resultado);
}
function multiplicar(){
    var num1 = parseFloat(document.getElementById('numero1').value)
    var num2 = parseFloat(document.getElementById('numero2').value)

    var resultado = num1 * num2;

    mostrarResultado(resultado);
}
function dividir(){
    var num1 = parseFloat(document.getElementById('numero1').value)
    var num2 = parseFloat(document.getElementById('numero2').value)

    if (num2 === 0) {
        //Si el divisor es cero, mostrar un mensaje de error
        mostrarResultado('No es posible dividir por cero')
    } else {
        //Realizar la operacion de division
        var resultado = num1 / num2;

        //Llanar a la funcion mostrarResultado para mostrar el resultado en la pagina
        mostrarResultado(resultado)
    }
}

//Funcion para mostrar el resultado en la pagina
function mostrarResultado(resultado){
    //Actualizar el contenido del elemento con id con el resultado formateado
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado.toFixed(2);
}