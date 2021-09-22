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

  it("we have h1 of our title", () => {
    cy.get("main").find("h1").first().should("have.text", "Volvo Cars App");
  });

  it("we have nav for Picking up cars", () => {
    cy.get("nav").find("button").first().should("have.text", "all");
  });
  it("Nav should have 4 buttons ", () => {
    cy.get("nav button").should("have.length", 4);
  });
});

describe("test Swiper", () => {
  it("run Cypress", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Swiper left button should be disabled", () => {
    cy.get(".swiper-button-prev").should(
      "have.class",
      "swiper-button-disabled"
    );
  });
  it("when click right button should move by one", () => {
    cy.viewport(1980, 1080);
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-wrapper").should(
      "have.css",
      "transform",
      "matrix(1, 0, 0, 1, -348.5, 0)"
    );
  });
  it("when click 3 More Time on next, Slider should reach the end, and next should be disabled", () => {
    // click 3 More time
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-button-next").should(
      "have.class",
      "swiper-button-disabled"
    );
  });
});
