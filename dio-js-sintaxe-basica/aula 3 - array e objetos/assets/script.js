//o que sao vetores ou arrays

//declarando um array
let array = ['string', 1, true];
console.log(array);

//pode guardar varios tipos de dados
let array1 = ['string', 1, true, ['array2'],['array3'],['array4'],['array5']];
console.log(array1);

//acessando um valor dentro do array, sempre comeca do indice 0
console.log(array1[2]);

//forEach - para cada item
array.forEach(function(item, index){console.log(item, index)});

//push - adicionar novo item no final
array.push('novo item');
console.log(array);

//pop - remover item no final
array.pop();
console.log(array);

//shift - remove item no inicio
array.shift();
console.log(array);

//unshift - adiciona item no inicio
array.unshift('primeiro');
console.log(array);

//indexOf - qual o indice do valor desejado
console.log(array.indexOf(true));

//splice - remove ou substitui um item pelo indice
array.splice(0,3);
console.log(array);

//slice - retorna parte de um array existente
let novoArray = array1.slice(0,4);
console.log(novoArray);

//objetos

let object = {
    string: 'nome',
    number: 1,
    boolean: true,
    array: ["array"],
    objectInterno: {object: "objeto interno"}
};

console.log(object);
console.log(object.boolean);
console.log(object.objectInterno);

//desestruturacao

var string = object.string;
console.log(string);

var arrayObject = object.array;
console.log(arrayObject);

var {string, objectInterno} = object;
console.log(objectInterno);