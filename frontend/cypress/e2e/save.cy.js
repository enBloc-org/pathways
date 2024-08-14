import * as page from "../fixtures/URLs.json"
import * as input from "../fixtures/inputs.json"
import SearchPage from "../support/page_objects/SearchPage"

describe("Save search feature", () => {
  before(() => {
    cy.clearLocalStorage()
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.visit(page.search)
    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()
  })

  afterEach(() => {
    cy.saveLocalStorage()
  })

  it("allows user to save any search", () => {
    SearchPage.saveButton().contains(/save search/i)
    SearchPage.saveButton().click()
    SearchPage.saveButton().contains(/remove search/i)
    SearchPage.heartIcon()
      .invoke("attr", "fill")
      .then(color => expect(color).to.match(/#ff0000/))
  })

  it("remembers a search that was previously saved", () => {
    SearchPage.heartIcon()
      .invoke("attr", "fill")
      .then(color => expect(color).to.match(/#ff0000/))
    SearchPage.searchBar().clear().type(input.searchMultiple)
    SearchPage.searchButton().click()
  })
})
