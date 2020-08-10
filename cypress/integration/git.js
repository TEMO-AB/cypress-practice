/// <reference types="Cypress" />

describe('test facebook' , () => {


    it('login with invalid creditials', () => {
      // we use git command to git any elemint in the CSS
          cy.viewport('macbook-15')
          cy.visit('https://facebook.com')  
          cy.get('input')
          cy.get('#loginbutton')
          cy.get('.uiButtonConfirm')
          cy.get('[name="firstname"]')  


    })

    // CSS Selectors

    /*
     1- Using tag name
     2- Using id #
     3- Using class .
     4- Using all attribute []
    */
})