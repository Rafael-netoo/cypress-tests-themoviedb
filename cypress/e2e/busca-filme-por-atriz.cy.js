describe('Navegação até a página de Wandinha (Jenna Ortega)', () => {
  it('Deve acessar o perfil da Jenna Ortega e clicar em Wandinha', () => {
    cy.visit('https://www.themoviedb.org/')
    
    //  Clica em "Pessoas" no menu superior
    cy.contains('Pessoas').click()

    //  Clica em "Pessoas Populares"
    cy.contains('Pessoas Populares').click()

    //  Faz scroll até encontrar Jenna Ortega
    function scrollAndFind() {
      cy.contains('Jenna Ortega', { timeout: 10000 })
        .should('be.visible')
        .click()
    }

    // Faz scroll múltiplas vezes até encontrar
    cy.scrollTo('bottom')
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(2000)
    scrollAndFind()

    
    cy.contains('Wandinha', { timeout: 10000 }).click()
  })
})
