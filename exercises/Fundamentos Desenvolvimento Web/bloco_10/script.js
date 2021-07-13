// sum.js
const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }
  return a + b;
};

// encodeDecode.js
function mapString(objectMap, string) {
  const splitString = string.split("");
  const mappedArray = splitString.map((character) => {
    if (objectMap[character]) {
      return objectMap[character];
    }
    return character;
  });
  return mappedArray.join("");
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}
function decode(string) {
  const map = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  return mapString(map, string);
}
const functions = { sum, encode, decode };

module.exports = functions;
