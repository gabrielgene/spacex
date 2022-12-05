describe('spacex app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://spacex-gabrielgene.vercel.app/');
  });

  it('should displays 8 launches', () => {
    cy.get('[data-cy=launch-card]').should('have.length', 9);
    cy.get('[data-cy=page-count]').should('have.text', '0');
  });

  it('should search for thaicom', () => {
    cy.visit('http://localhost:3000?page=3');
    cy.get('[data-cy=search]').type('thaicom');
    cy.get('[data-cy=launch-card]').should('have.length', 2);
    cy.get('[data-cy=page-count]').should('have.text', '0');
  });

  it('should handle url params', () => {
    cy.visit('http://localhost:3000?name=a&page=1');
    cy.get('[data-cy=launch-card]').should('have.length', 9);
    cy.get('[data-cy=page-count]').should('have.text', '1');
    cy.get('[data-cy=search]').should('have.value', 'a');
  });

  it('should navigate to the next and previous page', () => {
    cy.visit('http://localhost:3000?page=3');
    cy.get('[data-cy=page-count]').should('have.text', '3');
    cy.get('[data-cy=nav-back]').click();
    cy.get('[data-cy=page-count]').should('have.text', '2');
    cy.get('[data-cy=nav-forward]').click();
    cy.get('[data-cy=page-count]').should('have.text', '3');
  });

  it('should display empty screen', () => {
    cy.get('[data-cy=empty-screen]').should('not.exist');
    cy.get('[data-cy=search]').type('zzzzzzzzzzzzzzz');
    cy.get('[data-cy=page-count]').should('have.text', '0');
    cy.get('[data-cy=empty-screen]').should('be.visible');
  });
});
