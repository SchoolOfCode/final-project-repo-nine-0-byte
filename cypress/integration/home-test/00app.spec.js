describe("App", () => {
  it("should navigate to the home page", () => {
    // Start from the index page
    cy.visit("http://localhost:5000/");
  });

  it("should show the loader", () => {
    cy.get('[alt="loading-circle"]').should("be.visible");

    cy.get("h1").contains("Loading...");
  });
});
