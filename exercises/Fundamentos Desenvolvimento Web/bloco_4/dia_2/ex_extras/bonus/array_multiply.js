let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplyResult = 0;
let numbersMultiply = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index < numbers.length - 1) {
        multiplyResult = numbers[index] * numbers[index + 1];
        numbersMultiply.push(multiplyResult);
    } else {
        multiplyResult = numbers[index] * 2;
        numbersMultiply.push(multiplyResult);
    }
  }

  console.log("Os números do array multiplicados entre si são: " + numbersMultiply + ", sendo que o último número foi multiplicado por 2");