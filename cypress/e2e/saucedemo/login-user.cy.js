import loginPage from "../../support/pageObject/loginPage"
const loginData = require('../../fixtures/loginData.json')

describe('Login Auth', () => {
  it('Failed Login', () => {
    cy.visit('')

    //with variable
    cy.get(loginPage.email).type(loginData["invalid-data"]["wrong-email"])
    cy.get(loginPage.pass).type(loginData["invalid-data"]["invalid-password"])
    //cy.get(loginPage.btn_login).click()
    //cy.get('.-error > div').should('be.visible')

    //with function
    loginPage.clickLogin()
    loginPage.verifyErr()
  })

  it('Success Login - Env Variable', () => {
    cy.visit('')

    cy.get('#email').type(Cypress.env('email'))
    cy.get('#pass').type(Cypress.env('pwd'))
    cy.get('#send2').click()
    cy.url.should('contain', '/inventory.html')
  })

  it.only('Success Login - Custom Command', () => {
    cy.logintest(Cypress.env('email'), Cypress.env('pwd'))

    //cy.logintest("ichi@gmail.com", "Test=1234")
  })

})