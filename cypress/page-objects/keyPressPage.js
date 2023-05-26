
const inputTarget = 'input[id="target"]'
const keyResult = 'p[id="keyPressResult"]'

class KeyPressPage {

    checkKeyPressResult() {
        cy.get(inputTarget).type('p')
        cy.get(keyResult).should('contains', 'p')
    }
}

export default KeyPressPage