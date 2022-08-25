//tipos primitivos

//boolean
var valor = false;
console.log(typeof(valor));
console.log(valor);

//number

var numeroQualquer = 1;
console.log(typeof(numeroQualquer));
console.log(numeroQualquer);

//string
var nome = "lucas";
console.log(typeof(nome));
console.log(nome);

//como declarar

var semAtributo;
console.log(typeof(semAtributo));
console.log(semAtributo);

let var2 = "qualquer";
console.log(var2);

const CONSTANTE = "constante";
//CONSTANTE = "aaa";
console.log(CONSTANTE);

//global
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal()
{
    let escopoLocalInterno = "local";
    console.log(escopoGlobalInterno);
}

//console.log(escopoGlobalInterno);

//atribuicao
var atribuicao = "lucas";
console.log(atribuicao);

//comparacao
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica
// = atribuicao, == valor, === tipo
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//operadores aritmeticos
//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2 * 2;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//resto da divisao
var restoDaDivisao = 5 % 2;
console.log(restoDaDivisao);

//potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao);

//operadores relacionais
//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//e, precisa que todos os valores sejam iguais
var e = true && false;
console.log(e);

//ou, apenas um valor
var ou = true || false;
console.log(ou);

//nao, inverte o valor
var nao = !true;
console.log(nao);