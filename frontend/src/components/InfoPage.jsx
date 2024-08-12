import "../style/InfoPage.css"
import backgroundImage from "../images/HomeBackground.jpg"

function InfoPage() {
  

  return (
    <section className="main-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="info-page__wrapper">
        <h1 className='info-page__text'> 
          T-Level stuff
        </h1>
        <p className="info-page__text">
          All In One Place
        </p>
      </div>
    </section>
  );
}

export default InfoPage;
