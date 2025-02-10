function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade>=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'TAG DA FOTO')
            } else if( idade < 21) {
                // adolescente
                img.setAttribute('src', 'TAG DA FOTO')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'TAG DA FOTO')
            } else {
                //idoso
                img.setAttribute('src', 'TAG DA FOTO')
            }

        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade>=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'TAG DA FOTO')
            } else if( idade < 21) {
                // adolescente
                img.setAttribute('src', 'TAG DA FOTO')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'TAG DA FOTO')
            } else {
                //idoso
                img.setAttribute('src', 'TAG DA FOTO')
            }
        }
        res.style.textAlign = 'center' // centralizar a frase debaixo
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img) //add foto
    }
}