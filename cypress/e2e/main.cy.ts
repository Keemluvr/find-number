
describe('Home Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Search number', () => {
    it('should allow inputting numbers', () => {
      cy.get('[data-test-id="search-input"]').type('5').should('have.value', '5');
    });
    
    it('should find the number and highlight it when searching', () => {
      cy.get('[data-test-id="search-input"]').type('5');
      cy.get('[data-test-id="search-button"]').click();
      cy.get('[data-test-id="result-card"]').should('have.class', 'bg-green-400').should('contain', '5');
    });
    
    it('should show a different color if the number is not found', () => {
      cy.get('[data-test-id="search-input"]').type('8');
      cy.get('[data-test-id="search-button"]').click();
      cy.get('[data-test-id="result-card"]').should('have.class', 'bg-red-400').should('contain', '-1');
    });
  })
});