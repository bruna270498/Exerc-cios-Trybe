// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
//     diasDaSemana[1]; // SyntaxError: Unexpected number
//     console.log(diasDaSemana['1']); // domingo

//     let conta = {
//         agencia: '0000',
//         banco: {
//           cod: '012',
//           id: 4,
//           nome: 'TrybeBank',
//         },
//       };
      
//       let infoDoBanco = 'banco';
//       console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//       console.log(conta[infoDoBanco]['nome']); // TrybeBank
      
//       console.log(conta.agencia); // 0000
//       console.log(conta['agencia']); // 0000
      
//       console.log(conta.banco.cod); // 012
//       console.log(conta['banco']['id']); // 4

//       let usuario = {
//         id: 99,
//         email: 'jakeperalta@gmail.com',
//         infoPessoal: {
//           nome: 'Jake',
//           sobrenome: 'Peralta',
//           endereco: {
//             rua: 'Smith Street',
//             bairro: 'Brooklyn',
//             cidade: 'Nova Iorque',
//             estado: 'Nova Iorque',
//           },
//         },
//       };
      
//       console.log(usuario['id']); // 99
//       console.log(usuario.email); // jakeperalta@gmail.com
      
//       console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//       console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//       let moradores = [
//         {
//           nome: 'Luiza',
//           sobrenome: 'Guimarães',
//           andar: 10,
//           apartamento: 1005,
//         },
//         {
//           nome: 'William',
//           sobrenome: 'Albuquerque',
//           andar: 5,
//           apartamento: 502,
//         },
//         {
//           nome: 'Murilo',
//           sobrenome: 'Ferraz',
//           andar: 8,
//           apartamento: 804,
//         },
//         {
//           nome: 'Zoey',
//           sobrenome: 'Brooks',
//           andar: 1,
//           apartamento: 101,
//         },
//       ];
      
//       let primeiroMorador = moradores[0];
//       console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//       console.log(primeiroMorador['andar']); // 10
      
//       let ultimoMorador = moradores[moradores.length - 1];
//       console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//       console.log(ultimoMorador.nome); // Zoey

/////////////////////Fixação//////////////////////
// let play ={
//     name : 'Marta',
//     lastName : 'Silva',
//     age : 34  ,
//     medals : { golden : 2, silver: 3} ,
//     bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018]
// }
// console.log('Ajogadora '+play.name+' '+play.lastName+' tem '+play.age+' anos de idade')
// console.log('A jogadora '+play.name+' '+play.lastName+' foi eleita a melhor do mundo 6 vezes');
// console.log(' A jogadora possui '+ play.medals.golden +' '+' medalhas de ouro e '+ play.medals.silver +' medalhas de prata');

/////////////fixação 2////////////////
// let names = {
//     pessoa1 :'Bruna',
//     pessoa2 :'Leandro',
//     pessoa3 : 'Morena'
// };
// for( let key in names){
//     console.log('Olá '+ names[key])
// };
// let moto ={
//     Marca : 'Yamara',
//     modelo : 'Factor 150',
//     cor : 'Vermelha',
//     ano : 2019
// };
// // for(let key1 in moto){
// //     console.log(key1, moto[key1])
// // };
// let casa = ['guarda-roupa', 'fogão', 'pia']
// for(let key2 of casa){
//     console.log(key2)
// }
////////////fixação Função////////////////
// let statusCarro= 'Desligado';
// let Aceleracao = 0;
// let rotacaoVolante = 0;

// function ligarDesligar(){
//     if( statusCarro === 'Ligado'){
//         statusCarro = 'Desligado'
//     }else{ statusCarro = 'Ligado'}
//     return statusCarro
// }
// function Acelerar(increpemento){
//     Aceleracao = Aceleracao + increpemento
//     return 'Acelerando a ' + Aceleracao + ' m/s'
// };
// function Freiar(decremento){
//     Aceleracao = Aceleracao - decremento
//     return 'Desacelerando para  '+Aceleracao +' m/s'
// };
// function volante(angulo){
//  rotacaoVolante = angulo
//  return angulo + ' º'
// };
// ligarDesligar();
// Acelerar(30);
// volante(45);
// Freiar(5);
// volante(0);

