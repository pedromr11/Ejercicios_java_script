function principal(){
    try {
        suma();
    } catch (error) {
        console.error(error); //Muestra un mensaje con el error
    }
}

function suma(){
    var resultado = Number(prompt("Introduce un número."));
    var numero = 0;

    do{
        numero = Number(prompt("Introduce otro número."));
        if(isNaN(numero)) {
            throw new Error("El último valor introducido no es numérico.");
        }
        resultado = resultado + numero;
        console.log(resultado);
    } while(true);
}