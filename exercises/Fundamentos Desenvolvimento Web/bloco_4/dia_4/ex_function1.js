// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromeVerify(string) {
    for(let index = 0; index < string.length / 2; index +=1) 
    if (string[index] != string[string.length - index - 1]) return false;
    return true;
} 

console.log(palindromeVerify("arara"));
console.log(palindromeVerify("desenvolvimento"));
console.log(palindromeVerify("radar"));
