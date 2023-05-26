
const userNameInput = '#ba_username';
const passwordInput = '#ba_password';
const loginButton = 'button[onclick="onLoginSubmit()"]';
const errorMessage = '#loginFormMessage';
const positiveLogin = '#loggedInMessage';
const returnButton = '#retrun button'

class BasicAuthPage {
    
    emptyInputAuth() {
        cy.get(loginButton).click()
        cy.get(errorMessage).should('be.visible')
    }

    emptyPasswordInput() {
        cy.get(userNameInput).type('admin').should('have.value', 'admin')
        cy.get(loginButton).click()
        cy.get(errorMessage).should('be.visible')
    }

    negativeLoginAuth() {
        cy.get(userNameInput).clear()
        cy.get(userNameInput).type('admin').should('have.value', 'admin')
        cy.get(passwordInput).type('123').should('have.value', '123')
        cy.get(errorMessage). should('be.visible')
    }

    positiveLoginAuth() {
        cy.get(userNameInput).clear()
        cy.get(passwordInput).clear()
        cy.get(userNameInput).type('admin').should('have.value', 'admin')
        cy.get(passwordInput).type('admin').should('have.value', 'admin')
        cy.get(loginButton).click()
        cy.get(positiveLogin).should('be.visible')
    }

    returnToHomePage() {
        cy.contains('Return to main page').click()
        cy.url().should('eq', 'https://simpletestsite.fabrykatestow.pl/index.html')
    }
}

export default BasicAuthPage