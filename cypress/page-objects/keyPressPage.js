
const inputTarget = '#target'
const keyResult = '#keyPressResult'

class KeyPressPage {

    checkKeyPressResult() {
        cy.get(inputTarget).type('p')
        cy.get(keyResult).should('have.text', 'You entered: P')
    }
}

export default KeyPressPage