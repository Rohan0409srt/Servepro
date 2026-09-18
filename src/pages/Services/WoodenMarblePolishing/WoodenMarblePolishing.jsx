import React from "react";
import "../../../style/WoodenMarblePolishing.css";

import banner from "../../../assets/images/1servepro/special-service/Wooden-Marble-Polish/banner.jpg";

import img1 from "../../../assets/images/1servepro/special-service/Wooden-Marble-Polish/1 Marble Floor Cleaning.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Wooden-Marble-Polish/2Stain Removal.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Wooden-Marble-Polish/3 Polishing & Buffing Process.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Wooden-Marble-Polish/4 Finishing.jpg";

const WoodenMarblePolishing = () => {
  return (
    <div className="wooden-marble-polishing-page">

      <section
        className="wooden-marble-polishing-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="wooden-marble-polishing-banner-overlay"></div>
      </section>

      <section className="wooden-marble-polishing-section">
        <div className="wooden-marble-polishing-container">

          <div className="wooden-marble-polishing-intro">
            <h1>
              How do professional marble and wooden floor polishing services
              restore shine, remove stains, and enhance surface durability?
            </h1>

            <span className="wooden-marble-polishing-border"></span>

            <p>
              Marble and Wooden Floor Polishing Services are designed to restore
              natural shine, smoothness, and elegance to flooring surfaces
              through systematic cleaning, stain removal, polishing, and
              buffing techniques. Using suitable polishing compounds and
              professional equipment, these services eliminate dullness,
              surface imperfections, and minor scratches while enhancing
              durability and appearance. The process ensures long-lasting
              gloss, improved hygiene, and protection of marble and wooden
              floors, making them ideal for homes, offices, hotels, malls, and
              commercial spaces.
            </p>
          </div>

          <div className="wooden-marble-polishing-service-list">

            <div className="wooden-marble-polishing-card">
              <div className="wooden-marble-polishing-text">
                <h2>Surface Cleaning &amp; Preparation</h2>

                <ul>
                  <li>Marble Polishing Service</li>
                  <li>Marble Surface Cleaning</li>
                  <li>Wooden Floor Polishing Service</li>
                  <li>Vacuuming and Dust Removal</li>
                </ul>
              </div>

              <div className="wooden-marble-polishing-image">
                <img
                  src={img1}
                  alt="Surface Cleaning & Preparation"
                />
              </div>
            </div>

            <div className="wooden-marble-polishing-card reverse">
              <div className="wooden-marble-polishing-text">
                <h2>Stain Removal &amp; Surface Treatment</h2>

                <ul>
                  <li>Marble Stain Removal Treatment</li>
                  <li>Polishing Compound Preparation</li>
                  <li>Wooden Floor Deep Cleaning Preparation</li>
                  <li>Surface Imperfection Removal</li>
                </ul>
              </div>

              <div className="wooden-marble-polishing-image">
                <img
                  src={img2}
                  alt="Stain Removal & Surface Treatment"
                />
              </div>
            </div>

            <div className="wooden-marble-polishing-card">
              <div className="wooden-marble-polishing-text">
                <h2>Polishing &amp; Buffing Process</h2>

                <ul>
                  <li>Marble Polish Application</li>
                  <li>Marble Buffing and Gloss Finish</li>
                  <li>Wooden Floor Polish Application</li>
                  <li>Professional Floor Buffing Services</li>
                </ul>
              </div>

              <div className="wooden-marble-polishing-image">
                <img
                  src={img3}
                  alt="Polishing & Buffing Process"
                />
              </div>
            </div>

            <div className="wooden-marble-polishing-card reverse">
              <div className="wooden-marble-polishing-text">
                <h2>Finishing, Protection &amp; Shine Restoration</h2>

                <ul>
                  <li>High-Gloss Marble Restoration</li>
                  <li>Surface Protection and Finish Enhancement</li>
                  <li>Long-Lasting Floor Shine</li>
                  <li>Improved Floor Durability and Appearance</li>
                </ul>
              </div>

              <div className="wooden-marble-polishing-image">
                <img
                  src={img4}
                  alt="Finishing, Protection & Shine Restoration"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WoodenMarblePolishing;