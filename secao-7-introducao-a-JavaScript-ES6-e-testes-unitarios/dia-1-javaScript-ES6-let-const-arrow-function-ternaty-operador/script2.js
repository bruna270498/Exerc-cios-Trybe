const factorial = (numero) => {
    let resultado = 1;
    for(let i=numero; i> 0; i -= 1){
        resultado = resultado *= i;
    }
    // console.log(`Esse é o fatorial ${resultado}`)
}
factorial(10);
const Frase = () => {
 const frases = 'Antônio foi ao banheiro e não sabemos o que aconteceu';
 const A = frases.split(' ')
 let b = ''
 for( let i of A){
  if(i > b){
    b = i
  }
 }
 console.log(b)
}
Frase();