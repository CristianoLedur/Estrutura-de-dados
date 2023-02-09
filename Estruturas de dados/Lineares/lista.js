//Inicializa a lista vazia
var lista = [];

//Insere item
lista.push("2002");

//Insere no início
lista.unshift("1958");

//Insere em posição
lista.splice(1, 0, "1962");

//Insere em posição
lista.splice(2, 0, "1970");

//Insere em posição
lista.splice(3, 0, "1994");

//Imprime lista
console.log(lista);

//Remove do final
var ano = lista.pop();

console.log(lista);

//Remove do início
ano = lista.shift();

console.log(lista);

//Remove de posição
ano = lista.splice(1, 1);

console.log(lista);