/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example of cp-cypress-commands', () => {
  beforeEach(() => {
    // We are visiting the default Captivate file in the server
    // The cp-core-playground is a Captivate export that just contains a lot of things
    // we usually want to test with, such as variables or shapes.
    cy.visit('http://127.0.0.1:8081/cp-core-playground/')
  })

  it('should start playing Captivate export and change some variables', () => {

    // Once everything is loaded, this command will run Cp
    cy.startCp();

    // Check variable values
    cy.getCpVar("MyVar1").should("eq", "default");

    cy.setCpVar("MyVar1", "new value");

    // A longer way of asserting the variable, that allows you to access the variable value.
    cy.getCpVar("MyVar1").then(value => expect(value).to.eq("new value"))

  })

})
