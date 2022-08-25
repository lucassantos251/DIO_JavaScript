"use strict";
let anyOMG;
anyOMG = 3;
anyOMG = 'teste';
anyOMG = 5;
let stringTeste = 'verificar';
stringTeste = anyOMG;
let unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai não';
let stringTeste2 = 'meuDeus';
// erro stringTeste2 = unknownValor;
//unknown precisa ser tratado
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
