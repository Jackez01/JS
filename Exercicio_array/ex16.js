//Crie uma função que receba um array e um número, e divida o array em sub-arrays com o tamanho especificado. Por exemplo: dividir([1, 2, 3, 4, 5], 2) retorna [[1, 2], [3, 4], [5]]

function dividir(array, tamanho) {
    let resultado = [];

    for (let i=0; i<tamanho.length; i += tamanho) {
        resultado.push(array.slice(i, i + tamanho));
    }

    return resultado;
}

let resultado = dividir([1, 2, 3, 4, 5], 2);

console.log(resultado);

