import React from "react";
import "../../../style/GeneralDisinfestation.css";

import bannerImg from "../../../assets/images/1servepro/PestControl/General-Disinfection/Banner .jpg";

import disinfectionTechniquesImg from "../../../assets/images/1servepro/PestControl/General-Disinfection/1 Disinfection Techniques & Methods.jpg";
import surfaceCoverageImg from "../../../assets/images/1servepro/PestControl/General-Disinfection/2 Surface & Area Coverage.jpg";
import hygieneImg from "../../../assets/images/1servepro/PestControl/General-Disinfection/3 Hygiene & Infection Control.jpg";
import safetyImg from "../../../assets/images/1servepro/PestControl/General-Disinfection/4 Safe Disinfection Practices.jpg";

const disinfectionServices = [
  {
    title: "Disinfection Techniques & Methods",
    image: disinfectionTechniquesImg,
    items: [
      "Spraying Technique for Surface Disinfection",
      "Manual Spray-Based Sanitization",
      "Fogging Technique for Deep Sanitization",
      "Long-Lasting Disinfection Treatment",
    ],
  },
  {
    title: "Surface & Area Coverage",
    image: surfaceCoverageImg,
    reverse: true,
    items: [
      "Small Area Disinfection Coverage",
      "High-Touch Surface Disinfection",
      "Indoor Environment Sanitization",
      "Comprehensive Area Coverage",
    ],
  },
  {
    title: "Health, Hygiene & Infection Control",
    image: hygieneImg,
    items: [
      "Germ and Pathogen Elimination",
      "Preventive Hygiene Management",
      "Infection Prevention Measures",
      "Health and Safety Risk Reduction",
    ],
  },
  {
    title: "Safety, Compliance & Protection",
    image: safetyImg,
    reverse: true,
    items: [
      "Safe Disinfection Practices",
      "Hygiene Standards Compliance",
      "Public Health Protection",
      "Environmental Safety Measures",
    ],
  },
];

const GeneralDisinfection = () => {
  return (
    <div className="general-disinfection-page">

      {/* Banner */}
      <section
        className="general-disinfection-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
      >
        <div className="general-disinfection-banner-overlay"></div>
      </section>

      {/* Main Section */}
      <section className="general-disinfection-section">
        <div className="general-disinfection-container">

          {/* Intro */}
          <div className="general-disinfection-intro">
            <h1>
              How do general disinfection services help maintain a safe,
              hygienic, and germ-free environment for residential and
              commercial premises?
            </h1>

            <span className="general-disinfection-border"></span>

            <p>
              General Disinfection Services focus on eliminating harmful
              germs, bacteria, and viruses from frequently touched surfaces
              and enclosed spaces to maintain a healthy and safe environment.
              Using effective spraying and fogging techniques, these services
              ensure thorough coverage, long-lasting protection, and enhanced
              hygiene standards. By targeting high-contact areas and
              maintaining cleanliness protocols, disinfection services help
              prevent the spread of infections and support overall health and
              safety across various premises.
            </p>
          </div>

          {/* Service Cards */}
          <div className="general-disinfection-list">
            {disinfectionServices.map((service, index) => (
              <div
                className={`general-disinfection-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={index}
              >
                <div className="general-disinfection-text">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="general-disinfection-image">
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

export default GeneralDisinfection;