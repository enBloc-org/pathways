import "../style/InfoPage.css"
import backgroundImage from "../images/HomeBackground.jpg"

function InfoPage() {
  return (
    <main
      className="info-page main"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="info-page__wrapper">
        <div className="info-page__box info-page__box--pathways">
          <h1 className="info-page__text">Pathways</h1>
        </div>
        <div className="info-page__box info-page__box--tlevel">
          <p className="info-page__text-2">Explore T-Level placements for team</p>
        </div>
      </div>
    </main>
  )
}

export default InfoPage
