import * as page from "../fixtures/URLs.json"
import * as input from "../fixtures/inputs.json"
import SearchPage from "../support/page_objects/SearchPage"

describe("Save search button", () => {
  it("allows user to save any search", () => {
    cy.visit(page.search)
    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()
    SearchPage.saveButton().contains(/save search/i)
    cy.wait(4000)

    SearchPage.saveButton().click()
    cy.wait(4000)

    SearchPage.saveButton().contains(/remove search/i).should('exist').and("be.visible")
    SearchPage.heartIcon()
      .invoke("attr", "fill")
      .then(color => expect(color).to.match(/#ff0000/))
  })
})
describe("visit saved search button", () => {
  it("allows users to change the search results to something they saved", () => {
    cy.visit(page.search)
      
    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()
    cy.wait(4000)
    SearchPage.saveButton().click()
    SearchPage.savedSearchButton().contains(/Saved Searches/i)   
    SearchPage.searchBar().type(input.searchSingleAlt)
    SearchPage.searchButton().click()
    // cy.window().then((win) => {
    //   win.localStorage.setItem('pathways-search',  '[{"name":"web developer filters(0)","url":"http://localhost:3000/search?query=web+developer"}]')
    // }) 

    SearchPage.savedSearchButton().click() 
    
    
    cy.get('.dropdown-menu').should('be.visible')

    // Look for the specific dropdown item
    cy.wait(20000)

    cy.get('.dropdown-item')
      .contains('web developer filters(0)')
      .should('exist')
      .should('be.visible')
      .click()
    
      cy.wait(4000)

    cy.get("div").contains(/software development technician/i).should("exist").and("be.visible")


    })
})
