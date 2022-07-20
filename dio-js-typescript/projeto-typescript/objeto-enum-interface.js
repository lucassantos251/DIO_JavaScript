"use strict";
const mariana = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'developer'
};
//objetos também preservam tipo de variavel inicializada
//pessoa1.idade = '29';
mariana.idade = 29;
const andre = {
    nome: 'Andre',
    //idade: '30',
    idade: 30,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'DEveloper'
};
//grupo de constantes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Pintor"] = 3] = "Pintor";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const Jessica = {
    nome: 'Jessica',
    idade: 20,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Programação']
};
const monica = {
    nome: 'Monica',
    idade: 19,
    materias: ['Matemática', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
