/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
describe('Reqres API Testing - GET List User', () => {
  it('get list user', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=2'
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})