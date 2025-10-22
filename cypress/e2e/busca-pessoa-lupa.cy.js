describe('Busca sequencial de artistas no TMDB', () => {
  const artistas = [
    'Keanu Reeves',
    'Jenna Ortega',
    'Elizabeth Olsen',
    'Henry Cavill',
    'Scarlett Johansson'
  ]

  it('Deve pesquisar e navegar por vários artistas', () => {
    
    cy.visit('https://www.themoviedb.org/')

   
    cy.get('#inner_search_form input[name="query"]', { timeout: 10000 })
      .should('be.visible')
      .type(`${artistas[0]}{enter}`)

    cy.contains(/Pessoas|People/i, { timeout: 10000 }).click()
    cy.contains(artistas[0], { timeout: 10000 }).should('be.visible').click()

    artistas.slice(1).forEach((artista) => {
      cy.log(`🔍 Buscando ${artista}`)

      cy.get('a.search', { timeout: 10000 })
        .should('be.visible')
        .click()

      cy.get('#search_form input[name="query"]', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(`${artista}{enter}`)

      cy.contains(/Pessoas|People/i, { timeout: 10000 }).click()
      cy.contains(artista, { timeout: 10000 }).should('be.visible').click()

      cy.get('h2.title, h1.title, .title', { timeout: 10000 })
        .should('contain.text', artista)

      cy.wait(2000)
    })
    cy.log('✅ Todas as buscas foram concluídas com sucesso!')
  })
})
