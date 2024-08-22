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
    SearchPage.saveButton().contains(/remove search/i)
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
    SearchPage.savedSearchButton().click()     
    cy.get("p")
    .contains(/web developer filters(0)/i)
    .should("be.visible") 
    .click()
    cy.get("div")
    .contains(/software development technician/i)
    .should("be.visible")  })
})
