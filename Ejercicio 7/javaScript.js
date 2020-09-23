function pasarNumero(num){
    var soyDeLaFuncion = "soyDeLaFuncion";
    
    if(num == 1){
        let soyDelIf = "declarada dentro del bloque if";
        soyDeLaFuncion = "soyDeLaFuncion modificada dentro del if";
    } else {
        const soyConstante = "soyConstante declarada en el else";
    }
    soyConstante = "soyConstante ";
    console.log("soyDeLaFuncion: " + soyDeLaFuncion);
    console.log("soyConstante: " + soyConstante);
    console.log("soyDelIf: " + soyDelIf);
}