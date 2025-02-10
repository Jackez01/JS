//Use o método Math.max e Math.min junto com o operador de espalhamento (...) para encontrar o maior e o menor valor no array [15, 7, 22, 3, 8, 12].

let numeros = [15, 7, 22, 3, 8, 12];

let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);

console.log("O maior número é ", maximo, "e o menor é ", minimo);