function calculadora()
{
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Resto da Divisão(%)\n 6 - Potenciação(**)'));

    if(!operacao || operacao >= 7 || operacao <= 0)
    {
        alert("Operação Inválida");
        calculadora();
    }
    else
    {
        let n1 = Number(prompt("Insira o Primeiro Valor:"));
        let n2 = Number(prompt("Insira o Segundo Valor:"));
        let resultado;

        if(!n1 || !n2)
        {
            alert("Valor Inválido");
            calculadora();
        }
        else
        {
            function soma()
            {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function subtracao()
            {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function multiplicacao()
            {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function divisao()
            {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function restoDivisao()
            {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            function potenciacao()
            {
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2} = ${resultado}`);
                novaOperacao();
            }
            
            function novaOperacao()
            {
                let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");
        
                if(opcao == 1)
                {
                    calculadora();
                }
                else if(opcao == 2)
                {
                    alert('baibai baby');
                }
                else
                {
                    alert('Digite uma opção válida.');
                    novaOperacao();
                }
            }
            
            switch(operacao)
            {
                case 1:
                    soma();
                    break;
        
                case 2:
                    subtracao();
                    break;
        
                case 3:
                    multiplicacao();
                    break;
        
                case 4:
                    divisao();
                    break;
                
                case 5:
                    restoDivisao();
                    break;
        
                case 6:
                    potenciacao();
                    break;
            }
        }        
    }    
}

calculadora();