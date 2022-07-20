const pessoa1 =
{
    nome: 'Lucas',
    idade: 25,
}

const pessoa2 =
{
    nome: 'João',
    idade: 20,
}

const pessoa3 =
{
    nome: 'Maria',
    idade: 35,
}

const animal = 
{
    nome: 'Cuddles',
    idade: 1,
    tipo: 'Porco da Índia',
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(animal, 2));
console.log(calculaIdade.apply(pessoa2, [10]));