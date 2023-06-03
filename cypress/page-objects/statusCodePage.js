
const status200 = '#200siteAnchor'
const status305 = '#305siteAnchor'
const status404 = '#404siteAnchor'
const status500 = '#500siteAnchor'



class StatusCodePage {

    checkStatusCode200() {
        cy.get(status200).invoke('attr', 'href').then((href) => {
            cy.request(href).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq('200 OK')
        
       })
    })   
}
    checkStatusCode305() {
        cy.get(status305).invoke('attr', 'href').then((myHref) => {
            cy.request({
                url: myHref,
                followRedirect: false
        })
                .then((response) => {
                expect(response.status).to.eq(305)
                    expect(response.body).to.eq('305 Use Proxy')
            })
    })
}
    checkStatusCode404() {
        cy.get(status404).invoke('attr', 'href').then((myHref) => {
            cy.request({
                url: myHref,
                failOnStatusCode: false
        })
                .then((response) => {
                    expect(response.status).to.eq(404)
                    expect(response.body).to.eq('404 Not Found')
            })
    })

}
    checkStatusCode500() {
        cy.get(status500).invoke('attr', 'href').then((myHref) => {
            cy.request({
                url: myHref,
                failOnStatusCode: false
        })
                .then((response) => {
                    expect(response.status).to.eq(500)
                    expect(response.body).to.eq('500 Internal Server Error')
            })
    })
}
}

export default StatusCodePage;