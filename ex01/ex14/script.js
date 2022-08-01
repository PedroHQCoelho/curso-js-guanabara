function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = String(data.getMinutes()).padStart(2, 0)
    msg.innerHTML = `Agora são ${hora}:${minuto}h`

    if (hora <12){
        img.src = 'img/manha.png'
        document.body.style.background = '#61a4ce'
    } else if (hora <19){
        img.src = 'img/tarde.png'
        document.body.style.background = '#d6b086'
    } else {
        img.src = 'img/noite.png'
        document.body.style.background = '#0a2236'
    }
}




