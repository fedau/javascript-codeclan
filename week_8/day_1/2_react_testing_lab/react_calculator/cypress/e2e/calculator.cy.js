describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  })
  it('should Do the number buttons update the display of the running total?', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23');
  })
  it('should Do the arithmetical operations update the display with the result of the operation?', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9');

  })

  it('should Can multiple operations be chained together?', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '27');

  })
  it('should Is the output as expected for a range of numbers (for example, positive, negative, ', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3');
  })

  it('should add 10.2 multiply 2 and get 20.4', ()=>{
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20.4');

  })

  it('should return ERROR in exceptional cases', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'ERROR');







  })

})