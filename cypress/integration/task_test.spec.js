/// <reference types="cypress" />
describe('Testing the functionality of mos.ru', () => {
    let profile;
    beforeEach(() => {
        cy.visit('https://www.mos.ru/');
        cy.fixture('profile').then(pr => {
            profile = pr;
        });
    });

    it('Login to the student is electronic diary', () => {
        cy.get('.Menu_menuWrapper__341hI').contains('Услуги').trigger('mouseover');
        cy.get('.popup-content').contains('Каталог услуг').click();
        cy.get('.mos-service-list').contains('Электронный дневник школьника').click();
        cy.get('.style_aside-login_action__2KJI4').click();
        cy.get('#login').type(profile.login);
        cy.get('#password').type(profile.password);
        cy.get('#bind').click();
    })
});
