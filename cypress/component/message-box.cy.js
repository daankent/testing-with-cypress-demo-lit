import "../../src/view/components/message-box";

import { html } from "lit";

describe("Message box component tests", () => {
  it("Axe test Success message", () => {
    cy.mount(html`<message-box data-cy="test-message-box" type="success"></message-box>`);
    cy.injectAxe();
    cy.checkComponentA11yWithUi();
  });

  it("Axe test Error message", () => {
    cy.mount(html`<message-box data-cy="test-message-box" type="Error"></message-box>`);
    cy.injectAxe();
    cy.checkComponentA11yWithUi();
  });

  it("Background is green when type is succes", () => {
    cy.mount(html`<message-box data-cy="test-message-box" type="success"></message-box>`);
    cy.getDataCy("test-message-box")
      .find("section")
      .should("have.css", "background-color", "rgba(0, 255, 0, 0.125)");
  });

  it("Background is red when type is error", () => {
    cy.mount(html`<message-box data-cy="test-message-box" type="error"></message-box>`);
    cy.getDataCy("test-message-box")
      .find("section")
      .should("have.css", "background-color", "rgba(255, 0, 0, 0.19)");
  });

  it("Error: When no message is passed the default 'Empty Message' is shown", () => {
    cy.mount(html`<message-box data-cy="test-message-box" type="error"></message-box>`);
    cy.getDataCy("test-message-box").find("section").should("contain", "Empty Message");
  });

  it("Succes: When no message is passed the default 'Empty Message' is shown", () => {
    cy.mount(html`<message-box data-cy="test-message-box" type="success"></message-box>`);
    cy.getDataCy("test-message-box").find("section").should("contain", "Empty Message");
  });

  it("Error: When a message is passed in the slot it should be displayed", () => {
    cy.mount(
      html`<message-box data-cy="test-message-box" type="error"
        >This is a error test message</message-box
      >`
    );
    cy.getDataCy("test-message-box").should("contain", "This is a error test message");
  });

  it("Success: When a message is passed in the slot it should be displayed", () => {
    cy.mount(
      html`<message-box data-cy="test-message-box" type="success"
        >This is a success test message</message-box
      >`
    );
    cy.getDataCy("test-message-box").should("contain", "This is a success test message");
  });
});
