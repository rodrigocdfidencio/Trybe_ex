const { sum, encode, decode } = require("./script");

describe("sum", () => {
  test("Teste se o retorno de sum(4, 5) é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
});

describe("sum", () => {
  test("Teste se o retorno de sum(0, 0) é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("sum", () => {
  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });
});

describe("sum", () => {
  test('Teste se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow(/parameters must be numbers/);
  });
});

describe("encode_decode", () => {
  it("Teste se encode é funçao", () => {
    expect(typeof encode).toEqual("function");
  });

  it("Teste se decode é funçao", () => {
    expect(typeof decode).toEqual("function");
  });

  test("Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;", () => {
    expect(encode("a, e, i, o, u")).toEqual("1, 2, 3, 4, 5");
  });
  test("Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente", () => {
    expect(decode("1, 2, 3, 4, 5")).toEqual("a, e, i, o, u");
  });
  test("Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(encode("rodrigo").length).toEqual(7);
  });
  test("Teste se as demais letras/números não são convertidos para cada caso", () => {
    expect(encode("rodrigo")).toEqual("r4dr3g4");
  });
  test("Teste se as demais letras/números não são convertidos para cada caso", () => {
    expect(decode("r4dr3g4")).toEqual("rodrigo");
  });
});
