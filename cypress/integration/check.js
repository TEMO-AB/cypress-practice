/// <reference types="Cypress" />

describe('test skyscanner website' , () => {

    it('open skyscanner' , () => {
     // we use check & uncheck command to select any checkbox  {we use this object {force : true} to solve any element}
        cy.viewport('macbook-15');
        cy.visit('https://skyscanner.de');
        cy.get('input[name="originFlexible"]').check();
        cy.get('input[name="directOnly"]').check();
        cy.get('input[name="originFlexible"]').uncheck({force : true});
       

    })
})