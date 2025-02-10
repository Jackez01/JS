function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    //let hour = data.getHours()
    let hour = 13
    msg.innerHTML = `Agora são ${hour} horas.`

    if(hour>= 0 && hour<12){
        //bom dia
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hour>=12 && hour<18){
        //boa tarde
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}