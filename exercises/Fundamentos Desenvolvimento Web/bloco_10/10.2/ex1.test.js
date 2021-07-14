const uppercase = require('./ex1.js');

describe('Teste exercício 1', () => {
  it('Testa chamada da funçao', (done) => {
    uppercase('rodrigo', (str) => {
      expect(str).toBe('RODRIGO');
      done();
    });
  });
});
