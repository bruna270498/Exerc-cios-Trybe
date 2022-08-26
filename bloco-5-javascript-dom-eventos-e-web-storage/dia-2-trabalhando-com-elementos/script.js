// arquivo script.js

// console.log(document.getElementById('start').nextSibling) // nó

// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

const color=document.getElementById("elementoOndeVoceEsta").parentElement;
color.style.color="red"

const primeiroFilhoo= document.querySelector('#primeiroFilhoDoFilho').innerText = 'Aqui estou eu onde tudo aconteceu';
 document.getElementById('#pai.firstChild')
 let estouAqui= document.createElement('p')
 estouAqui.innerText="Eu estou aqui"
 elementoOndeVoceEsta.appendChild(estouAqui)

let irmao = document.createElement('p')
irmao.textContent='Vou dançar';
elementoOndeVoceEsta.appendChild(irmao)
let filho = document.createElement('h2');
filho.textContent='Sou mas eu';
primeiroFilho.appendChild(filho)

document.getElementById('#primeiroFilho.childNodes()')
