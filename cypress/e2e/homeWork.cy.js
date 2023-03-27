describe('Get screenshot', () => {
    it('Make a screenshot in a given page', function() {
    cy.visit('https://fabrykatestow.pl/')
    
    cy.get('.elementor-button-content-wrapper')
        .contains('POKAŻ CZEGO SIĘ NAUCZĘ')
        .eq(0)
        .click()

    cy.url()
        .should('eq', 'https://fabrykatestow.pl/cypress/')

    cy.get('.elementor-element-51c8325f')
        .scrollIntoView()
        .screenshot("screenshot", { capture: "viewport" })

    })
})