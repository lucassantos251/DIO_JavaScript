function soma(array, numero)
{
    if(!array || !numero)
    {
        throw new ReferenceError('Erro, parâmetro não definido', 'error.js', 5);
    }

    if(typeof(array) != Object)
    {
        throw new TypeError('Erro, tipo de parâmetro incorreto, não é objeto.', 10);
    }

    if(typeof(Number) != Number)
    {
        throw new TypeError('Erro, tipo de parâmetro incorreto, não é número.', 15);
    }

    if(array.length != numero)
    {
        throw new RangeError('Erro, tamanho do array é diferente do número enviado.', 20);
    }

    let resultado = 0;

    for(let i = 0; i < array.length; i++)
    {
        resultado += array[i];
    }

    return resultado;
}

let nums = [1,2,3,4];

const OBJETO =
{
    num1: 1,
    num2: 2,
}

console.log(soma(nums, 4));

try 
{
    console.log(soma(nums, 4));    
}
catch(e)
{
    throw e;
}

try 
{
    console.log(soma(OBJETO, 4));
}
catch(e)
{
    throw e;
}