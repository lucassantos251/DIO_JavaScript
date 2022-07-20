const mariana = 
{
    nome: 'Mariana',
    idade: 28,
    profissao: 'developer'
}

//objetos também preservam tipo de variavel inicializada
//pessoa1.idade = '29';
mariana.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = 
{
    nome: 'Andre',
    //idade: '30',
    idade: 30,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = 
{
    nome: 'Paula',
    idade: 25,
    profissao: 'DEveloper' 
}

//grupo de constantes
enum Profissao 
{
    Professora, 
    Atriz,
    Desenvolvedora,
    Pintor,
}

interface Pessoa 
{
    nome:string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa
{
    materias: string[],
}

const vanessa: Pessoa =
{
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const Jessica: Estudante =
{
    nome: 'Jessica',
    idade: 20,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Programação']
}

const monica: Estudante =
{
    nome: 'Monica',
    idade: 19,
    materias: ['Matemática', 'Programação']
}

function listar(lista:string[])
{
    for(const item of lista)
    {
        console.log('- ',item)
    }
}

listar(monica.materias);