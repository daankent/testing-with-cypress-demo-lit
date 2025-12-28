import "../../src/view/components/product-list";

import { html } from "lit";

describe("Check Type", () => {
  it("Axe test product list", () => {
    cy.mount(html`<product-list productAmount="2"></product-list>`);
    cy.injectAxe();
    cy.checkComponentA11yWithUi();
  });

  it("Test correct product card amount when amount is 1", () => {
    cy.mount(html`<product-list data-cy="product-list-1" productAmount="1"></product-list>`);
    cy.getDataCy("product-list-1").find("[data-cy='product-card']").should("have.length", 1);
  });

  it("Test correct product card amount when amount is 2", () => {
    cy.mount(html`<product-list data-cy="product-list-2" productAmount="2"></product-list>`);
    cy.getDataCy("product-list-2").find("[data-cy='product-card']").should("have.length", 2);
  });

  it("Test correct product card amount when amount is 10", () => {
    cy.mount(html`<product-list data-cy="product-list-10" productAmount="10"></product-list>`);
    cy.getDataCy("product-list-10").find("[data-cy='product-card']").should("have.length", 10);
  });

  it("Test correct product card amount when amount is 0", () => {
    cy.mount(html`<product-list data-cy="product-list-0" productAmount="0"></product-list>`);
    cy.getDataCy("product-list-0").find("[data-cy='product-card']").should("have.length", 0);
  });
});
