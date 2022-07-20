describe('Reservations', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'reservations'})
    cy.visit('http://localhost:3000/')
  })

    it('should see a title and a form on page load', () => {
    cy.get('.app-title').should('contain', 'Turing Cafe Reservations')
    cy.get('input[name="name"]').should('exist')
    cy.get('input[name="date"]').should('exist')
    cy.get('input[name="time"]').should('exist')
    cy.get('input[name="number"]').should('exist')
    cy.get('button').should('exist')
  })

    it('should show existing reservations when the page loads', () => {
    cy.get('.card').should('have.length', 3)
  })

    it('should show the correct reservation details', () => {
    cy.get('.card').first().contains('Christie')
    cy.get('.card').first().contains('12/29')
    cy.get('.card').first().contains('7:00')
    cy.get('.card').first().contains('12')

    cy.get('.card').last().contains('Pam')
    cy.get('.card').last().contains('1/21')
    cy.get('.card').last().contains('6:00')
    cy.get('.card').last().contains('4')
  })

    it('should be able to enter inputs into the form to update their values', () => {
    cy.get('input[name="name"]')
    .type('Nathan')
    .should('have.value', 'Nathan')
    cy.get('input[name="date"]')
    .type('7/29')
    .should('have.value', '7/29')
    cy.get('input[name="time"]')
    .type('7:00')
    .should('have.value', '7:00')
    cy.get('input[name="number"]')
    .type('4')
    .should('have.value', '4')
  })

    it('should be able to submit a new reservation using the form', () => {
    cy.get('input[name="name"]')
    .type('Nathan')
    cy.get('input[name="date"]')
    .type('7/29')
    cy.get('input[name="time"]')
    .type('7:00')
    cy.get('input[name="number"]')
    .type('4')
    cy.get('.reservation-button')
    .click()
    cy.get('.card').should('have.length', 4)
    cy.get('.card').last().contains('Nathan')
    cy.get('.card').last().contains('7/29')
    cy.get('.card').last().contains('7:00')
    cy.get('.card').last().contains('4')
  })

})
