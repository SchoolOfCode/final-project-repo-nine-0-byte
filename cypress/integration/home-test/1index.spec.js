describe("Home", () => {
  it("should navigate to the home page", () => {
   

    cy.get('[alt="loading-circle"]').should("be.visible");

    cy.get("h1").contains("Loading...");
  });
});