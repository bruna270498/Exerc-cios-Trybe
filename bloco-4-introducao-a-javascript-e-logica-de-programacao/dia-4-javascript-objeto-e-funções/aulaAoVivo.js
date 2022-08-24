//Faça um algoritmo que calcule a soma de 
//1 a 50 usando a estrutura "for" e retorne no formato:
// //A soma total de 1 a 50 é:
// let soma = 0;
// for(let i=1; i <= 50; i += 1){
//  soma++
// }
// console.log(soma)

//Crie um algoritmo que conte quantos números do intervalo 
//entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba 
// //uma mensagem secreta.
// let quantidade=0;
// for(index = 2; index<=150;index += 1){
//   if(index % 3 ===0){
//     quantidade ++
//   }
// }if ( quantidade >= 50){
//     console.log('o numero 150 divide 50 pelo 3')
// }
// console.log(quantidade)

//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" 
//levando em consideração que são apenas duas pessoas jogando e 
//imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
let papel = 1;
let pedra = 2;
let tesoura = 3;
let player1 = Math.random()
let player2 = 'papel'
if(player1 ==='pedra' && player2 === 'papel'){
    console.log('ganha player 2')
} else if( player1 === 'tesoura' && player2 === ' papel' ){
    console.log('ganha player 1')
}else if (player1 === 'pedra' && player2 === 'tesoura'){
    console.log('ganha player 1')
}else{
    console.log( 'em pate')
}