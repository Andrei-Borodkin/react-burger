describe('service is available', function() {

  it('test modal', function() {

    cy.visit('http://localhost:3000');

    cy.get('[data-cy="puns"]').first().click()
    cy.get('#modal')
    cy.get('[data-cy="close"]').click();
    cy.get('#modal').should('not.exist');
 
   });

  it('drag and drop && order', () => {

    cy.visit('http://localhost:3000');

    const dataTransfer = new DataTransfer();
 
    cy.get('[data-cy="puns"]').first().trigger('dragstart', {
      dataTransfer
    });
 
    cy.get('[data-cy="constr"]').trigger('drop', {
      dataTransfer
    });

    cy.get('[data-cy="constr2"]')

    cy.get('[data-cy="puns"]').last().trigger('dragstart', {
      dataTransfer
    });
 
    cy.get('[data-cy="constr2"]').trigger('drop', {
      dataTransfer
    });
    
    cy.get('[data-cy="button-order"]').click()
    cy.get('[data-cy="button-order"]').should('not.exist');

  });
  


}); 