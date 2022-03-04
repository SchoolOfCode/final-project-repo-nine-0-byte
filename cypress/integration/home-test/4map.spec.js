describe("Map", () => {
  it("should display the map", () => {
    cy.visit("http://localhost:5000/");
  });

  it("should load the map", () => {
    cy.get(".leaflet-tile-loaded").should("be.visible");
  });

  it("should load the user position and be clickable", () => {
    cy.get("[alt='user-position']").should("be.visible").click();
  });

  it("should load the chargers positions an be clickable", () => {
    cy.get("[alt='charger-position']")
      .should("be.visible")
      .click({ multiple: true, force: true});
  });
});
