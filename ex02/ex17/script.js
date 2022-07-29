function tabuada() {
    let numero = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (numero.value.length == 0){
        alert('[ERRO] Não digitou nenhum número.')
    } else {
        let n = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}