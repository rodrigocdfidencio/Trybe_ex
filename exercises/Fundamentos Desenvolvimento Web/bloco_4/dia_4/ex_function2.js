// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let higher = 0;
function checkHigher (array) {
    
     for (let index in array) {
         if (array[index] > array[(parseInt(index)+1)]) {
            higher = parseInt(index);
         }
         
     }  return higher;
}

console.log(checkHigher([2, 32, 63, 7, 103, 199]))