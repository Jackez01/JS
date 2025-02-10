//Crie um array com os valores [1, 2, 3, 4, 5] e use .map para criar um novo array onde cada valor é multiplicado por 2.

let numeros = [1, 2, 3, 4, 5];

let dobro = numeros.map(function(numero){
    return numero*2;
});

console.log("A nova lista fica assim:", dobro)