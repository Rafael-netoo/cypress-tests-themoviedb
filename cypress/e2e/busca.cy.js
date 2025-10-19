// cypress/e2e/tmdb_search.cy.js
// Este arquivo testa AMBAS as barras de busca (Principal e Cabeçalho)

describe('Testes de Busca no TMDb', () => {

  // =====================================================================
  // SUÍTE 1: Testes da Barra de Busca Principal (a grande)
  // =====================================================================
  describe('Testes da Barra de Busca Principal (Hero)', () => {
    
    beforeEach(() => {
      // Visita a página e aceita os cookies antes de cada teste
      cy.visit('https://www.themoviedb.org/');
      cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
    });

    /**
     * Teste 1.1: Pesquisar Filme Existente
     */
    it('deve pesquisar por um filme existente', () => {
      // 1. Arrange (Preparação)
      const filmeExistente = 'Um Fantasma na Batalha';

      // 2. Act (Ação)
      // Usa o seletor da barra de busca principal
      cy.get('#search_v4').type(`${filmeExistente}{enter}`);
      
      // 3. Assert (Verificação)
      cy.url().should('include', '/search');
      cy.get('.card.v4').should('contain', filmeExistente);
    });

    /**
     * Teste 1.2: Pesquisar Filme Inexistente
     */
    it('deve exibir uma mensagem para filme inexistente', () => {
      // 1. Arrange
      const filmeInexistente = 'FilmeQueNaoExiste123456789';

      // 2. Act
      cy.get('#search_v4').type(`${filmeInexistente}{enter}`);

      // 3. Assert
      cy.contains('Não foram encontrados filmes que correspondam aos seus critérios de busca.').should('be.visible');
    });

    /**
     * Teste 1.3: Pesquisar por Gênero (como palavra-chave)
     */
    it('deve pesquisar por um gênero e encontrar a categoria', () => {
      // 1. Arrange
      const genero = 'Ação';

      // 2. Act
      cy.get('#search_v4').type(`${genero}{enter}`);

      // 3. Assert
      // Verifica se a categoria "Palavras-chave" aparece no filtro lateral
      cy.get('#search_menu_scroller').contains('Palavras-chave').should('be.visible');
    });

  }); // Fim da Suíte 1


  // =====================================================================
  // SUÍTE 2: Testes da Barra de Busca do Cabeçalho (Menu Superior)
  // =====================================================================
  describe('Testes da Barra de Busca do Cabeçalho (Header)', () => {

    beforeEach(() => {
      // Visita a página e aceita os cookies
      cy.visit('https://www.themoviedb.org/');
      cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }).click({ force: true });
      
      // Passo Adicional: Clica no ÍCONE de busca no cabeçalho para abrir o campo
      cy.get('#inner_search_v4', { timeout: 10000 }).should('be.visible').click();
    });

    /**
     * Teste 2.1: Pesquisar Filme Existente
     */
    it('deve pesquisar por um filme existente', () => {
      // 1. Arrange
      const filmeExistente = 'Um Fantasma na Batalha';

      // 2. Act
      // Usa o seletor da barra de busca do header
      cy.get('#inner_search_v4').type(`${filmeExistente}{enter}`);
      
      // 3. Assert
      cy.url().should('include', '/search');
      cy.get('.card.v4').should('contain', filmeExistente);
    });

    /**
     * Teste 2.2: Pesquisar Filme Inexistente
     */
    it('deve exibir uma mensagem para filme inexistente', () => {
      // 1. Arrange
      const filmeInexistente = 'FilmeQueNaoExiste123456789';

      // 2. Act
      cy.get('#inner_search_v4').type(`${filmeInexistente}{enter}`);

      // 3. Assert
      cy.contains('Não foram encontrados filmes que correspondam aos seus critérios de busca.').should('be.visible');
    });

    /**
     * Teste 2.3: Pesquisar por Gênero (como palavra-chave)
     */
    it('deve pesquisar por um gênero e encontrar a categoria', () => {
      // 1. Arrange
      const genero = 'Ação';

      // 2. Act
      cy.get('#inner_search_v4').type(`${genero}{enter}`);

      // 3. Assert
      cy.get('#search_menu_scroller').contains('Palavras-chave').should('be.visible');
    });

  }); // Fim da Suíte 2

});