describe("Login", () => {
  it("Log in user", () => {
    cy.visit("http://localhost:5175/login");
    cy.get("input[type=email]").type("test@test.com");
    cy.get("input[type=password]").type("Abcd1234");
    cy.get("button").contains("Login").click();
  });
});
