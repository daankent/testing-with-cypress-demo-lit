// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("getDataCy", (dataCy) => {
  cy.get(`[data-cy="${dataCy}"]`);
});

Cypress.Commands.add("goWithAxe", (href) => {
  cy.visit(href);
  cy.injectAxe();
});
