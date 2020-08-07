/// <reference types="Cypress" />

describe('test facebook website' , () => {

    it('open facebook' , () => {
     // we use tselect command to Specify any elemint  
        cy.viewport("macbook-15");
        cy.visit("https://facebook.com");
        cy.get("#day").select("1");
        cy.get("#month").select("4");
        cy.get("#year").select("1994");


    })
})