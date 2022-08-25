let obj = {}

console.log(typeof(obj));

obj.name = "Julia";

console.log(obj)

obj.age = 20;

console.log(obj);
console.log(Object.values(obj));
console.log(Object.keys(obj));

let person = 
{
    name: "Lucas",
    age: 25,
    address: "Rua Prof"
}

console.log(person.name);
console.log(person["name"]);

person["numberOfSiblings"] = 3
console.log(person);

let mom = "nameOfMom";
person[mom] = "Maria";
console.log(person);

console.log();