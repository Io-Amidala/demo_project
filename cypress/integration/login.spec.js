/// <reference types="cypress" />
describe('Testing the functionality of mos.ru', () => {
    let profile;
    beforeEach(() => {
        cy.visit('https://www.mos.ru/');
        cy.fixture('profile').then(pr => {
            profile = pr;
        });
    });

    it('Login', () => {
        cy.get('.Caption_utilitiesDesktop__3PVSP').contains('Личный кабинет').click();
        cy.get('#login').type(profile.login);
        cy.get('#password').type(profile.password);
        cy.get('#bind').click();
    })
});
