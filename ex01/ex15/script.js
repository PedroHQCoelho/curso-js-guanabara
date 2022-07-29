function verificar(){ 
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if ((formAno.value.length == 0) || (formAno.value > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        result.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            genero = 'homem'
            if (idade < 4) {
                //bebê
                img.setAttribute('src', 'img/trunks-bebe.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'img/goten.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/trunksdofuturo.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'img/goku.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/kame.png')
            }
        } else if (formSex[1].checked){
            genero = 'mulher'
            if (idade < 4) {
                //bebê
                img.setAttribute('src', 'img/pan.png')
            } else if (idade < 12) {
                //criança
                img.setAttribute('src', 'img/pangt.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/bulma-jovem.png')
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'img/bulma-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/uranai.png')
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        result.appendChild(img)
    }
}