/// <reference types="Cypress" />


describe('testing feacbook website', () =>{
    
    it('open feacbook', ()=>{

        cy.viewport('macbook-15');
        cy.visit('https://facebook.com');
        cy.get('a').should('contain','Sign Up').and('have.attr', 'href').and('match', /r.php/).and('not.include','#');
        



    })



 })