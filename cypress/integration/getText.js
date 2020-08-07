/// <reference types="Cypress" />

describe('test BBC website' , () => {

    it('open BCC' , () => {
     // we use then commend to get any text
        cy.viewport('macbook-15');
        cy.visit('https://www.bbc.com');
        cy.get('.module--header span').then((header) => {
            let text = header.text();
            cy.log(text);
        })
        


    })
})