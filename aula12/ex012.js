agora = new Date();
var dia = agora.getDate();
var mes = (agora.getMonth() + 1);
var ano = agora.getFullYear();
var hora = agora.getHours();
var minutos = agora.getMinutes();
console.log(`Data de Hoje: ${dia}/${mes}/${ano} - Agora são ${hora}:${minutos}h`);
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora < 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}