describe('Google Search', () => {
  it('performs a successful search and validates the results', () => {
    cy.visit('https://www.google.com');
    cy.get('textarea[name="q"]').type('Blossom company {enter}');
    cy.get('#result-stats').should('be.visible');
    cy.contains('About').should('be.visible');
  });
});