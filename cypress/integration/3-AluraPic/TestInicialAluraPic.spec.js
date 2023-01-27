describe('Login e registro de usuario alura pic', () =>{

    beforeEach(() =>{
        cy.visit('/')
    })

    it('verificar mensagens validadas', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verificar mensagem de email invalido', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('siqueira');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
       
    })

    it('verificar mensagem de full name com menos de 2 caracteres', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('S');
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
       
    })

    it('verificar mensagem de user name com menos de 2 caracteres', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('S');
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
       
    })

    it('verificar mensagem de password com menos de 8 caracteres', () =>{
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('S');
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
       
    })

})