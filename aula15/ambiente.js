let num = [5, 8, 2, 9, 3]

num.push(7)
console.log(num)
console.log(`A ordem dos vetores crescente é ${num.sort()}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let i = num.indexOf(6)
if (i == -1) {
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor 8 está na posição ${i}`)
}