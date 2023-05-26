import Urls from "./urls";

const inputsHeader = '#inputs-header'
const checkboxesTab = '#checkbox-header'
const hoversTab = '#hovers-header'
const dropdownListTab = '#dropdownlist-header'
const datePickerTab = '#datepicker-header'
const basicAuthTab = '#basicauth-header'
const formTab = '#form-header'
const keyPressPage = '#keypresses-header' 
const dragAndDropPage = '#draganddrop-header'
const addRemoveElementHeader = '#addremoveelements-header'

class HomePage{
    clickInputTab() {
        cy.get(inputsHeader).click()
    }

    clickCheckboxesTab() { 
        cy.get(checkboxesTab).click()
    }

    clickHoverTab() {
        cy.get(hoversTab).click()
    }

    clickDropdownListTab() {
        cy.get(dropdownListTab).click()
    }

    visitPage() {
        const url = new Urls()
        url.visitHomePage()
    }

    clickDatePickerPage() {
        cy.get(datePickerTab).click()
    }

    clickBasicAuth() {
        cy.get(basicAuthTab).click()
    }

    clickFormHeader() {
        cy.get(formTab).click()
    }

    clickKeyPressForm() {
        cy.get(keyPressPage).click()
    }

    clickdragAndDropForm() {
        cy.get(dragAndDropPage).click()
    }

    clickAddRemoveElementHeader() {
        cy.get(addRemoveElementHeader).click()
    }

}

export default HomePage