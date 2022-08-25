let anyOMG: any;
anyOMG = 3;
anyOMG = 'teste';
anyOMG= 5;

let stringTeste: string = 'verificar';
stringTeste = anyOMG;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai não';

let stringTeste2:string = 'meuDeus';
// erro stringTeste2 = unknownValor;

//unknown precisa ser tratado
if(typeof unknownValor === 'string'){
    stringTeste2 = unknownValor;
}

//never é um código abruptamente finalizado, nunca tem finalização
function jogaErro(erro: string, codigo:number): never{
    throw {message: erro, errorCode: codigo};
}

jogaErro('deu erro', 500);