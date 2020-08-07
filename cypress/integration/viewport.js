



describe('test view port' , () => {

it('test cnn on desktop view' , () => {
// we use viewport command to check the size in the browser 
    cy.viewport('macbook-15');
    cy.visit('https://cnn.com');
})


})