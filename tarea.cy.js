describe('primera tarea de automatizacion', {testIsolation:false},() => { 
    it('verificar que ingrese a la pagina', () => { 
        cy.visit('https://automationintesting.online/')

})
    it('verificar que la información este en la pagina', () => { 
        cy.get('.col-sm-5').contains('Shady Meadows B&B').should('be.visible');
        cy.get('.col-sm-5').contains('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S').should('be.visible');
        cy.get('.col-sm-5').contains('012345678901').should('be.visible');
        cy.get('.col-sm-5').contains('fake@fakeemail.com').should('be.visible');


})
     it('Asegurarse de que haya al menos una imagen visible.', () => { 
        cy.get('img[src="/images/room2.jpg"]').should('be.visible');
        cy.get('img[src="/images/rbp-logo.jpg"]').should('be.visible');

        
})
     it('confirmar que el texto de la descripción de una parte de la página sea el esperado',() => { 
        cy.get('.col-sm-10').invoke('text','Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
       //otra opcion 
        cy.contains('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').should('be.visible')
    
})

})
