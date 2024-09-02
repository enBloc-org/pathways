import * as page from "../fixtures/URLs.json"
import * as input from "../fixtures/inputs.json"
import HomePage from "../support/page_objects/HomePage"
import SearchPage from "../support/page_objects/SearchPage"

describe("Search feature", () => {
  it("communicates to the user when there are no matches", () => {
    cy.visit(page.home)
    HomePage.searchBar().type("scaffolder")
    HomePage.searchButton().click()
    cy.get("p")
      .contains(/there are no occupations/i)
      .should("be.visible")
    SearchPage.resultsLabel().contains(0)
  })

  it("prompts the user for input if there is no query available", () => {
    cy.visit(page.home)
    HomePage.searchButton().click()
    cy.get("p")
      .contains(/enter search terms/i)
      .should("be.visible")
  })

  it("allows user to get results for a single job title searched", () => {
    cy.visit(page.home)
    HomePage.searchBar().type(input.searchSingle)
    HomePage.searchButton().click()
    cy.get("div")
      .contains(/software development technician/i)
      .should("be.visible")
    SearchPage.resultsLabel().contains(2)
  })

  it("allows the user to search multiple job titles at once", () => {
    cy.visit(page.home)
    HomePage.searchBar().type(input.searchMultiple)
    HomePage.searchButton().click()
    cy.get("div")
      .contains(/software development technician/i)
      .should("be.visible")
    cy.get("div")
      .contains(/teaching assistant/i)
      .should("be.visible")
    SearchPage.resultsLabel().contains(/teacher and web developer/i).contains(3)
  })
})
