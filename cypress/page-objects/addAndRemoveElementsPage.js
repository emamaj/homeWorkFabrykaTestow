
const addElementButton = 'button[onclick="addElement()"]'
const removeElementButton = 'button[class="added-manually"]'

class AddAndRemoveElements {

    clickAddElementButton() {
        cy.get(addElementButton).click()
        cy.get(removeElementButton).should("be.visible")
    }

    clickRemoveElementButton() {
        cy.get(removeElementButton).click()
        cy.get(removeElementButton).should("not.exist")
    }
}

export default AddAndRemoveElements