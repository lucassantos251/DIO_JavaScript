"use strict";
/*function soma(a: number, b: number)
{
    return a + b;
}

//ja acusa erro
//soma('a','b');

// types
// interfaces

interface IAnimal
{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean,
}

interface IFelino extends IAnimal
{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal
{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IAnimal =
{
    nome: 'Elefante',
    tipo: "terrestre",
    domestico: false,
}

const cachorro: IDomestico =
{
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numero = void 0;
//tratando a tag input
/*
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input' , (event) =>{
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
    //console.log(event.currentTarget.)
})*/
//generic types
/*
function adicionaApendiceALista<T>(array: T[], valor: T)
{
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 1)
adicionaApendiceALista(['a','b','c'], 'd')
//erro adicionaApendiceALista([1, 2, 3], 'd');*/
//desenvolvendo condicionais a partir de parametros
/*
interface IUsuario
{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario
{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin)
{
    if('cargo' in usuario)
    {
        //redirecionar para area de administracao
    }

    //redirecionar para area do usuario
}*/
//utilizando o caracter "?" para variaveis opcionais
/*
interface IUsuario
{
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario)
{
    if(usuario.cargo)
    {
        //redirecionar(usuario.cargo);
    }
    //redirecionar para area do usuario
}*/
//criando variáveis com propriedade readonly e private
/*
interface Cachorro
{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura =
{
    readonly [K in keyof Cachorro]: Cachorro[K];
    //readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura
{
    nome;
    idade;

    constructor(nome,idade)
    {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Urak', 14);
cao.idade = 8;

console.log(cao);*/
//como importar bibliotecas com typescript
/*
interface Estudante
{
    nome: string;
    idade: number;
}
//soma de interfaces
interface Estudante
{
    serie: string;
}

const estudante: Estudante =
{
    nome: "",
    idade: 0,
    serie: ""
}*/
/*
import $ from 'jquery';

$.fn.extend(
    {
        novaFuncao()
        {
            console.log('Chamou nova função');
        }
    }
)

$('body').novaFuncao();*/
//import export
exports.numero = 2;
/*const brasileiro: Brasileiro =
{

}*/
