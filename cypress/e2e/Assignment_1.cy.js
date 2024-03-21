describe('Combined Test', () => {
  it('Performs Selectable Test and Validates Highlighted and Non-Highlighted List Items', () => {
    // Visit the webpage
    cy.visit('https://demoqa.com/selectable');

    // Click on the "Grid" link
    cy.get('a#demo-tab-grid').click();

    // Simulate selecting and validating "Two"
    cy.contains('li.list-group-item', 'Two')
      .click()
      .should('have.class', 'list-group-item-action')
      .should('have.class', 'active');

    // Simulate selecting and validating "Four"
    cy.contains('li.list-group-item', 'Four')
      .click()
      .should('have.class', 'list-group-item-action')
      .should('have.class', 'active');

    // Simulate selecting and validating "Six"
    cy.contains('li.list-group-item', 'Six')
      .click()
      .should('have.class', 'list-group-item-action')
      .should('have.class', 'active');

    // Simulate selecting and validating "Eight"
    cy.contains('li.list-group-item', 'Eight')
      .click()
      .should('have.class', 'list-group-item-action')
      .should('have.class', 'active');

    // Validate "One" is not highlighted
    cy.contains('li.list-group-item', 'One').should('not.have.class', 'active');

    // Validate "Three" is not highlighted
    cy.contains('li.list-group-item', 'Three').should('not.have.class', 'active');

    // Validate "Five" is not highlighted
    cy.contains('li.list-group-item', 'Five').should('not.have.class', 'active');

    // Validate "Seven" is not highlighted
    cy.contains('li.list-group-item', 'Seven').should('not.have.class', 'active');

    // Validate "Nine" is not highlighted
    cy.contains('li.list-group-item', 'Nine').should('not.have.class', 'active');
  });
});
