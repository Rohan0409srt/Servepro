import React from "react";
import "../../../style/AntiLarvae.css";

import banner from "../../../assets/images/1servepro/PestControl/Anti-Larvae-Treatment/banner.jpg";
import img1 from "../../../assets/images/1servepro/PestControl/Anti-Larvae-Treatment/1 Anti-Larvae Treatment Methods.jpg";
import img2 from "../../../assets/images/1servepro/PestControl/Anti-Larvae-Treatment/2Mosquito Breeding Prevention.jpg";
import img3 from "../../../assets/images/1servepro/PestControl/Anti-Larvae-Treatment/3 larvae .jpg";
import img4 from "../../../assets/images/1servepro/PestControl/Anti-Larvae-Treatment/4  Environmental Safety.jpg";
const AntiLarvae = () => {
  return (
    <div className="anti-larvae-page">

      {/* =========================
          BANNER
      ========================== */}
      <section
        className="anti-larvae-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="anti-larvae-banner-overlay"></div>
      </section>


      {/* =========================
          MAIN CONTENT
      ========================== */}
      <section className="anti-larvae-section">
        <div className="anti-larvae-container">

          {/* =========================
              INTRODUCTION
          ========================== */}
          <div className="anti-larvae-intro">

            <h1>
              How does anti-larvae treatment help control mosquito breeding
              and reduce the risk of mosquito-borne diseases?
            </h1>

            <span className="anti-larvae-border"></span>

            <p>
              Anti-Larvae Treatment Service is a preventive mosquito control
              solution that targets mosquito larvae at their breeding sites
              before they mature into biting adults. By applying approved
              larvicides to stagnant water and potential breeding habitats,
              this treatment significantly reduces mosquito populations and
              minimizes the need for adult mosquito control measures.
              Anti-larvae treatment is an effective, eco-conscious approach
              to protecting residential, commercial, and public spaces from
              mosquito-borne health risks.
            </p>

          </div>


          {/* =========================
              SERVICE CARDS
          ========================== */}
          <div className="anti-larvae-service-list">


            {/* =========================
                CARD 1
            ========================== */}
            <div className="anti-larvae-card">

              <div className="anti-larvae-text">

                <h2>
                  Anti-Larvae Treatment Methods
                </h2>

                <ul>
                  <li>
                    Anti-Larvae Mosquito Treatment Service
                  </li>

                  <li>
                    Larvicide Application for Mosquito Control
                  </li>

                  <li>
                    Mosquito Breeding Habitat Treatment
                  </li>

                  <li>
                    Early-Stage Mosquito Control
                  </li>
                </ul>

              </div>


              <div className="anti-larvae-image">

               <img src={img1} alt="Anti-Larvae Treatment Methods" />

              </div>

            </div>


            {/* =========================
                CARD 2 - REVERSE
            ========================== */}
            <div className="anti-larvae-card reverse">

              <div className="anti-larvae-text">

                <h2>
                  Mosquito Breeding Prevention
                </h2>

                <ul>
                  <li>
                    Prevention of Mosquito Larvae Development
                  </li>

                  <li>
                    Mosquito Breeding Site Identification
                  </li>

                  <li>
                    Overall Mosquito Population Reduction
                  </li>

                  <li>
                    Long-Term Mosquito Control Strategy
                  </li>
                </ul>

              </div>


              <div className="anti-larvae-image">

                <img src={img2} alt="Mosquito Breeding Prevention" />

              </div>

            </div>


            {/* =========================
                CARD 3
            ========================== */}
            <div className="anti-larvae-card">

              <div className="anti-larvae-text">

                <h2>
                  Eco-Friendly &amp; Preventive Solutions
                </h2>

                <ul>
                  <li>
                    Eco-Friendly Mosquito Prevention Solutions
                  </li>

                  <li>
                    Reduced Need for Adult Mosquito Treatments
                  </li>

                  <li>
                    Preventive Vector Control Management
                  </li>

                  <li>
                    Sustainable Mosquito Control Practices
                  </li>
                </ul>

              </div>


              <div className="anti-larvae-image">

                <img src={img3} alt="Eco-Friendly & Preventive Solutions" />
              </div>

            </div>


            {/* =========================
                CARD 4 - REVERSE
            ========================== */}
            <div className="anti-larvae-card reverse">

              <div className="anti-larvae-text">

                <h2>
                  Health Protection &amp; Environmental Safety
                </h2>

                <ul>
                  <li>
                    Public Health Risk Reduction
                  </li>

                  <li>
                    Environment-Safe Larvicide Usage
                  </li>

                  <li>
                    Compliance with Vector Control Guidelines
                  </li>

                  <li>
                    Community-Wide Mosquito Control Support
                  </li>
                </ul>

              </div>


              <div className="anti-larvae-image">

                <img src={img4} alt="Health Protection & Environmental Safety" />

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default AntiLarvae;