/// <reference types="Cypress" />

describe('test skyscanner website' , () => {

    it('open skyscanner' , () => {
     
        cy.viewport('macbook-15');
        cy.visit('https://skyscanner.de');
        cy.get('#footer-root').find('ul');
        cy.get('#footer-root').find('a').filter('#media-index');


    })
})