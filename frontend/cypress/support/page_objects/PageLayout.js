export default class PageLayout {
  searchBar() {
    return cy.get('input[name="search-query"]').should("be.visible")
  }
  searchButton() {
    return cy.get("button").should("be.visible")
  }
}
