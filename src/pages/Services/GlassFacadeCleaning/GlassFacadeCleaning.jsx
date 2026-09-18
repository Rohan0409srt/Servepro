import React from "react";
import "../../../style/GlassFacadeCleaning.css";

import banner from "../../../assets/images/1servepro/special-service/Glass-Facade-Cleaning/banner.jpg";
import img1 from "../../../assets/images/1servepro/special-service/Glass-Facade-Cleaning/1Glass Surface Preparation.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Glass-Facade-Cleaning/2 Glass Cleaning, Stain Removal.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Glass-Facade-Cleaning/3 Facade Cleaning.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Glass-Facade-Cleaning/4 Safety.jpg";

const GlassFacadeCleaning = () => {
  return (
    <div className="glass-facade-page">

      {/* =========================
          BANNER
      ========================== */}
      <section
        className="glass-facade-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="glass-facade-banner-overlay"></div>
      </section>


      {/* =========================
          MAIN CONTENT
      ========================== */}
      <section className="glass-facade-section">
        <div className="glass-facade-container">

          {/* =========================
              INTRODUCTION
          ========================== */}
          <div className="glass-facade-intro">

            <h1>
              How do professional glass and facade cleaning services
              restore clarity, shine, and long-lasting cleanliness for
              homes, offices, and commercial buildings?
            </h1>

            <span className="glass-facade-border"></span>

            <p>
              Glass Cleaning and Facade Cleaning Services provide
              comprehensive solutions to maintain spotless, streak-free,
              and visually appealing glass surfaces and building exteriors.
              Using safe cleaning agents, modern tools, and proven
              techniques, these services remove dust, stains, grime, water
              spots, and environmental pollutants while protecting delicate
              glass and facade materials. Suitable for homes, offices, and
              commercial properties, professional glass and facade cleaning
              enhances aesthetics, improves natural light, and preserves
              the structural appearance of buildings.
            </p>

          </div>


          {/* =========================
              SERVICE CARDS
          ========================== */}
          <div className="glass-facade-service-list">


            {/* =========================
                CARD 1
            ========================== */}
            <div className="glass-facade-card">

              <div className="glass-facade-text">

                <h2>
                  Glass Surface Preparation &amp; Dust Removal
                </h2>

                <ul>
                  <li>
                    Glass Cleaning Services
                  </li>

                  <li>
                    Dust Removal and Surface Preparation
                  </li>

                  <li>
                    Home and Office Glass Cleaning
                  </li>

                  <li>
                    Commercial Glass Cleaning Services
                  </li>
                </ul>

              </div>

              <div className="glass-facade-image">

                <img
                  src={img1}
                  alt="Glass Surface Preparation & Dust Removal"
                />

              </div>

            </div>


            {/* =========================
                CARD 2 - REVERSE
            ========================== */}
            <div className="glass-facade-card reverse">

              <div className="glass-facade-text">

                <h2>
                  Glass Cleaning, Stain Removal &amp; Finishing
                </h2>

                <ul>
                  <li>
                    Application of Glass Cleaning Solutions
                  </li>

                  <li>
                    Scrubbing and Squeegee Cleaning
                  </li>

                  <li>
                    Specialty Stain and Adhesive Removal
                  </li>

                  <li>
                    Rinsing and Streak-Free Drying
                  </li>
                </ul>

              </div>

              <div className="glass-facade-image">

                <img
                  src={img2}
                  alt="Glass Cleaning, Stain Removal & Finishing"
                />

              </div>

            </div>


            {/* =========================
                CARD 3
            ========================== */}
            <div className="glass-facade-card">

              <div className="glass-facade-text">

                <h2>
                  Facade Cleaning Methods &amp; Execution
                </h2>

                <ul>
                  <li>
                    Facade Cleaning Service
                  </li>

                  <li>
                    Commercial Facade Cleaning
                  </li>

                  <li>
                    Water-Based and Chemical Cleaning Methods
                  </li>

                  <li>
                    High-Rise Facade Cleaning Services
                  </li>
                </ul>

              </div>

              <div className="glass-facade-image">

                <img
                  src={img3}
                  alt="Facade Cleaning Methods & Execution"
                />

              </div>

            </div>


            {/* =========================
                CARD 4 - REVERSE
            ========================== */}
            <div className="glass-facade-card reverse">

              <div className="glass-facade-text">

                <h2>
                  Safety, Protection &amp; Visual Enhancement
                </h2>

                <ul>
                  <li>
                    Scratch-Free Glass Cleaning Practices
                  </li>

                  <li>
                    Building Material Assessment
                  </li>

                  <li>
                    Exterior Glass and Window Cleaning
                  </li>

                  <li>
                    Long-Lasting Shine and Building Appearance
                  </li>
                </ul>

              </div>

              <div className="glass-facade-image">

                <img
                  src={img4}
                  alt="Safety, Protection & Visual Enhancement"
                />

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default GlassFacadeCleaning;