describe('Teste registrar alura pic', () =>{

    beforeEach(() =>{
        cy.visit('http://alura-fotos.herokuapp.com/#/home')
    })


    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario =>{

        it('Realizar o registro com sucesso ' + usuario.fullName, () => {
            cy.contains('a', 'Register now').click();
            cy.registrar(usuario.email, usuario.fullName, usuario.userName, usuario.password);
        });
    });
    

    

})