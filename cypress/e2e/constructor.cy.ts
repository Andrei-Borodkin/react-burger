describe('service is available', function() {

  const selPuns = '[data-cy="puns"]'
  const selConstr = '[data-cy="constr"]'
  const selConstr2 = '[data-cy="constr2"]'
  const selButOrder = '[data-cy="button-order"]'


  it('test modal', function() {
    
    cy.visit('');

    cy.get(selPuns).first().click()
    cy.get('#modal')
    cy.get('[data-cy="close"]').click();
    cy.get('#modal').should('not.exist');
 
   });

  it('drag and drop && order', () => {

    cy.visit('');

    const dataTransfer = new DataTransfer();
 
    cy.get(selPuns).first().trigger('dragstart', {
      dataTransfer
    });
 
    cy.get(selConstr).trigger('drop', {
      dataTransfer
    });

    cy.get(selConstr2)

    cy.get(selPuns).last().trigger('dragstart', {
      dataTransfer
    });
 
    cy.get(selConstr2).trigger('drop', {
      dataTransfer
    });
    
    cy.get(selButOrder).click()
    cy.get(selButOrder).should('not.exist');

  });
  
}); 