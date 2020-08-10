/// <reference types="Cypress" />

describe('test BBC website', () =>{
    it('open BBC', () =>{
        cy.visit('https://www.bbc.com');
        cy.get('ul.ws-languages__list').children().eq(6);


    })
})