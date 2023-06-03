
const iFrame = 'iframe'
const iFrameButton1 = '#simpleButton1'
const iFrameButton2 = '#simpleButton2'
const whichButtonIsClickedMessage = '#whichButtonIsClickedMessage'
const iFrameContent = () => {
    return cy.get(iFrame)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
}

class IFramePage {
    pressButtonOne() {
        iFrameContent().find(iFrameButton1).click()
        iFrameContent().find(whichButtonIsClickedMessage).should('have.text', 'Button 1 was clicked!')
    }    

    pressButtonTwo(){
        iFrameContent().find(iFrameButton2).click()
        iFrameContent().find(whichButtonIsClickedMessage).should('have.text', 'Button 2 was clicked!')
    }
}
export default IFramePage