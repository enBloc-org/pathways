import * as page from "../fixtures/URLs.json"
import * as input from "../fixtures/inputs.json"
import SearchPage from "../support/page_objects/SearchPage"

describe("Save search button", () => {
  it("allows user to save any search", () => {
    cy.visit(page.search)
    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()
    SearchPage.saveButton().contains(/save search/i)
    SearchPage.saveButton().click()
    cy.wait(20000)
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
    SearchPage.saveButton().click()
    SearchPage.savedSearchButton().contains(/Saved Searches/i)   
    SearchPage.searchBar().type(input.searchSingleAlt)
    SearchPage.searchButton().click()
    cy.window().then((win) => {
      win.localStorage.setItem('pathways-search',  '[{"name":"web developer filters(0)","url":"http://localhost:3000/search?query=web+developer"}]')
    }) 
    cy.wait(4000)

    SearchPage.savedSearchButton().click() 
    
    
    cy.get('.dropdown-menu').should('be.visible')

    // Look for the specific dropdown item
    cy.wait(20000)

    cy.get('.dropdown-item')
      .contains('web developer filters(0)')
      .should('exist')
      .should('be.visible')
      .click()
    
    // Check for the result after clicking
    
    // cy.contains('software development technician', { timeout: 10000 })
    //   .should('be.visible') 
    //   cy
    cy.get("div").contains(/software development technician/i).should("exist").and("be.visible")


    })
})
