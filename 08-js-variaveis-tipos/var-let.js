//como se fosse

//var numberOne
numberOne = 1;


console.log(numberOne + 2);

var numberOne;
//javascript leva as vars para o incio do documento
//let precisa ser declarado antes

//var são valores globais
//let são valores de escopo, são lidos apenas dentro do bloco de código
var firstName = 'João';
var lastName = 'Souza';
//let lastName = 'Souza';

if(firstName === 'João')
{
    //let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    let lastName = 'Pedroso';
    //reatribuição
    //lastName = 'Silva';

    console.log(firstName,lastName);
}

console.log(firstName,lastName);