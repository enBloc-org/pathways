import * as page from "../fixtures/URLs.json"
import * as input from "../fixtures/inputs.json"
import HomePage from "../support/page_objects/HomePage"
import SearchPage from "../support/page_objects/SearchPage"
import AboutPage from "../support/page_objects/AboutPage"
import DetailsPage from "../support/page_objects/DetailsPage"

describe("Navigation feature", () => {
  it("allows the user to visit '/about' page", () => {
    cy.visit(page.home)
    HomePage.linkToAbout().click()
    cy.url().should("include", "/about")
    AboutPage.stockPhoto()
    AboutPage.textCopy()
  })

  it("allows the user to find details about any given occupation", () => {
    cy.visit(page.search)
    SearchPage.searchBar().type(input.searchSingle)
    SearchPage.searchButton().click()
    SearchPage.occupationCard()
      .contains(/software/i)
      .click()
    cy.url().should("contain", "/occupation-details")
    DetailsPage.occupationTitle().contains(
      /software development technician/i
    )
    DetailsPage.occupationOverview().contains(/software development/i)
    DetailsPage.tLevelCard().contains(/digital production/i)
  })
})
