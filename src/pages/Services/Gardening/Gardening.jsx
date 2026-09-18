import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Gardening.css";

import bannerImg from "../../../assets/images/1servepro/garden-service/vertical-garden/banner.jpg";

import gardenDevelopmentImg from "../../../assets/images/1servepro/garden-service/Garden-Development/1 Garden Planning & Development.jpg";
import landscapingImg from "../../../assets/images/1servepro/garden-service/Landscaping/1Lawn Cutting & Turf Management.jpg";
import gardenMaintenanceImg from "../../../assets/images/1servepro/garden-service/Garden-Maintenance/1 Maintenance.jpg";
import potPlantImg from "../../../assets/images/1servepro/garden-service/Pot-Planting/2 Container & Soil Preparation.jpg";
import verticalGardenImg from "../../../assets/images/1servepro/garden-service/vertical-garden/1 Vertical Gardening Service.jpg";

const gardeningServices = [
  {
    title: "Garden Development",
    image: gardenDevelopmentImg,
    path: "/gardening-service-gardendevelopment",
    description:
      "Professional garden planning, development, plantation, irrigation, and maintenance solutions.",
  },
  {
    title: "Landscaping",
    image: landscapingImg,
    path: "/gardening-service-landingservice",
    description:
      "Complete landscaping solutions for healthy lawns, attractive outdoor spaces, and green areas.",
  },
  {
    title: "Garden Maintenance",
    image: gardenMaintenanceImg,
    path: "/gardening-service-gardenmaintenanceservice",
    description:
      "Regular garden care, lawn maintenance, pruning, pest control, and seasonal garden upkeep.",
  },
  {
    title: "Pot Plant",
    image: potPlantImg,
    path: "/gardening-service-plotplantingservice",
    description:
      "Professional pot planting solutions with suitable plant selection, soil preparation, and maintenance.",
  },
  {
    title: "Vertical Garden",
    image: verticalGardenImg,
    path: "/gardening-service-verticalgardeningservice",
    description:
      "Space-saving vertical gardening solutions designed to create attractive and sustainable green environments.",
  },
];

const Gardening = () => {
  return (
    <div className="garden-overview-page">

      {/* Banner */}
      <section
        className="garden-overview-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
        aria-label="Gardening Services"
      >
        <div className="garden-overview-banner-overlay"></div>
      </section>

      {/* Main Section */}
      <section className="garden-overview-section">
        <div className="garden-overview-container">

          {/* Intro */}
          <div className="garden-overview-intro">
            <h1>Gardening Services</h1>

            <span className="garden-overview-border"></span>

            <p>
              Our professional gardening services are designed to create,
              maintain, and enhance beautiful green spaces. From garden
              development and landscaping to regular maintenance, pot planting,
              and vertical gardens, we provide complete solutions for
              residential, commercial, and institutional properties.
            </p>
          </div>

          {/* Services Grid */}
          <div className="garden-overview-grid">
            {gardeningServices.map((service, index) => (
              <article
                className="garden-overview-card"
                key={service.path}
              >
                {/* Image */}
                <div className="garden-overview-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Content */}
                <div className="garden-overview-card-content">
                  <h2>{service.title}</h2>

                  <p>{service.description}</p>

                  <Link
                    to={service.path}
                    className="garden-overview-read-more"
                  >
                    View Service
                  </Link>
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