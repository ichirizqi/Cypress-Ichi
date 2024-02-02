describe('Login Auth', () => {
  it('Failed Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')

    cy.get('#email').type('ichi@carepedia.co')
    cy.get('#pass').type('test1234')
    cy.get('#send2').click()
    cy.get('.message-error > div').should('be.visible')
  })

  it.skip('Success Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')

    cy.get('#email').type('ichi@gmail.com')
    cy.get('#pass').type('Test=1234')
    cy.get('#send2').click()
  })
})