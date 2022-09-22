const numeroSorteado = () => Math.floor(Math.random()*6)

const resultado = (numero,callback) => {
    return (numero === callback) ? 'Parabens você ganho!':'Infelizmente não foi dessa vez!'
}
console.log(resultado(1, numeroSorteado))
