
const nameForm = 'input[id="fname"]'
const lastForm = 'input[id="lname"]'
const submitButton = '#formSubmitButton'


class FormPage {

    onFormSubmit() {

        cy.get(nameForm).type('TestName').should('have.value', 'TestName')
        cy.get(lastForm).type('TestLastName').should('have.value', 'TestLastName')
        cy.get(submitButton).click()
        cy.on('window:alert', (text) => {
            expect(text).to.contains('success')

        })
    }
}

export default FormPage