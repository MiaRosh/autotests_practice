
describe('Cat sites', () => {
  it('should find information about cats, after type cat in the search', () => {
    cy.visit('https://www.google.com');

    cy.get('textarea.gLFyf').type('cats')
    .type('{enter}');

    cy.wait(2000); //Instead of using cy.wait(2000), consider using Cypress commands that wait for specific conditions to be met. For example, you can use cy.contains to wait for an element with specific text to appear on the page.
    //cy.get('textarea.gLFyf').type('cats').type('{enter}');
    //cy.contains('#result-stats', /\d+/).should('exist');

    cy.get('#result-stats').contains('Приблизна кількість результатів')
  })
})
