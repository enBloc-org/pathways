import * as page from "../fixtures/URLs.json"
import * as input from "../fixtures/inputs.json"
import SearchPage from "../support/page_objects/SearchPage"

beforeEach(() => {
  cy.clearAllLocalStorage()
})

describe("Save search button", () => {
  it("allows user to save any search", () => {
    cy.visit(page.search)
    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()

    SearchPage.heartIcon()
      .invoke("attr", "fill")
      .then(color => expect(color).to.match(/--grey/))
    SearchPage.saveButton().click()

    SearchPage.heartIcon()
      .invoke("attr", "fill")
      .then(color => expect(color).to.match(/--pink/))
  })
})
describe("visit saved search button", () => {
  it("allows users to change the search results to something they saved", () => {
    cy.visit(page.search)
      
    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()
    cy.get("div").contains(/software development technician/i).should("exist").and("be.visible")
    SearchPage.saveButton().click()
    SearchPage.savedSearchButton().contains(/Saved Searches/i)   
    SearchPage.searchBar().type(input.searchSingleAlt)
    SearchPage.searchButton().click()


    SearchPage.savedSearchButton().click() 
    
    
    cy.get('.dropdown-menu').should('be.visible')


    cy.get('.dropdown-item')
      .contains('web developer filters(0)')
      .should('exist')
      .should('be.visible')
      .click()
    
      // cy.wait(4000)

    cy.get("div").contains(/software development technician/i).should("exist").and("be.visible")


    })
})
