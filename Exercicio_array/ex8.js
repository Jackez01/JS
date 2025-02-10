//Use o método .forEach para exibir todos os números do array numeros.

let numeros = [];

for(let i= 1; i<11; i++) {
    numeros.push(i)
}

numeros.forEach(function(numero) {
    console.log(numero);
});