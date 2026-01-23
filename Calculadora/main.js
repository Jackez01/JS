const botoes = document.querySelector("#btns");
const scream = document.querySelector("#display");

let primeiroNumero;
let operador;

botoes.addEventListener("click", (event) => {
    event.preventDefault();
    

    if(!isNaN( event.target.innerText)) {

    //Soma o valor atual do display mais o novo botão selecionado
    scream.value = (scream.value) + (event.target.innerText);
    } if (isNaN(event.target.innerText)) {
        primeiroNumero = scream.value;
        operador = event.target.innerText;
        scream.value = "";
    }
    
    });