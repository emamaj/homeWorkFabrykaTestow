
const status200 = '#200siteAnchor'

class StatusCodePage {

    checkStatusCode200() {
        cy.get(status200).invoke('attr', 'href').then((myHref) => {
            cy.request(myHref).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq('200 OK')
        
       })
    })   
}

    checkStatusCode305() {
        
    }

}