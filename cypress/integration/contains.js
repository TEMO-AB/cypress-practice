/// <reference types="Cypress" />



describe("test facebook", () => {
// we use contains command to Specifically any elemint

    it("login with invalid creditials" , () => {

        cy.viewport("macbook-15");
        cy.visit("https://feacbook.com");
        cy.contains("Weiblich");
    })

})