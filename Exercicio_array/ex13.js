//Crie um array com os valores [1, 2, 2, 3, 4, 4, 5] e remova os valores duplicados, retornando apenas os únicos.

let numeros = [1, 2, 2, 3, 4, 4, 5];

let removidos = numeros.splice(1,1);

let removidos2 = numeros.splice(3,1);

console.log(numeros);

//poderia ser feito usando o slice e filter também