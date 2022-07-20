let array = [];
//let array = new Array();

array.push(3);
console.log(array);

array.push(2);
console.log(array);

array.pop();
console.log(array);

array.push(2);
array.push(5);
array.shift();
console.log(array);

array.unshift(7);
console.log(array);

for(let i = 0; i < array.length; i++)
{
    console.log(array[i]);
}

console.log(array.includes(3));
console.log(array.every(item => item === 5));
console.log(array.some(item => item === 5));
console.log(array.reverse());