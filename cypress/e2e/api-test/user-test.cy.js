describe('User API Testing Example', () => {
  it('Success Get List User', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    })
    .then((response) => {
      expect(response.status).to.equal(200)
    })
  })

  it('Success Create User', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body:
        {
          "name": "morpheus",
          "job": "leader"
        }
    })
    .then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body).has.property("name", "morpheus")
    })
  })
})