describe('Testas as informações de um único usuário', () => {
  it('Verificar informações: nome, senha, email, transações e saldo', () => {
    cy.fixture('dadosUsuario').then((usuario) => {
      cy.login(usuario.email, usuario.senha);
      cy.visit('/home');
      cy.url().should('include', '/home');

      cy.contains(usuario.nome).should('be.visible');

      cy.getByData('lista-transacoes')
        .find('li')
        .last()
        .contains(usuario.transacoes[usuario.transacoes.length - 1].valor);

      cy.get('[data-testid="saldo"]').contains(usuario.saldo);
    });
  });
});
