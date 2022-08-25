//tipos de funcao

//declarativas
function funcao()
{
    console.log("Mensagem de uma função declarativa.");
}

funcao();

//expressao de funcao
//com nomeacao
var funcaoVar = function funcaoDaVar()
{
    console.log("Mensagem de uma função com nomeação.");
}

funcaoVar();

//sem nomeacao
var funcaoVar1 = function()
{
    console.log("Mensagem de uma função sem nomeação.")
}

funcaoVar1();

//arrow function
var funcaoArrow = () => 
{
    console.log("Mensagem de uma função Arrow.");
}

funcaoArrow();