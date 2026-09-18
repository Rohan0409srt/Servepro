import React from "react";
import "../../../style/Fumigation.css";

import bannerImg from "../../../assets/images/1servepro/PestControl/Fumigation/banner-2.jpg";

import fumigationMethodsImg from "../../../assets/images/1servepro/PestControl/Fumigation/1 Fumigation Methods.jpg";
import pestCoverageImg from "../../../assets/images/1servepro/PestControl/Fumigation/2 Bed Bug and Insect Fumigation .jpg";
import longTermProtectionImg from "../../../assets/images/1servepro/PestControl/Fumigation/3 Long-Term Protection.jpg";
import safetyComplianceImg from "../../../assets/images/1servepro/PestControl/Fumigation/4 Safety, Compliance .jpg";

const fumigationServices = [
  {
    title: "Fumigation Methods & Techniques",
    image: fumigationMethodsImg,
    items: [
      "Fumigation Pest Control Treatment",
      "Safe & Eco-Conscious Pest Elimination",
      "Deep Penetration Pest Control Treatment",
      "Enclosed Space Fumigation Services",
    ],
  },
  {
    title: "Pest Coverage & Target Areas",
    image: pestCoverageImg,
    reverse: true,
    items: [
      "Termite Fumigation Solutions",
      "Bed Bug and Insect Fumigation",
      "Hard-to-Reach Area Pest Control",
      "Complete Property Pest Eradication",
    ],
  },
  {
    title: "Effectiveness & Long-Term Protection",
    image: longTermProtectionImg,
    items: [
      "Long-Lasting Pest Protection Solutions",
      "Enclosed Space Pest Elimination",
      "Comprehensive Pest Control Coverage",
      "Advanced Pest Eradication Process",
    ],
  },
  {
    title: "Safety, Compliance & Professional Handling",
    image: safetyComplianceImg,
    reverse: true,
    items: [
      "Professional Fumigation Safety Measures",
      "Controlled Fumigant Application",
      "Health and Environmental Safety Compliance",
      "Certified Pest Control Practices",
    ],
  },
];

const Fumigation = () => {
  return (
    <div className="fumigation-page">

      {/* Banner */}
      <section
        className="fumigation-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
      >
        <div className="fumigation-banner-overlay"></div>
      </section>

      {/* Main Section */}
      <section className="fumigation-section">
        <div className="fumigation-container">

          {/* Intro */}
          <div className="fumigation-intro">
            <h1>
              How does professional fumigation service effectively eliminate
              pests from enclosed spaces and hard-to-reach areas?
            </h1>

            <span className="fumigation-border"></span>

            <p>
              Fumigation service is an advanced pest control solution designed
              to eliminate insects, termites, bed bugs, and other harmful pests
              from enclosed and difficult-to-access spaces. By using controlled
              fumigant gases, this method ensures deep penetration into cracks,
              crevices, and hidden infestation zones where traditional
              treatments may not reach. Fumigation offers comprehensive,
              long-lasting pest elimination, making it an ideal solution for
              residential, commercial, and industrial properties seeking
              complete pest eradication and enhanced hygiene standards.
            </p>
          </div>

          {/* Service Cards */}
          <div className="fumigation-list">
            {fumigationServices.map((service, index) => (
              <div
                className={`fumigation-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={index}
              >
                <div className="fumigation-text">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="fumigation-image">
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Fumigation;