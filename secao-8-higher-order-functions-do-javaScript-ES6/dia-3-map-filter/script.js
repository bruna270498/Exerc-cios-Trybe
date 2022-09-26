const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  const novoArrayLivro = books.map( (livros) => `Livro: ${livros.name} / Genero: ${livros.genre} / Autor: ${livros.author.name}`);
//   console.log(novoArrayLivro);

 const autorIdade = books.map((autor) => ({age:autor.author.birthYear, name:autor.author.name}));
//  console.log(autorIdade.sort());

const cientificoFantasia = books.filter((genero) => (genero.genre === 'Ficção Científica' || genero.genre === 'Fantasia')
)
// console.log(cientificoFantasia)

const idadeLivro = books.filter((ano) => 2022-ano.releaseYear >= 60);
idadeLivro.sort((a,b) => a.releaseYear-b.releaseYear)
// console.log(idadeLivro)