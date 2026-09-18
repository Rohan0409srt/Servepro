import React from "react";
import "../../../style/BirdNetting.css";

import bannerImg from "../../../assets/images/1servepro/PestControl/Bird-Netting/banner.jpg";

import planningImg from "../../../assets/images/1servepro/PestControl/Bird-Netting/1 Planning & Measurement.jpg";
import installationImg from "../../../assets/images/1servepro/PestControl/Bird-Netting/2 Installation & Fixing Process.jpg";
import protectionImg from "../../../assets/images/1servepro/PestControl/Bird-Netting/2 Protection & Effectiveness.jpg";
import safetyImg from "../../../assets/images/1servepro/PestControl/Bird-Netting/4 Safety, Hygiene & Eco-Friendly Solutions.jpg";

const birdNettingServices = [
  {
    title: "Planning & Measurement",
    image: planningImg,
    items: [
      "Area Measurement for Netting Coverage",
      "Selection of Appropriate Bird Netting Material",
      "Customized Bird Netting Installation",
      "Netting Design for Complex Structures",
    ],
  },
  {
    title: "Installation & Fixing Process",
    image: installationImg,
    reverse: true,
    items: [
      "Bird Netting Service Installation",
      "Installation of Anchor Points",
      "Secure Netting with Cable Ties and Clips",
      "Customized Netting for Uneven Surfaces",
    ],
  },
  {
    title: "Protection & Effectiveness",
    image: protectionImg,
    items: [
      "Balcony and Building Bird Protection",
      "Property Damage Prevention from Birds",
      "Long-Lasting Weather-Resistant Netting",
      "Complete Bird Intrusion Prevention",
    ],
  },
  {
    title: "Safety, Hygiene & Eco-Friendly Solutions",
    image: safetyImg,
    reverse: true,
    items: [
      "Humane Bird Control Solutions",
      "Safe and Eco-Friendly Bird Deterrent System",
      "Hygiene Maintenance and Health Protection",
      "Environment-Friendly Bird Control Practices",
    ],
  },
];

const BirdNetting = () => {
  return (
    <div className="bird-netting-page">

      {/* Banner */}
      <section
        className="bird-netting-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
      >
        <div className="bird-netting-banner-overlay"></div>
      </section>

      {/* Content */}
      <section className="bird-netting-section">
        <div className="bird-netting-container">

          {/* Intro */}
          <div className="bird-netting-intro">
            <h1>
              How does professional bird netting service prevent bird
              intrusion and protect buildings, balconies, and open spaces
              safely and effectively?
            </h1>

            <span className="bird-netting-border"></span>

            <p>
              Bird Netting Service provides an effective and humane solution
              to prevent birds from entering, nesting, or causing damage to
              residential, commercial, and industrial spaces. The service
              involves precise measurement, selection of durable netting
              materials, and secure installation using anchor points to ensure
              complete coverage, even on uneven surfaces. Bird netting helps
              maintain hygiene, protects property, and prevents health risks
              caused by bird droppings, making it a long-term and
              environmentally safe bird control solution.
            </p>
          </div>

          {/* Services */}
          <div className="bird-netting-list">
            {birdNettingServices.map((service, index) => (
              <div
                className={`bird-netting-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={index}
              >
                <div className="bird-netting-text">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="bird-netting-image">
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

export default BirdNetting;