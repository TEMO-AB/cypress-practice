/// <reference types="Cypress" />

describe('test BBC website' , () => {

    it('open BBC' , () => {
     
       
        cy.visit('https://bbc.com');
        cy.get('.ws-headlines__list').find('li').eq(2).first().as('thirdLi');
       

    })
})
