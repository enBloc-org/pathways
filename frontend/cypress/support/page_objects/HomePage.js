import PageLayout from "./PageLayout"

class HomePage extends PageLayout {
  header() {
    return cy
      .get("h1")
      .contains(/t-level/i)
      .should("be.visible")
  }
}

export default new HomePage()
