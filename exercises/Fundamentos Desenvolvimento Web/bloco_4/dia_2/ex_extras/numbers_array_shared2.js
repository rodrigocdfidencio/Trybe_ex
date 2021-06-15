let numbers = [];
let numbersShared = [];
let numberShared = 0;

for (let index = 1; index < 26; index +=1) {
    numbers.push(index);
}

for (let shareIndex = 0; shareIndex < numbers.length; shareIndex += 1) {
    numberShared = numbers[shareIndex] / 2;
    numbersShared.push(numberShared);
}

console.log(numbers);
console.log(numbersShared);