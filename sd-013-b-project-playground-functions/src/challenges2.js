// Desafio 10
function techList(tech, nome) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let objects = [];
  for (let key of tech) {
    objects.push({ tech: key, name: nome });
  }
  let result = objects.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
  return result;
}

// Desafio 11
function checkNumbers(numbersToCheck) {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = (lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC));
  return result;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
