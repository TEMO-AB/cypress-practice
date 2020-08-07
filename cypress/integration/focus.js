/// <reference types="Cypress" />

describe('test skyscanner website' , () => {

    it('open skyscanner' , () => {
     // we use Focus command to select the input filed & Clear commend to clear the input filed
        cy.viewport('macbook-15');
        cy.visit('https://skyscanner.de');
        cy.get('#fsc-origin-search').focus();
        cy.get('#fsc-origin-search').clear();
        

    })
})