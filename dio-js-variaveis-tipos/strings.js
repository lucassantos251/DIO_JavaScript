let nome = "João";
let sobrenome = "Pedro";

console.log(nome,sobrenome);
console.log(typeof(nome),typeof(sobrenome));

let concatenado = nome.concat(sobrenome);
console.log(concatenado.length);

let exemplo = new String("blablabla");
console.log(typeof(exemplo));
console.log(exemplo);

console.log(nome[1]);
console.log(nome.length);

concatenado = nome + " " + sobrenome;
console.log(concatenado);

concatenado = nome + "\n" + sobrenome;
console.log(concatenado);

concatenado = `${nome} ${sobrenome}`;
console.log(concatenado);

concatenado = `${nome}

${sobrenome}`;
console.log(concatenado);

let aspas = "\"";
console.log(aspas);

let frase = "Olá, tudo bem?"
console.log(frase.split(""));
console.log(frase.split(" "));
console.log(frase.includes("tudo"));
console.log(frase.startsWith("o"));
console.log(frase.startsWith("O"));
console.log(frase.endsWith("?"));
console.log(frase.endsWith("r"));
console.log(frase.replace(",","!"));