function validaArray(arr, numero)
{
    try
    {
        if(!arr || !numero)throw new ReferenceError('Erro, parâmetro não definido');

        if(typeof arr !== 'object') throw new TypeError('Arr precisa ser do tipo object.');

        if(typeof numero !== 'number')throw new TypeError('Number precisa ser do tipo number.');

        if(arr.length != numero) throw new RangeError('Tamanho do array é inválido.');

        let resultado = 0;

        for(let i = 0; i < arr.length; i++)
        {
            resultado += arr[i];
        }

        return resultado;
    }
    catch(e)
    {
        if(e instanceof ReferenceError)
        {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        }
        else if(e instanceof TypeError)
        {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }
        else if(e instanceof RangeError)
        {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        }
        else
        {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

//console.log(validaArray());
//console.log(validaArray(5,5));
//console.log(typeof([]));
//console.log(validaArray([],5));
console.log(validaArray([1,2,3,4,5],5));