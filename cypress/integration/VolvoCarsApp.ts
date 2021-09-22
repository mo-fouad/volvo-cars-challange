import * as cypress from "cypress";

describe("Cypress is Working", () => {
  it("run Cypress", () => {
    expect(true).to.equal(true);
  });
});

describe("the App is Working", () => {
  it("run Cypress", () => {
    cy.visit("http://localhost:3000/");
  });
});

describe("App has title", () => {
  it("we have h1 of our title", () => {
    cy.get("main").find("h1").first().should("have.text", "Volvo Cars App");
  });
});

describe("should have nav with all 4 elements", () => {
  it("we have nav with all 4 elements", () => {
    cy.get("nav").find("button").first().should("have.text", "all");
  });
});
