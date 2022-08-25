const alunos =
[{
    nome: 'Lucas',
    nota: 7,
    turma: '3C',
},
{
    nome: 'Gabrielli',
    nota: 9,
    turma: '1B',
},
{
    nome: 'Ana',
    nota: 6,
    turma: '2A'
},
{
    nome: 'Pedro',
    nota: 3,
    turma: '2A'
}]

function alunosAprovados(array, media)
{
    let aprovados = [];

    for(let i = 0; i < array.length; i++)
    {
        const {nota, nome} = array[i];

        if(nota >= media)
        {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6));