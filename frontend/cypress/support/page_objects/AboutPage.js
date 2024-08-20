import PageLayout from "./PageLayout"

class AboutPage extends PageLayout {
  stockPhoto() {
    return cy
      .get("main")
      .find("img")
      .should("be.visible")
      .and("have.prop", "src")
  }

  textCopy() {
    return cy
      .get("div[class='about-page-container__element'] > p")
      .should("be.visible")
  }
}

export default new AboutPage()
