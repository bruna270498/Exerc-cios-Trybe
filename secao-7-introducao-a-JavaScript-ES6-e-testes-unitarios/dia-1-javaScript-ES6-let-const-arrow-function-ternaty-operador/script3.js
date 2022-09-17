// const clickBotao = document.querySelector('#btn');
// let clickCount = document.getElementById('tagClick');

// clickBotao.addEventListener('click', () => {
//   var numero = parseInt(clickCount.textContent) + 1;
//   clickCount.textContent = numero;

// })
const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
   let o = frase.replace('x', nome)
    console.log(o)
}

const minhasSkills = () => {
    const skills = ['JS', 'CSS', 'ES6']
    let frase = `Minhas três principais habilidades são:${skills}.`
    console.log(`${frase} ${substituaX('o')}`)
}
minhasSkills()