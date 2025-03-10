describe('template spec', () => {

  beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.my_command("beforeEach","Monday");
  });

  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.my_command("TC passes","Monday");
  });
})