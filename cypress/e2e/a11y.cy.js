const pages = ["/", "/koeken"];
const sizes = ["iphone-6", "ipad-2", [1024, 768], "macbook-13", "samsung-s10"];

describe("Axe Test all pages", () => {
  pages.forEach((page) => {
    sizes.forEach((size) => {
      it(`Should be accesible on ${size} screen`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }

        cy.visit("http://localhost:5173" + page);
        cy.injectAxe();
        cy.checkA11yWithUi();
      });
    });
  });
});
