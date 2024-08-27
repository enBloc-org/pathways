import * as page from "../fixtures/URLs.json"
import * as input from "../fixtures/inputs.json"
import SearchPage from "../support/page_objects/SearchPage"

describe("Save search feature", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage()
  })

  it("allows user to save any search", () => {
    cy.visit(page.search)
    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()
    SearchPage.saveButton().contains(/save search/i)
    SearchPage.heartIcon()
      .invoke("attr", "fill")
      .then(color => expect(color).to.match(/--grey/))
    SearchPage.saveButton().click()
    SearchPage.heartIcon()
      .invoke("attr", "fill")
      .then(color => expect(color).to.match(/--pink/))
  })

  it("stops the user from saving a search with no query", () => {
    cy.visit(page.search)
    SearchPage.saveButton().should("be.disabled")
    SearchPage.searchBar().type(input.searchMultiple)
    SearchPage.searchButton().click()
    SearchPage.saveButton().should("not.be.disabled")
  })
})
