describe('Formulário Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Gui22 Lima');
    cy.getByData('email-input').type('guijsadf@gemail.com');
    cy.getByData('senha-input').type('4567891');
    cy.get('[data-test="checkbox-input"]').click();
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!')
      .click();
  });
});
