import React from "react";
import "../../../style/PotPlant.css";

import bannerImg from "../../../assets/images/1servepro/garden-service/Pot-Planting/Banner.jpg";

import planningImg from "../../../assets/images/1servepro/garden-service/Pot-Planting/2 Container & Soil Preparation.jpg";
import containerImg from "../../../assets/images/1servepro/garden-service/Pot-Planting/2Container & Soil Preparation.png";
import plantingImg from "../../../assets/images/1servepro/garden-service/Pot-Planting/3 Planting & Root Establishment.jpg";
import maintenanceImg from "../../../assets/images/1servepro/garden-service/Pot-Planting/4 Maintenance Support.jpg";

const potPlantServices = [
  {
    title: "Planning & Plant Selection",
    image: planningImg,
    items: [
      "Identifying the Right Location for Plants",
      "Selection of Suitable Plants",
      "Customized Pot Selection and Styling",
      "Indoor and Outdoor Pot Planting Solutions",
    ],
  },
  {
    title: "Container & Soil Preparation",
    image: containerImg,
    reverse: true,
    items: [
      "Container Preparation for Planting",
      "Choosing the Right Potting Mix",
      "Soil and Potting Mix Preparation",
      "Container Gardening Expertise",
    ],
  },
  {
    title: "Planting & Root Establishment",
    image: plantingImg,
    items: [
      "Safe Removal from Nursery Pots",
      "Plant Placement and Proper Planting",
      "Healthy Root Establishment Techniques",
      "Thorough Watering for Root Settlement",
    ],
  },
  {
    title: "Aesthetics, Growth & Maintenance Support",
    image: maintenanceImg,
    reverse: true,
    items: [
      "Decorative Plant Arrangement Services",
      "Plant Placement and Growth Optimization",
      "Enhanced Indoor and Outdoor Green Spaces",
      "Long-Term Potted Plant Health Support",
    ],
  },
];

const PotPlant = () => {
  return (
    <div className="pot-plant-page">

      {/* Banner */}
      <section
        className="pot-plant-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
        aria-label="Pot Planting Service"
      >
        <div className="pot-plant-banner-overlay"></div>
      </section>

      {/* Main Content */}
      <section className="pot-plant-section">
        <div className="pot-plant-container">

          {/* Introduction */}
          <div className="pot-plant-intro">
            <h1>
              How does professional pot planting service ensure healthy plant
              growth and enhance indoor and outdoor aesthetics?
            </h1>

            <span className="pot-plant-border"></span>

            <p>
              Pot Planting Service focuses on the proper selection, placement,
              and planting of potted plants to promote healthy growth and
              visual appeal. The service includes choosing suitable locations,
              selecting appropriate containers and potting mix, carefully
              transplanting plants, and ensuring proper watering for root
              settlement. Professional pot planting enhances the beauty of
              homes, offices, commercial spaces, and gardens while supporting
              long-term plant health and maintenance.
            </p>
          </div>

          {/* Service Cards */}
          <div className="pot-plant-service-list">
            {potPlantServices.map((service, index) => (
              <article
                className={`pot-plant-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={index}
              >
                <div className="pot-plant-card-text">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pot-plant-card-image">
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

export default PotPlant;