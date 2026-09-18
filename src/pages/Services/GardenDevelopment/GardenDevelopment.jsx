import React from "react";
import "../../../style/GardenDevelopment.css";

import bannerImg from "../../../assets/images/1servepro/garden-service/Garden-Development/banner.jpg";

import gardenPlanningImg from "../../../assets/images/1servepro/garden-service/Garden-Development/1 Garden Planning & Development.jpg";
import plantationImg from "../../../assets/images/1servepro/garden-service/Garden-Development/2 Plantation & Installation Services.jpg";
import maintenanceImg from "../../../assets/images/1servepro/garden-service/Garden-Development/3 Care & Maintenance .jpg";
import pestControlImg from "../../../assets/images/1servepro/garden-service/Garden-Development/4 Pest Control, Sustainability & Green Practices.jpg";

const gardeningServices = [
  {
    title: "Garden Planning & Development",
    image: gardenPlanningImg,
    items: [
      "Garden Development Services",
      "Planning and Designing of Gardens",
      "Landscape Planning and Garden Design",
      "Site Assessment for Soil, Water, and Weather",
    ],
  },
  {
    title: "Plantation & Installation Services",
    image: plantationImg,
    reverse: true,
    items: [
      "Plant Selection and Plantation Process",
      "Soil Preparation and Plant Installation",
      "Seasonal Planting Solutions",
      "Lawn Development and Green Area Enhancement",
    ],
  },
  {
    title: "Irrigation, Care & Maintenance",
    image: maintenanceImg,
    items: [
      "Irrigation System Planning and Management",
      "Automated Irrigation System Management",
      "Regular Garden Care and Maintenance",
      "Pruning and Weeding Services",
    ],
  },
  {
    title: "Pest Control, Sustainability & Green Practices",
    image: pestControlImg,
    reverse: true,
    items: [
      "Garden Pest Control Strategies",
      "Integrated Garden Pest Management",
      "Sustainable Gardening Practices",
      "Eco-Friendly Landscape Maintenance",
    ],
  },
];

const Gardening = () => {
  return (
    <div className="gardening-page">
      {/* Banner */}
      <section
        className="gardening-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
        aria-label="Gardening Services"
      >
        <div className="gardening-banner-overlay"></div>
      </section>

      {/* Main Content */}
      <section className="gardening-service-section">
        <div className="gardening-container">

          {/* Intro */}
          <div className="gardening-section-title">
            <h1>
              How do professional gardening and garden development services
              enhance the beauty, health, and sustainability of outdoor spaces?
            </h1>

            <span className="gardening-title-border"></span>

            <p>
              Gardening and Garden Development Services focus on planning,
              developing, and maintaining green spaces to create visually
              appealing, healthy, and well-managed outdoor environments. These
              services include site assessment, plant selection, soil
              preparation, irrigation planning, regular maintenance, and pest
              management to ensure long-term garden sustainability. Serving
              commercial premises, residential properties, schools, hospitals,
              shopping malls, gyms, and institutions, professional gardening
              services enhance aesthetics, improve environmental quality, and
              support a pleasant, welcoming atmosphere.
            </p>
          </div>

          {/* Service Cards */}
          <div className="gardening-service-list">
            {gardeningServices.map((service, index) => (
              <article
                className={`gardening-service-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={index}
              >
                <div className="gardening-card-text">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="gardening-card-image">
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

export default Gardening;