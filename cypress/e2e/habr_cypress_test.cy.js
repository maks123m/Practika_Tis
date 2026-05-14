describe('Cypress Tests', ()=>{
    it('None-existent login test', ()=> {
        cy.fixture('cypressTests').then(data => {
            cy.visit(data.main_url);

            cy.get('body').should('be.visible');
        })
    })
})