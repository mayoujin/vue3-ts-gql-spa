// https://docs.cypress.io/api/introduction/api.html

const getSelector = (id) => {
  return `[data-test="${id}"]`
}

describe('App Health Metrics', () => {
  it('Check App Layout has required sections', () => {
    cy.visit('/')
    cy.get(getSelector('AppHeaderMenu'))
    cy.get(getSelector('PageHeader'))
  })

  it('Check root route is Home Page', () => {
    cy.get(getSelector('HomePage'))
  })

  it('Check active Menu Item has route to Home Page', () => {
    cy.get(getSelector('AppHeaderMenu'))
      .get('[aria-current="page"]')
      .should('have.attr', 'href', '/home')
  })
})
