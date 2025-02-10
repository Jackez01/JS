//Dado um array de inteiros  arr e uma função de mapeamento  fn, retorne um novo array com uma transformação aplicada a cada elemento.
//O array retornado deve ser criado de forma que  returnedArray[i] = fn(arr[i], i).
//Por favor, resolva sem o método integrado Array.map.




//com map -> lista criada, variavel criada, dentro dela acessamos com o map e criamos uma nova variavel para modificar a lista
//let numbers = [1, 2, 3, 4, 5];

//let  mod = numbers.map(number => number*2);
//console.log(mod);

// sem o map
let numbers = [1, 2, 3, 4, 5];

let i = 0;
while(i < numbers.length) {
    numbers[i] *= 2;
    i++;
}