/* 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals . */


const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(`Exercício 1   ${ifScope} `);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(`Exercício 1  ${elseScope} `);
    }
    
  }

  testingScope(false);

/* 2 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(`Exercício 2, o array em ordem crescente é: ${oddsAndEvens}`);

/* 3 - Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
1 - Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
 */

const fatorial = number => {
    let result = 1
    for(let index = 1; index <= number; index += 1){
        result = result * index
        } console.log(`Exercício 3. O fatorial de ${number} é ${result}`);
    } 


const checkTernary = (number) => (
    number === 0 ? `Exercício 3. O fatorial de ${number} é 1` : fatorial(number)
  );
  
checkTernary(6)

/* 2 - Crie uma função que receba uma frase e retorne qual a maior palavra. */

function longestWord (string) {
    const maior = string
  .match(/\w+/g)
  .sort((a, b) => b.length - a.length)[0];

  console.log(`A maior palavra da frase ${string} é ${maior}`)
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")