// describe é como se fosse um "capítulo" do nosso teste.
// Estamos dizendo: "Vamos testar o Fluxo de CRUD de Séries".
describe('Fluxo de CRUD de Séries', () => {

  // it define um "caso de teste" específico.
  // Neste caso: "ele deve cadastrar uma nova série com sucesso".
  it('deve cadastrar uma nova série com sucesso', () => {

    // 1. Visita a página de cadastro. O robô digita a URL e vai para a página.
    cy.visit('http://localhost:3000/cadastrar');

    // 2. Preenche o formulário.
    // cy.get encontra um elemento HTML na página.
    // .type() simula a digitação de um usuário.
    cy.get('input[name="titulo"]').type('Nova Série de Teste');
    cy.get('input[name="temporadas"]').type('2');
    cy.get('input[name="lancamento"]').type('2025-01-15');
    cy.get('input[name="diretor"]').type('Diretor de Teste');
    cy.get('input[name="produtora"]').type('Produtora de Teste');
    cy.get('input[name="categoria"]').type('Teste');
    cy.get('input[name="assistidoEm"]').type('2025-08-20');

    // 3. Clica no botão de cadastrar.
    // cy.contains() encontra um elemento que contém o texto "Cadastrar".
    // .click() simula um clique.
    cy.contains('button', 'Cadastrar').click();

    // 4. Verifica se o cadastro deu certo.
    // O robô confere se a URL mudou para a página de lista.
    cy.url().should('include', '/lista');

    // O robô olha a página e verifica se o título da nova série apareceu na tela.
    cy.contains('Nova Série de Teste').should('be.visible');
  });
});