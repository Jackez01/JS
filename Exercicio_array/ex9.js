//Crie um array chamado idades com os valores: 12, 18, 25, 14, 32, 19, 40. Use o método .filter para criar um novo array apenas com idades maiores ou iguais a 18.

let idades = [12, 18, 25, 14, 32, 19, 40];

let maiores_idade = idades.filter(function(numero) {
    return numero >=18;
});

console.log(maiores_idade);