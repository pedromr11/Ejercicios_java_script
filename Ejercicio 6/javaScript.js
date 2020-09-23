function meses(){
    var arrayMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    for(let i = 0; i < 12; i++){
        console.log(arrayMeses[i]);
    }
}


function factorial(){
    var numero = Number(prompt("Introduce un número: "));
    var factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }
    alert("El factorial de " + numero + " es " + factorial);
}


function seriesNetflix(){
    var edad = Number(prompt("Intriduce tu edad: "));
    if(edad < 7){
        alert("Patrulla Canina");
    } else if(7 <= edad <= 13){
        alert("Alexa y Katie");
    } else if(14 <= edad <= 18){
        alert("Anne with an E");
    } else if(19 <= edad <= 35){
        alert("Stranger Things");
    } else {
        alert("Sherlock");
    }
}


function intermedio(){
    var numero = 0;
    do {
        numero = prompt("Introduce un número que esté el 45 y el 72: ");
    } while(numero < 45 || numero > 72);
}