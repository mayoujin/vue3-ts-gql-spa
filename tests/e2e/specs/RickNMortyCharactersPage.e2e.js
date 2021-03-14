const tid = (id) => {
  return `[data-test="${id}"]`
}

const CHARACTERS_ROUT_PATH = '/rick-and-morty'

describe('Rick and Morty Characters Page', () => {
  it('Check module has Menu Item', () => {
    cy.visit('/')
    cy.get(tid('AppHeaderMenu')).get(
      `[role="menuitem"] a[href="${CHARACTERS_ROUT_PATH}"]`,
    )
  })

  it('Check route is accessible through Menu Navigation', () => {
    cy.get(tid('AppHeaderMenu'))
      .get(`[role="menuitem"] a[href="${CHARACTERS_ROUT_PATH}"]`)
      .click()
    cy.get(tid('CharactersListPage'))
  })

  it('Check Characters section have loaded characters', () => {
    cy.get(`${tid('CharactersSection')} ${tid('CharacterListItem')}`).should(
      'have.length',
      20,
    )
  })

  it('Check Character could be added to Heroes Section', () => {
    cy.get(
      `${tid('CharactersSection')} ${tid('CharacterListItem')}:first-child`,
    )
      .as('characterItemToAdd')
      .within(() => {
        cy.get(tid('AddButton')).click()
      })

    cy.get(
      `${tid('HeroesSection')} ${tid('CharacterListItem')}:last-child`,
    ).then(($heroItemAdded) => {
      const heroItemAddedId = $heroItemAdded.data('character-id').toString()

      cy.get('@characterItemToAdd')
        .invoke('attr', 'data-character-id')
        .should('eq', heroItemAddedId)
    })
  })

  it('Check Hero should be removed from Heroes Section', () => {
    cy.get(
      `${tid('HeroesSection')} ${tid('CharacterListItem')}:last-child`,
    ).within(() => {
      cy.get(tid('RemoveButton')).click()
    })

    cy.get(`${tid('HeroesSection')} ${tid('CharacterListItem')}`).should(
      'have.length',
      0,
    )
  })
})
