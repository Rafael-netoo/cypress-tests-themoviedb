import LoginPage from "../pages/LoginPage";

describe('Busca por titulos', () => {
  
 const testData = {
    parcialName : "Incept",
  }

  const loginPage = new LoginPage();
  
  beforeEach(() => {
    loginPage.visit();
    loginPage.login();
   // loginPage.verifyDashboardLoaded();

  });

  it('Deve encontrar um tutor com CPF existente', () => {

    cy.visit("https://www.themoviedb.org/");

    // 1. Preenche o campo de busca
   cy.get('input[id="inner_search_v4"]')
  .type(testData.parcialName);

    // 2. Clica no botão de buscar
   cy.get('input[value="Buscar"]').click();

    // 3. Valida que a tabela/listagem exibe o tutor
    cy.get('div.results.flex').should('be.visible').and('contain',testData.parcialName);

  });

  });
  