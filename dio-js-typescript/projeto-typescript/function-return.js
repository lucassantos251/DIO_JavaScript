"use strict";
//tipando o retorno
//usando callback, que passa uma função que pode ser utilizada para tratamentos
function somarValoresNumericosETratar(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
//retornando void
function printaValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo));
