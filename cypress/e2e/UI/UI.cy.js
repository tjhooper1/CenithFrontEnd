/// <reference types="cypress" />

describe("Testing UI Components", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("contains some initial legend items", () => {
    const blankLegend = cy.get(".blankLegend");
    const mudLegend = cy.get(".mudLegend");
    const lavaLegend = cy.get(".lavaLegend");
    const speederLegend = cy.get(".speederLegend");

    blankLegend.should("be.visible");
    mudLegend.should("be.visible");
    lavaLegend.should("be.visible");
    speederLegend.should("be.visible");

    cy.get(".blankLegend").contains("health - 0").should("be.visible");
    cy.get(".blankLegend").contains("moves - 1").should("be.visible");

    cy.get(".mudLegend").contains("health - 10").should("be.visible");
    cy.get(".mudLegend").contains("moves - 0").should("be.visible");

    cy.get(".lavaLegend").contains("health - 50").should("be.visible");
    cy.get(".lavaLegend").contains("moves - 10").should("be.visible");

    cy.get(".speederLegend").contains("health - 5").should("be.visible");
    cy.get(".speederLegend").contains("moves - 0").should("be.visible");
  });

  it("contains some text displaying remaining health", () => {
    cy.get(".UIContainer > :nth-child(2)").should("be.visible");
  });

  it("contains some text displaying remaining moves", () => {
    cy.get(".UIContainer > :nth-child(3)").should("be.visible");
  });

  it("contains a grid", () => {
    const grid = cy.get(".grid");
    grid.should("be.visible");
  });

  it("Easy game button should start a game with 5x5 grid", () => {
    const easyGameButton = cy.get(".green");
    easyGameButton.click();

    cy.get(".grid")
      .children()
      .should("have.length", 5)
      .each((row) => {
        cy.wrap(row).children().should("have.length", 5);
      });
  });

  it("Medium game button should start a game with 10x10 grid", () => {
    const mediumGameButton = cy.get(".orange");
    mediumGameButton.click();

    cy.get(".grid")
      .children()
      .should("have.length", 10)
      .each((row) => {
        cy.wrap(row).children().should("have.length", 10);
      });
  });

  it("Hard game button should start a game with 20x20 grid", () => {
    const hardGameButton = cy.get(".red");
    hardGameButton.click();

    cy.get(".grid")
      .children()
      .should("have.length", 20)
      .each((row) => {
        cy.wrap(row).children().should("have.length", 20);
      });
  });
});
