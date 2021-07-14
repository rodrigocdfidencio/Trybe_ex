const { findUserById, getUserName } = require('./ex2.js');

describe('Teste do exercício 2 e 3', () => {
  expect.assertions(1);

  it('resultado da função getUserName para o caso em que o usuário é encontrado', () => {
    return getUserName('4').then((data) => {
      expect(data).toEqual('Mark');
    });
  });
});

describe('Teste do exercício 2 e 3', () => {
  expect.assertions(1);
  it('resultado da função getUserName para o caso em que o usuário não é encontrado', () => {
    return getUserName('1').catch((error) => {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    });
  });
});
