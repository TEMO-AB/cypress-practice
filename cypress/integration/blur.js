/// <reference types="Cypress" />


describe('test Facebook website' , () => {

    it('open facebook' , () => {

        cy.visit('https://facebook.com')  
        cy.get('[name="email"]').type('@hotmail.com').blur();
        cy.get('[name="pass"]').focus().blur();

    })
})
