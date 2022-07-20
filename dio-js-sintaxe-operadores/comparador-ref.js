function comparaNumeros(num1, num2)
{
    if(!num1 || !num2) return "Defina dois números!";
    
    const PRIMEIRA_FRASE = criaPrimeiraFrase(num1, num2);
    const SEGUNDA_FRASE = criaSegundaFrase(num1, num2);

    return `${PRIMEIRA_FRASE} ${SEGUNDA_FRASE}`
}

function criaPrimeiraFrase(num1,num2)
{
    let saoIguais = '';

    (num1 !== num2) ? saoIguais = 'não' : saoIguais = '';

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1,num2)
{
    const SOMA = num1 + num2;
    const COMPARA_10 = SOMA > 10;
    const COMPARA_20 = SOMA > 20;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    (COMPARA_10) ? resultado10 = 'maior' : resultado10 = 'menor';

    (COMPARA_20) ? resultado20 = 'maior' : resultado20 = 'menor';

    return `Sua soma é ${SOMA}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(20,20));