/// <reference types="Cypress" />

describe('test facebook website' , () => {

    it('open facebook' , () => {
     // we use type command to write whatever we want nambers and text and options but first we have to select the elemint  
        cy.viewport("macbook-15");
        cy.visit("https://facebook.com");
        cy.get("#email").type("tamimabotafish@hotmail.com{backspace}");
})
})