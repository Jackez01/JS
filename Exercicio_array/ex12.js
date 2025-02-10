//Crie um array com os valores [50, 10, 30, 20, 40] e use .sort para ordená-los em ordem crescente e decrescente.

let numeros = [50, 10, 30, 20, 40];

let crescente = numeros.sort(function(a, b) {
    return a - b;
});

let numeros2 = [50, 10, 30, 20, 40];
let decrescente = numeros2.sort(function(a, b) {
    return b - a;
})

console.log("A lista naordem crescente ficará assim: ", crescente, "E decrescente: ", decrescente);