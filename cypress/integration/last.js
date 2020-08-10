/// <reference types="Cypress" />
 
describe('test fecebook', () => {
  it('open facebook', () => {
      cy.visit('https://facebook.com');
      cy.get('li').last();
  })

})