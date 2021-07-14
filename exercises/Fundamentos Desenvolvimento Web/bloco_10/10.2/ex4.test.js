const getRepos = require('./ex4.js');

describe('Teste ex4', () => {
  it('Verifica os repositorios', () => {
    getRepos('https://api.github.com/orgs/tryber/repos').then((result) => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
