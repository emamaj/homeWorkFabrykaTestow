
const datePickerInput = '#start'

class DatePickerPage {
    typeDatePicker() {
        cy.get(datePickerInput).type('2020-01-01').should('have.value', '2020-01-01')

    }

}

export default DatePickerPage