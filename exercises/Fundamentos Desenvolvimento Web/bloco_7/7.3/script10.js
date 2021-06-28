//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greetPeople = (parameter) => {
  let greeting = "Hello ";

  for (const person in people) {
    greeting += people[person];
    console.log(greeting);
  }

  return greeting;
};

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];
