////////// exercicio 1////////////

// let fatorial = 1;
// for( let i = 1; i <= 10; i += 1){
//    fatorial = fatorial * i
// }
// console.log(fatorial
//     )

////////// exercicio 2////////////

// let word = 'Trybe';
// let invertida = '';
// for ( let a = word.length -1; a >= 0; a -= 1){
//     invertida += word[a]
// };
// console.log(invertida)

////////// exercicio 3////////////

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';
for( let ma = 0; ma < array.length;ma+=1){
    for( let i= ma; i > array.length; i += 1){
    if(maior>array[i]){
        maior = array[ma]
    }
    }
}
console.log(maior)