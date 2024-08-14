import PageLayout from "./PageLayout"

class AboutPage extends PageLayout {
  header() {
    return cy
      .get("h1")
      .contains(/about page/i)
      .should("be.visible")
  }
}

export default new AboutPage()
