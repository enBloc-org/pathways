import PageLayout from "./PageLayout"

class SearchPage extends PageLayout {
  saveButton() {
    return cy
      .get('button[class="search-page--options-button"]')
      .contains(/save search/i)
      .should("be.visible")
  }
  savedSearchButton() {
    return cy
      .get('.saved-searches-header')
      .contains('p', /Saved Searches/i)
      .should("be.visible");
  }
  heartIcon() {
    return cy.get('svg[alt="heart icon"]').should("be.visible")
  }

  occupationCard() {
    return cy
      .get("button[class='occupation-card']")
      .first()
      .should("be.visible")
  }

  resultsLabel() {
    return cy
      .get("p")
      .contains(/matched results/gi)
      .should("be.visible")
  }
}

export default new SearchPage()
