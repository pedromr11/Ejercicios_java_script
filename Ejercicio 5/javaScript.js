function pedirFecha(){
    var dia = prompt("Que día es: ");
    var mes = prompt("Que mes es: ");
    var ano = prompt("Que año es: ");

    console.log("Hoy es " + dia + " de " + mes + " de " + ano);
}

function solicitarNumeros() {
    var primerNumero = Number(prompt("Introduce un número: "));
    var segundoNumero = Number(prompt("Introduce otro número: "));

    console.log("Multiplicación: " + (primerNumero*segundoNumero));
    if(segundoNumero!=0) {
        console.log("División: " + (primerNumero/segundoNumero));
    }

    console.log("Resta: " + (segundoNumero-primerNumero));
    console.log("Resta Cuadrados: " + ((segundoNumero*segundoNumero)-(primerNumero*primerNumero)));
    if(primerNumero > 0){
        console.log("El primer número es positivo: " + primerNumero);
    }
    
    if(segundoNumero > 0){
        console.log("El segundo número es positivo: " + segundoNumero);
    }
}