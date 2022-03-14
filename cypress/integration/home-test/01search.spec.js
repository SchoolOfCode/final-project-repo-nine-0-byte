describe("Search bar", () => {
  // it("should visit the page", () => {
  //   cy.visit("http://localhost:5000/");
  // });

  it("should focus on the input on load", () => {
    cy.focused().should("have.class", "ant-input");
  });

  it("should open the filter", () => {
    cy.get(".ant-input-prefix").click();
  });

  it("should slide to Free", () => {
    cy.get(".ant-slider-handle").as("range").invoke("val", 0).trigger("change");
  });

  it("should check the availability checkbox", () => {
    cy.get("[type='checkbox']").check();
  });

  it("should accept input", () => {
    const city = "Manchester";
    cy.get(".ant-input").type(city).should("have.value", city);
  });

  it("should go to a new location", () => {
    cy.get(".ant-input").type("Manchester{enter}");
  });

  it("should close the filter", () => {
    cy.get("[aria-label='close-filter-button']").click();
  });
});
