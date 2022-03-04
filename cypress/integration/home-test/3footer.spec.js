describe("Footer", () => {
  it("should render all the elements in the footer", () => {
    

    cy.get("a").contains("About").click();
    cy.get("a").contains("Contact Us").click();
    cy.get("a").contains("Socials").click();

    cy.get('[alt="icon-face"]').should("be.visible");
    cy.get('[alt="icon-ig"]').should("be.visible");
    cy.get('[alt="icon-twit"]').should("be.visible");
    cy.get('[alt="icon-link"]').should("be.visible");
    cy.get('[alt="icon-email"]').should("be.visible");
    cy.get('[alt="icon-next"]').should("be.visible");

    cy.get("p").contains("Made with");
    cy.get("p").contains("Copyright ©️ Nine-O-Byte");
  });
});
