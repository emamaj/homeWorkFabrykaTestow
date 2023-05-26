
const dropDownList = 'select'


class DropDownListPage {
    chooseDropDownListFirstOption() {
        cy.get(dropDownList).select('Option 1').should('have.value', '1')
    }
}

export default DropDownListPage;