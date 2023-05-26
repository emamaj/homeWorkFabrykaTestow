
const checkbox = 'input[type="checkbox"]'

class CheckBoxPage{

    clickFirstCheckbox(){
        cy.get(checkbox).first().check().should('be.checked')
    }

    clikLastCheckbox() {
        cy.get(checkbox).last().uncheck().should('not.be.checked')
    }
}

export default CheckBoxPage