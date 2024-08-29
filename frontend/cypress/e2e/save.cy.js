import * as page from "../fixtures/URLs.json"
import * as input from "../fixtures/inputs.json"
import SearchPage from "../support/page_objects/SearchPage"

describe("Save search feature", () => {
  beforeEach(() => {
    cy.clearAllLocalStorage()
  })

  it("stops the user from saving a search without a valid query", () => {
    cy.visit(page.search)
    SearchPage.saveButton().should("be.disabled")
  })

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
describe("allows the user to view previously saved searches", () => {
  it("allows users to change the search results to something they saved", () => {
    cy.visit(page.search)

    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()
    cy.get("div")
      .contains(/software development technician/i)
      .should("exist")
      .and("be.visible")
    cy.get("div")
      .contains(/software development technician/i)
      .should("exist")
      .and("be.visible")
    SearchPage.saveButton().click()
    SearchPage.savedSearchButton()
    SearchPage.searchBar().clear().type(input.searchSingleAlt)
    SearchPage.searchButton().click()

    SearchPage.savedSearchButton().click()

    cy.get(".saved-searches__dropdown").should("be.visible")

    cy.get(".dropdown-item")
      .contains("web developer filters(0)")
      .should("exist")
      .should("be.visible")
      .click()

    cy.get("div")
      .contains(/software development technician/i)
      .should("exist")
      .and("be.visible")
  })
})
