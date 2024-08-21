import PageLayout from "./PageLayout"

class SearchPage extends PageLayout {
  saveButton() {
    return cy
      .get('button[class="save-search-button"]')
      .contains(/(remove search)|(save search)/i)
      .should("be.visible")
  }

  heartIcon() {
    return cy.get('svg[class="heart-icon"]').should("be.visible")
  }

  occupationCard() {
    return cy.get(".occupation-card > h2").should("be.visible")
  }
}

export default new SearchPage()
