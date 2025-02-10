//Use o método .reduce para somar todos os valores do array numeros.

let numeros = [1, 2, 3, 4, 5];

let soma = numeros.reduce(function(acumulador, numero){
    return acumulador+numero;
}, 0)

console.log(soma);