var num1 = 10;
var num2 = 11;

var iguais = num1 == num2;
console.log(iguais);

var soma = num1 + num2;
console.log(soma);

var maior_que_10 = soma > 10;

var maior_que_20 = soma > 20;

if(iguais==false)
{
    if(maior_que_10==true)
    {
        if(maior_que_20==true)
        {
            console.log((`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`))
        }
        else
        {
            console.log((`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`))
        }
    } 
    else
    {
        console.log((`Os números ${num1} e ${num2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`))        
    }
} 
else if (maior_que_10)
{
    if(maior_que_20==true)
    {
        console.log((`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20.`))
    }
    else
    {
        console.log((`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`))
    }
}
else
{
    console.log((`Os números ${num1} e ${num2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20.`))        
}