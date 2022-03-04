describe("App", () => {
  it("should navigate to the home page", () => {
    // Start from the index page
    cy.visit("http://localhost:5000/");
  });
});
