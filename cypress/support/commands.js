import { printAccessibilityViolations } from "./axe";

Cypress.Commands.add("checkA11yWithUi", (context, options) => {
  cy.checkA11y(context, options, printAccessibilityViolations);
});

Cypress.Commands.add("checkComponentA11yWithUi", (context, options) => {
  cy.checkA11y(
    context,
    {
      runOnly: {
        type: "tag",
        values: ["wcag2aa"],
      },
      rules: {
        "html-has-lang": { enabled: false },
      },
    },
    printAccessibilityViolations
  );
});

Cypress.Commands.add("getDataCy", (dataCy) => {
  cy.get(`[data-cy="${dataCy}"]`);
});

Cypress.Commands.add("goWithAxe", (href) => {
  cy.visit(href);
  cy.injectAxe();
});
