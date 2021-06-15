// Desafio 1
function compareTrue(val1, val2) {
  let compare;

  compare = val1 && val2;

  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;

  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[(array.length - 1)]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestNumber(numbers) {
  let biggerNumber = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggerNumber) {
      biggerNumber = numbers[index];
    }
  }
  return biggerNumber;
}

function highestCount(numbers) {
  let biggerNumber = highestNumber(numbers);
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === biggerNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8

function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 !== 0) {
      result[index] = 'fizz';
    } else if (numbers[index] % 3 !== 0 && numbers[index] % 5 === 0) {
      result[index] = 'buzz';
    } else if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result[index] = 'fizzBuzz';
    } else {
      result[index] = 'bug!';
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let encoded = string;
  encoded = encoded.replace(/a/g, '1');
  encoded = encoded.replace(/e/g, '2');
  encoded = encoded.replace(/i/g, '3');
  encoded = encoded.replace(/o/g, '4');
  encoded = encoded.replace(/u/g, '5');

  return encoded;
}
function decode(string) {
  let decoded = string;
  decoded = decoded.replace(/1/g, 'a');
  decoded = decoded.replace(/2/g, 'e');
  decoded = decoded.replace(/3/g, 'i');
  decoded = decoded.replace(/4/g, 'o');
  decoded = decoded.replace(/5/g, 'u');

  return decoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
