import { appUrl } from "../paths";

describe("Test the homepage flow", () => {
  it("Subscribing with new email shows success message", () => {
    // Here the existing email check is intercepted and a fixture with and empty subscriber array is given as response.
    cy.intercept("GET", "**/subscribers?email=*", { fixture: "empty-subscribers" }).as(
      "checkSubscriber"
    );

    // Go with axe is a custom command that navigates and automatically injects AXE.
    cy.goWithAxe(appUrl);

    cy.getDataCy("email-input").type(`${Date.now()}@mail.com`);

    cy.getDataCy("subscribe-button").click();

    cy.wait("@checkSubscriber");

    cy.getDataCy("newsletter-message-box").should(
      "contain",
      "Je bent ingeschreven voor de nieuwsbrief"
    );

    // A11y van de popup checken;
    cy.checkA11yWithUi();
  });

  it("Subscribing with existing email shows error message", () => {
    // Here the existing email check is intercepted and a fixture with and existing subscriber is given as response.
    cy.intercept("GET", "**/subscribers?email=*", { fixture: "existing-subscribers" }).as(
      "checkSubscriber"
    );

    cy.goWithAxe(appUrl);

    cy.getDataCy("email-input").type(`existing@mail.com`);

    cy.getDataCy("subscribe-button").click();

    cy.wait("@checkSubscriber");

    cy.getDataCy("newsletter-message-box").should(
      "contain",
      "Error: Je bent al geabboneerd op de nieuwsbrief"
    );

    // Check accessibility of the message that is displayed
    cy.checkA11yWithUi();
  });

  it("Homepage should not contain Axe error", () => {
    // Only checks the accessibility of the page on first load. So things like the message box shown after email input are not tested here.
    cy.goWithAxe(appUrl);
    cy.checkA11yWithUi();
  });

  it("Email is checked with db after submit", () => {
    // Intercept the check api request and give it a name.
    cy.intercept("GET", "**/subscribers?email=*").as("checkSubscriber");

    cy.visit(appUrl);

    cy.getDataCy("email-input").type(`existing@mail.com`);

    cy.getDataCy("subscribe-button").click();

    cy.wait("@checkSubscriber").its("request.url").should("include", "?email=existing@mail.com");
  });

  it("Post with input email is sent after submit with not already existing email", () => {
    const testMail = `${Date.now()}@mail.com`;
    cy.intercept("GET", "**/subscribers?email=*").as("checkSubscriber");

    cy.intercept("POST", "**/subscribers").as("createSubscriber");

    cy.visit(appUrl);

    cy.getDataCy("email-input").type(testMail);

    cy.getDataCy("subscribe-button").click();

    cy.wait("@checkSubscriber");
    cy.wait("@createSubscriber").then((interception) => {
      expect(interception.request.body).to.deep.equal({
        email: testMail,
      });
    });
  });

  it("Can tab from input to submit button", () => {
    cy.visit(appUrl);

    cy.getDataCy("email-input").focus();
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.getDataCy("subscribe-button").should("have.focus");
  });

  it("Homepage contains 4 product cards", () => {
    cy.visit(appUrl);

    cy.getDataCy("homepage-product-list").find("[data-cy='product-card']").should("have.length", 4);
  });

  it("Clicking all products link should redirect to /koeken", () => {
    cy.visit(appUrl);

    cy.getDataCy("all-koeken-link").click();

    cy.location("pathname").should("eq", "/koeken");
  });
});
