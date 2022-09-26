// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (number) =>  number % 3 === 0 && number % 5 === 0;
//   // Adiciona seu código aqui

// const res = numbers.find(findDivisibleBy3And5)

// const names = ['João', 'Irene', 'Fernando', 'Maria'];
// // console.log(names.length)
// const findNameWithFiveLetters = (nome) => (nome.lenght === 5) ? `${nome}`:'não é';
//   // Adicione seu código aqui:

// const nome = names.find(findNameWithFiveLetters);

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
 return arr.some((nome) => nome === name)
};

console.log(hasName(names, 'Bruno'));