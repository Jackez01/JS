const botoes = document.querySelector("#btns");
const scream = document.querySelector("#display");

botoes.addEventListener("click", (event) => {
    event.preventDefault();


    if()
    //Soma o valor atual do display mais o novo botão selecionado
     scream.value = (scream.value) + (event.target.innerText);
      

})