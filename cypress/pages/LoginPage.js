class LoginPage {


  // Seletores
  getEmailInput() {
    return cy.get('input[name="username"]');
  }

  getPasswordInput() {
    return cy.get('input[name="password"]');
  }

  getSubmitButton() {
    return cy.get('input[id="login_button"]');
  }

  // Ações
  visit() {
    cy.visit("https://www.themoviedb.org/login");
  }

  login(
    username = Cypress.env("TMDB_USER"),
    password = Cypress.env("TMDB_PASSWORD")
  ) {
    this.getEmailInput().type(username);
    this.getPasswordInput().type(password);
    this.getSubmitButton().click();
  }

  verifyDashboardLoaded() {
    cy.url({ timeout: 10000 }).should("include", "/dashboard", {
      message: "Não foi redirecionado para o dashboard após o login",
    });
  }
}

export default LoginPage;
