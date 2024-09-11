export default class PageLayout {
  searchBar() {
    return cy.get('input[name="search-query"]').should("be.visible")
  }
  searchButton() {
    return cy.get("button[class='text-search__button']").should("be.visible")
  }

  linkToAbout() {
    return cy
      .get('[href="/about"]')
      .contains(/about/i)
      .should("be.visible")
  }

  linkToSearch() {
    return cy
      .get('[href="/search"]')
      .contains(/search/i)
      .should("be.visible")
  }
}
