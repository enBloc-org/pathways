import * as page from "../fixtures/URLs.json"
import HomePage from "../support/page_objects/HomePage"
import SearchPage from "../support/page_objects/SearchPage"

describe("Search feature", () => {
  it("communicates to the user when there are no matches", () => {
    cy.visit(page.home)
    HomePage.searchBar().type("scaffolder")
    HomePage.searchButton().click()
    cy.url().should("include", "/search")
    cy.get("p[name='no-results']")
      .contains(/there are no occupations/i)
      .should("be.visible")
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
    HomePage.searchBar().type("web developer")
    HomePage.searchButton().click()
    cy.url().should("include", "/search")
    cy.get("div[class='occupation-card']")
      .contains(/software development technician/i)
      .should("be.visible")
  })

  it("allows the user to search multiple job titles at once", () => {
    cy.visit(page.home)
    HomePage.searchBar().type("teacher, developer")
    HomePage.searchButton().click()
    SearchPage.occupationCard().contains(
      /software development technician/i
    )
    SearchPage.occupationCard().contains(/teaching assistant/i)
  })
})
