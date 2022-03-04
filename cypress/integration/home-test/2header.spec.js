describe("Header", () => {
  it('should render the elements in the header"', () => {
    // cy.visit("http://localhost:5000");

    cy.get("h1").contains("Short");
    cy.get("h1").contains("Circuit");
    cy.get("a").contains("User").click();

    cy.get('[alt="logo"]').should("be.visible");
  });
});
