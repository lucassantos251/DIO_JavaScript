let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString1:string = 'teste';
//bronca
//valorString = 3;
//valorString = true;
valorString1 = valorAny; //any permite que qualquer valor se torne string
let valorString2 = 'testao';
valorString2 = valorAny;

function somarString(string1:string, string2: string)
{
    console.log(string1 + string2);
}

somarString(valorString1,valorString2); // somou booleans...????????????????????
somarString('ola ',', como vai?');