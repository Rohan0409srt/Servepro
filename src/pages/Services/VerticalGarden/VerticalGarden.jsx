import React from "react";
import "../../../style/VerticalGarden.css";

import bannerImg from "../../../assets/images/1servepro/garden-service/vertical-garden/banner.jpg";

import planningImg from "../../../assets/images/1servepro/garden-service/vertical-garden/1 Vertical Gardening Service.jpg";
import installationImg from "../../../assets/images/1servepro/garden-service/vertical-garden/2 Installation .jpg";
import irrigationImg from "../../../assets/images/1servepro/garden-service/vertical-garden/3 Automated Irrigation for Vertical Gardens.jpg";
import maintenanceImg from "../../../assets/images/1servepro/garden-service/vertical-garden/4Maintenance.jpg";

const verticalGardenServices = [
  {
    title: "Vertical Garden Planning & Design",
    image: planningImg,
    items: [
      "Vertical Gardening Service",
      "Space-Saving Green Wall Solutions",
      "Living Green Wall Installation",
      "Sustainable Urban Gardening Solutions",
    ],
  },
  {
    title: "Structure & Installation",
    image: installationImg,
    reverse: true,
    items: [
      "Installation of Vertical Support Systems",
      "Vertical Garden Structural System Setup",
      "Growing Medium and Pocket Preparation",
      "Customized Vertical Garden Layouts",
    ],
  },
  {
    title: "Irrigation, Nutrition & Growth",
    image: irrigationImg,
    items: [
      "Vertical Garden Irrigation System Setup",
      "Automated Irrigation for Vertical Gardens",
      "Fertilizer and Nutrient Supply Management",
      "Healthy Plant Growth Optimization",
    ],
  },
  {
    title: "Maintenance, Pest Control & Sustainability",
    image: maintenanceImg,
    reverse: true,
    items: [
      "Pest and Disease Monitoring",
      "Vertical Garden Pest and Disease Control",
      "Pruning and Plant Health Maintenance",
      "Long-Term Vertical Garden Maintenance",
    ],
  },
];

const VerticalGarden = () => {
  return (
    <div className="vertical-garden-page">

      {/* Banner */}
      <section
        className="vertical-garden-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
        aria-label="Vertical Garden Services"
      >
        <div className="vertical-garden-banner-overlay"></div>
      </section>

      {/* Main Content */}
      <section className="vertical-garden-section">
        <div className="vertical-garden-container">

          {/* Introduction */}
          <div className="vertical-garden-intro">
            <h1>
              How does vertical gardening service transform limited spaces
              into healthy, visually appealing, and sustainable green
              environments?
            </h1>

            <span className="vertical-garden-border"></span>

            <p>
              Vertical Gardening Service is a space-efficient green solution
              designed to enhance aesthetics, improve air quality, and
              maximize plant growth in limited areas. By installing structured
              vertical systems with suitable growing mediums, irrigation
              setups, and nutrient management, this service creates vibrant
              green walls for homes, offices, commercial spaces, and
              institutions. Regular monitoring for pests, pruning, and
              maintenance ensures healthy plant growth while transforming
              walls into attractive, eco-friendly living landscapes.
            </p>
          </div>

          {/* Service Cards */}
          <div className="vertical-garden-service-list">
            {verticalGardenServices.map((service, index) => (
              <article
                className={`vertical-garden-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={index}
              >
                <div className="vertical-garden-card-text">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="vertical-garden-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default VerticalGarden;