describe('newsletter button works', () => {
    it('visit main page', function () {
        cy.visit('https://fabrykatestow.pl/')

        cy.get('#menu-item-923').contains('Newsletter').click
        
        cy.wait(2000)
        cy.go('back')

       // cy.wait(2000)
       // cy.go('forward')
    })
})