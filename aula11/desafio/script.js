function checarPais() {
    var pais = document.getElementById('nacionalidade').value.toUpperCase()
    var res = document.getElementById('res')

    res.innerHTML = `País digitado: ${pais}`

    if (pais == 'BRASIL') {
        res.innerHTML += `<p>Você é Brasileiro! PENTACAMPEÃO, CARAI!</p>`
    } else if ((pais == 'FRANÇA') || (pais == 'ESPANHA') || (pais == 'ITÁLIA') || (pais == 'ALEMANHA') || (pais == 'INGLATERRA') || (pais == 'URUGUAI')) {
        res.innerHTML += `<p>Gringo com Copa, mas não é penta.</p>`
    } else if (pais == 'ARGENTINA'){
        res.innerHTML += `<p>Mil gols, Mil gols, Mil gols, Mil gols, Mil gols, Só Pelé, Só Pelé, Maradona cheirador</p>`
    } else {
        res.innerHTML += `<p>Sem Mundial, que nem Palmeiras</p>`
    }
}