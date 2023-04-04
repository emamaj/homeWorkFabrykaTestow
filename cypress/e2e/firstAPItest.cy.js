const url = 'https://jsonplaceholder.typicode.com/posts';
const url1 = 'https://jsonplaceholder.typicode.com/posts/1/';

describe('my first REST Api scenario', () => {
    it('should test json placeholder API', function () {

        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body);
            expect(response.status).to.eq(200);
            cy.log(body);

        cy.request(
            {
                method: 'POST',
                url: url,
                body: JSON.stringify({
                    title: 'foo',
                    body: 'blablabla',
                    userId: 1
                }),
                headers: {'Content-type': 'application/json'}
            }).then((response)=>{
                const body = JSON.stringify(response.body);
                expect(response.status).to.eq(201);
                cy.log(body);
            });

        cy.request(
            {
                method: 'PUT',
                url1: url1,
                body: JSON.stringify({
                    title: 'fooupdate',
                    body: 'blablablaUpdate',
                    userId: 1
                }),
                headers: {'Content-type': 'application/json'}
            }).then((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('title', 'fooupdate');
            });

        cy.request(
            {
                method: 'DELETE',
                url1: url1,
                headers: {'Content-type': 'application/json'}
            }).then((response)=> {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.empty;
            });
        });
    });
});