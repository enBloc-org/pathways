import PageLayout from "./PageLayout"

class DetailsPage extends PageLayout {
  occupationTitle() {
    return cy.get(".occupation-header h1").should("be.visible")
  }

  occupationOverview() {
    return cy.get(".occupation-page__banner p").should("be.visible")
  }

  tLevelCard() {
    return cy.get(".t-level-card p").should("be.visible")
  }
}

export default new DetailsPage()
