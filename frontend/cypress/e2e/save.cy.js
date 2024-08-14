import * as page from "../fixtures/URLs.json"
import SearchPage from "../support/page_objects/SearchPage"

describe("Save search feature", () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit(page.search)
    SearchPage.searchBar().type("web developer")
    SearchPage.searchButton().click()
  })

  it("allows user to save any search", () => {
    SearchPage.saveButton().click()
    SearchPage.saveButton().contains(/remove search/i)
    SearchPage.heartIcon()
      .invoke("attr", "fill")
      .then(colour => expect(colour).to.match(/#ff0000/))
  })
})
