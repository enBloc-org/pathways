import "../style/InfoPage.css"
import backgroundImage from "../images/HomeBackground.jpg"

function InfoPage() {
  

  return (
    <section className="main-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h1> 
          T-Level stuff
        </h1>
        <p>
          All In One Place
        </p>
      </div>
    </section>
  );
}

export default InfoPage;
