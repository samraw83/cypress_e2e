"use strict";
describe("First test Browser launch", function() {
    it("get title of the page", function() {
        cy.viewport('macbook-15');

        //cy.pause();

        cy.visit("http://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");

        cy.title().should(($title)=>{
            expect($title).to.equal('XYZ Bank');
        });

        cy.get('button.btn.home').contains('Home');

        cy.get('.btn-lg').first().contains('Customer Login');

        cy.get('.btn-lg').last().contains('Manager Login');

        cy.contains('Customer Login').click();

        cy.url().should('include', '/customer');

        cy.get('.form-control').select('Harry Potter')

        cy.get('.btn-default').click();

        cy.url().should('include', '/account');

        cy.get('button.btn.home').contains('Home');

        cy.get('.logout').contains('Logout');

        cy.get('strong').contains('Welcome Harry Potter !!');

        cy.get('[id=accountSelect]').contains('select', '1004');
        cy.get('[id=accountSelect]').contains('select', '1005');
        cy.get('[id=accountSelect]').contains('select', '1006');
        cy.get('option').should(($option)=>{
            expect($option).to.have.length(3);

            const values = $option.map((i, el) => {
                return Cypress.$(el).attr('label')
              })

              expect(values.get()).to.deep.eq([
                '1004',
                '1005',
                '1006'
              ])
        });

        cy.get('[ng-hide=noAccount]').contains('Account Number : 1004 , Balance : 0 , Currency : Dollar');

    });
});
