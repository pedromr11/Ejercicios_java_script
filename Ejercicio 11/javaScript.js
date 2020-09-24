function principal(){
    try {
        suma();
    } catch (error) {
        console.error(error);//Muestra un mensaje de error
    }
}

function suma(){
    var resultado = Number(prompt("Introduce un número."));
    var numero = 0;

    while(true){
        numero = Number(prompt("Introduce otro número."));
        if(isNaN(numero)) {
            console.log(resultado);
            throw new Error("El último valor introducido no es numérico.");
        }
        if(numero == 3){
            continue;
        }
        resultado = resultado + numero;
    }
}