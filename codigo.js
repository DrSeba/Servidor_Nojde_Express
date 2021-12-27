//Programa para ver si tenes que realizarte un hisopado por posible COVID positivo.

// 2 o mas sintomas mandan al hisopado
// 1 solo sintoma te dice de esperar otro sintoma


alert("Indicá si tenés alguno de los siguientes síntomas");


let sintomaTos = prompt("Si tenés 'TOS' presioná 'Aceptar' de lo contrario presioná 'Cancelar'", "tos");
let sintomaFiebre = prompt("Si tenés 'FIEBRE MAYOR A 37,5°' presioná aceptar, de lo contrario presioná cancelar", "fiebre mayor a 37,5°" );
let sintomaDolorDeCabeza= prompt("Si tenés 'DOLOR DE CABEZA' presioná aceptar, de lo contrario presioná cancelar", "dolor de cabeza")

if (sintomaTos == "tos" && sintomaFiebre == "fiebre mayor a 37,5°" || sintomaFiebre == "fiebre mayor a 37,5°" && sintomaDolorDeCabeza == "dolor de cabeza"){
    console.log("Deberías hisoparte para confirmar posible covid positivo")
}
else if (sintomaTos == "tos" || sintomaFiebre == "fiebre mayor a 37,5°" || sintomaDolorDeCabeza == "dolor de cabeza"){
    console.log("Si aparecen nuevos sintomas deberías realizar el hisopado en 72 hs")
}
else{
    console.log("No ingresaste sintomas compatibles con covid, si estuviste en contacto estrecho con un covid positivo pero no tenes sintomas deberías hisoparte luego de 72 hs")
}


