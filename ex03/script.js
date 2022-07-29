let numero = document.querySelector("#fnum");
let lista = document.querySelector("#flista");
let resultado = document.querySelector("#result");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLsta(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLsta(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = document.createElement("option");
    item.text = `Valor ${numero.value} adicionado`;
    lista.appendChild(item);
    resultado.innerHTML = "";
  } else {
    alert("Valor inválido ou já encontrado na lista!");
  }
  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalzar");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let i in valores) {
      soma += valores[i];
      if (valores[i] > maior) maior = valores[i];
      if (valores[i] < menor) menor = valores[i];
    }

    media = soma / total;

    resultado.innerHTML = "";
    resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    resultado.innerHTML += `<p>A média dos valores  ${media}.</p>`;
  }
}
