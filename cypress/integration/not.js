/// <reference types="Cypress" />


describe('test BBc website', () => {
    it('open BBC', () => {
        cy.visit('https://www.bbc.com');
        cy.get('ul>li').not('.active');
        cy.get('ul.ws-languages__list').find('>li').eq(7);


    })
})