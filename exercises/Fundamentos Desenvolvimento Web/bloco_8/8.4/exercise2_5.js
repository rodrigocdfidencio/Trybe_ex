const assert = require("assert");

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis ",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult =
  "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  // escreva seu código aqui
}

assert.strictEqual(reduceNames(), expectedResult);

function reduceNames() {
  const names = books.reduce((acc, book, index, array) => {
    if (index === array.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, "");
  return names.trim();
}

assert.strictEqual(reduceNames(), expectedResult);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult2 = 43;

function averageAge() {
  const numAuthor = books.length;
  const age = books.reduce(
    (acc, book) => acc + (book.releaseYear - book.author.birthYear),
    0
  );
  return age / numAuthor;
}

assert.strictEqual(averageAge(), expectedResult2);

// 4 - Encontre o livro com o maior nome.
function longestNamedBook() {
  return books.reduce((big, current) => {
    if (current.name.length > big.name.length) {
      return current;
    }
    return big;
  });
}

//console.log(longestNamedBook());

// assert.deepStrictEqual(longestNamedBook(), expectedResult3);

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce(
    (acc, curr) =>
      acc +
      curr.split("").reduce((acumulator, current) => {
        if (current === "a" || current === "A") return acumulator + 1;
        return acumulator;
      }, 0),
    0
  );
}

assert.deepStrictEqual(containsA(), 20);
