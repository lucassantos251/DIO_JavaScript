var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function colorChange(color)
{
    if(currentNumber < 0)
    {
        currentNumberWrapper.style.color = color;
    }
    else
    {
        currentNumberWrapper.style.color = "black";
    }
}

function increment()
{
    if(currentNumber < 10)
    {        
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
        colorChange("red");
    }
}

function decrement()
{
    if(currentNumber > -10)
    {    
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
        colorChange("red");
    }
}

document.getElementById("adicionar").addEventListener("click", function(){increment()}, true);
document.getElementById("subtrair").addEventListener("click", function(){decrement()}, true);
