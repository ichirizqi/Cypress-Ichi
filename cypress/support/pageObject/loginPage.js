class loginPage{
    email = '#email'
    pass = '#pass'
    btn_login = '#send2'
    err = '.message-error > div'

    verifyErr(){
        cy.get(this.err).should('be.visible')
    }

    clickLogin(){
        cy.get(this.btn_login).click()
    }
}
export default new loginPage()