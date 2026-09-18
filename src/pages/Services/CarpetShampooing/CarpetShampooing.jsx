import React from "react";
import "../../../style/CarpetShampooing.css";

import banner from "../../../assets/images/1servepro/special-service/Carpe-Shampooing/banner.jpg";
import img1 from "../../../assets/images/1servepro/special-service/Carpe-Shampooing/1 1 Pre-Cleaning.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Carpe-Shampooing/2 Foam Cleaning.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Carpe-Shampooing/3 Extraction (2).jpg";
import img4 from "../../../assets/images/1servepro/special-service/Carpe-Shampooing/4 Drying, Finishing.jpg";

const CarpetShampooing = () => {
  return (
    <div className="carpet-shampooing-page">

      {/* =========================
          BANNER
      ========================== */}
      <section
        className="carpet-shampooing-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="carpet-shampooing-banner-overlay"></div>
      </section>


      {/* =========================
          MAIN CONTENT
      ========================== */}
      <section className="carpet-shampooing-section">
        <div className="carpet-shampooing-container">

          {/* =========================
              INTRODUCTION
          ========================== */}
          <div className="carpet-shampooing-intro">

            <h1>
              How does professional carpet shampooing service remove
              deep-seated dirt, stains, and germs to restore carpet
              freshness and hygiene?
            </h1>

            <span className="carpet-shampooing-border"></span>

            <p>
              Carpet Shampooing Service is a deep cleaning solution designed
              to remove embedded dirt, stains, allergens, and germs from
              carpets using advanced foam cleaning and extraction techniques.
              The process includes dry vacuuming, spot treatment, foam
              scrubbing with machines, and powerful extraction to eliminate
              residue and moisture. Proper drying using blowers or
              dehumidifiers ensures carpets are left clean, fresh, and
              hygienic, making this service ideal for offices, commercial
              spaces, hotels, residences, and high-traffic areas.
            </p>

          </div>


          {/* =========================
              SERVICE CARDS
          ========================== */}
          <div className="carpet-shampooing-service-list">


            {/* =========================
                CARD 1
            ========================== */}
            <div className="carpet-shampooing-card">

              <div className="carpet-shampooing-text">

                <h2>
                  Pre-Cleaning Preparation &amp; Inspection
                </h2>

                <ul>
                  <li>
                    Carpet Shampooing Service
                  </li>

                  <li>
                    Furniture Moving and Area Preparation
                  </li>

                  <li>
                    Commercial Dry Vacuuming with Carpet Brush
                  </li>

                  <li>
                    Deep Carpet Cleaning Solutions
                  </li>
                </ul>

              </div>


              <div className="carpet-shampooing-image">

                <img
                  src={img1}
                  alt="Pre-Cleaning Preparation & Inspection"
                />

              </div>

            </div>


            {/* =========================
                CARD 2 - REVERSE
            ========================== */}
            <div className="carpet-shampooing-card reverse">

              <div className="carpet-shampooing-text">

                <h2>
                  Stain Treatment &amp; Foam Cleaning
                </h2>

                <ul>
                  <li>
                    Spot Removal Using Special Chemicals
                  </li>

                  <li>
                    Stain Removal and Spot Treatment Services
                  </li>

                  <li>
                    Foam Shampoo Treatment and Scrubbing
                  </li>

                  <li>
                    Advanced Foam Shampoo Treatment
                  </li>
                </ul>

              </div>


              <div className="carpet-shampooing-image">

                <img
                  src={img2}
                  alt="Stain Treatment & Foam Cleaning"
                />

              </div>

            </div>


            {/* =========================
                CARD 3
            ========================== */}
            <div className="carpet-shampooing-card">

              <div className="carpet-shampooing-text">

                <h2>
                  Extraction &amp; Deep Hygiene Cleaning
                </h2>

                <ul>
                  <li>
                    Injection Extraction Cleaning Process
                  </li>

                  <li>
                    High-Power Carpet Extraction Cleaning
                  </li>

                  <li>
                    Germ and Allergen Removal from Carpets
                  </li>

                  <li>
                    Complete Residue and Dirt Removal
                  </li>
                </ul>

              </div>


              <div className="carpet-shampooing-image">

                <img
                  src={img3}
                  alt="Extraction & Deep Hygiene Cleaning"
                />

              </div>

            </div>


            {/* =========================
                CARD 4 - REVERSE
            ========================== */}
            <div className="carpet-shampooing-card reverse">

              <div className="carpet-shampooing-text">

                <h2>
                  Drying, Finishing &amp; Carpet Care
                </h2>

                <ul>
                  <li>
                    Carpet Drying Using Blowers or Dehumidifiers
                  </li>

                  <li>
                    Fast Drying Carpet Cleaning Process
                  </li>

                  <li>
                    Restoration of Carpet Appearance
                  </li>

                  <li>
                    Long-Lasting Carpet Freshness
                  </li>
                </ul>

              </div>


              <div className="carpet-shampooing-image">

                <img
                  src={img4}
                  alt="Drying, Finishing & Carpet Care"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default CarpetShampooing;