import loginPage from "../../support/pageObject/loginPage"

describe('Login Auth', () => {
  it('Failed Login', () => {
    cy.visit('')

    //with variable
    cy.get(loginPage.email).type('ichi@carepedia.co')
    cy.get(loginPage.pass).type('test1234')
    //cy.get(loginPage.btn_login).click()
    //cy.get('.-error > div').should('be.visible')

    //with function
    loginPage.clickLogin()
    loginPage.verifyErr()
  })

  it.skip('Success Login', () => {
    cy.visit('')

    cy.get('#email').type('ichi@gmail.com')
    cy.get('#pass').type('Test=1234')
    cy.get('#send2').click()
  })
})