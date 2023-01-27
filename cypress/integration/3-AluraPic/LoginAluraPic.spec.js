describe('Teste login valido e invalido no alura pic', () =>{

    beforeEach(() =>{
        cy.visit('http://alura-fotos.herokuapp.com/#/home')
        cy.intercept('POST','http://apialurapic.herokuapp.com//user/login', {
            statusCode: 400
        }).as('stubPost')
    })


    it('Fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');
    });

    it('Fazer login de usuario invalido', () => {
        cy.login('siqueira', 'neto')
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('Invalid user name or password')
        })
    });

})