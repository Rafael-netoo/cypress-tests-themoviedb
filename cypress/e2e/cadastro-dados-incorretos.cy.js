describe('Cadastro com dados incorretos no TMDB', () => {
  beforeEach(() => {
    cy.visit('https://www.themoviedb.org/signup')
  })

  it('Deve exibir mensagem de erro ao usar e-mail inválido', () => {
    cy.get('#username').type('pauloteste123')
    cy.get('#email').type('email-invalido') // ❌ e-mail sem @
    cy.get('#password').type('SenhaForte123')
    cy.get('#password_confirm').type('SenhaForte123')

    cy.get('input[id="sign_up_button"]').click()

    // Verifica mensagem de erro relacionada ao e-mail
    cy.get('.k-form-error.k-invalid-msg')
      .should('contain', 'Please enter a valid email address')
  })

  it('Deve exibir erro ao usar senhas diferentes', () => {
    cy.get('#username').type('pauloteste123')
    cy.get('#email').type('teste@exemplo.com')
    cy.get('#password').type('SenhaForte123')
    cy.get('#password_confirm').type('OutraSenha123') // ❌ senhas diferentes

    cy.get('input[id="sign_up_button"]').click()

    // Verifica mensagem de erro de senha
    cy.get('.k-form-error.k-invalid-msg')
      .should('contain', 'Passwords must match')
  })

  it('Deve exibir mensagens de erro ao deixar os campos vazios', () => {
    cy.get('input[id="sign_up_button"]').click()

    cy.get('.k-form-error.k-invalid-msg')
      .should('contain', 'This field is required')
  })
})
