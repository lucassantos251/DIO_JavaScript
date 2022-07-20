//solução 1
function verificaPalindromo(string)
{
    if(!string) throw "string inexistente";

    return string.split("").reverse().join("") === string
}

console.log(verificaPalindromo("ama"));

//solucao 2
function verificaPalindromo2(string)
{
    if(!string) throw "string inexistente";

    for(i = 0; i < string.length /2 ; i++)
    {
        if(string[i] !== string[string.length-1-i])
        {
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("omo"));

//exemplo throw/try-catch/finally
function tryCatch(string)
{
    try
    {
        verificaPalindromo(string);
    }
    catch(e)
    {
        throw e;
    }
    finally
    {
        console.log('A string enviada foi: ' + string);
    }
}

tryCatch('');