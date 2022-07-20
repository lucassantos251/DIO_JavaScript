let array = ['valor1','valor2','valor3','valor4','valor5',];

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}

//for - executa uma instrucao ate que ela seja falsa
for(let i = 0; i < array.length; i++)
{
    console.log(i);
}

// for/in executa repetição a partir de uma propriedade
// com array
for(let i in array)
{
    console.log(i);
}

//com object
for(let i in object)
{
    console.log(i);
}

//for/of executa repetição a partir de um valor
//com array
for(i of array)
{
    console.log(i);
}

//com object, não funciona bem
for(i of object.propriedade1)
{
    console.log(i);
}

//uso do while
var a = 0;
while(a < 10)
{
    a++;
    console.log(a);
}

var b = 0;
do 
{
    b++;
    console.log(a);
} while (b < 10)