describe('Testando dispositivos móveis', () => {
  it('Deve exibir o botão menu hambúrguer', () => {
    cy.viewport(400, 800);
    cy.visit('/');

    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('menu-burguer').should('be.visible');
  });
});
