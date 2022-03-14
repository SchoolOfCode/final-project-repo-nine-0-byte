describe("Map", () => {
  // it("should display the map", () => {
  //   cy.visit("http://localhost:5000/");
  // });

  it("should load the map", () => {
    cy.get(".leaflet-tile-loaded").should("be.visible");
  });

  it("should load the chargers positions and be clickable", () => {
    cy.get("[alt='charger-position']")
      .should("be.visible")
      .click({ multiple: true, force: true });
  });
  
  it("should close the currently opened popup box", () => {
    cy.get(".leaflet-popup-close-button").should("be.visible").click();
  });
});
