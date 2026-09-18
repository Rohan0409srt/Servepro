import React from "react";
import "../../../style/Landscaping.css";

import bannerImg from "../../../assets/images/1servepro/garden-service/Landscaping/Banner.jpeg";

import lawnCuttingImg from "../../../assets/images/1servepro/garden-service/Landscaping/1Lawn Cutting & Turf Management.jpg";
import edgingImg from "../../../assets/images/1servepro/garden-service/Landscaping/2 Edging, Borders .jpg";
import lawnHealthImg from "../../../assets/images/1servepro/garden-service/Landscaping/3Lawn Health, Nutrition.jpg";
import flowerbedImg from "../../../assets/images/1servepro/garden-service/Landscaping/4 Flowerbed & Landscape Care.jpg";

const landscapingServices = [
  {
    title: "Lawn Cutting & Turf Management",
    image: lawnCuttingImg,
    items: [
      "Regular Lawn Cutting and Maintenance",
      "Lawn Mowing and Turf Management",
      "Grass Seeding and Lawn Thickening",
      "Clean Line and Lawn Shape Creation",
    ],
  },
  {
    title: "Edging, Borders & Visual Definition",
    image: edgingImg,
    reverse: true,
    items: [
      "Lawn Edging and Border Definition",
      "Maintaining Lawn Edges and Borders",
      "Outdoor Aesthetic Enhancement Services",
      "Professional Lawn Appearance Management",
    ],
  },
  {
    title: "Lawn Health, Nutrition & Weed Control",
    image: lawnHealthImg,
    items: [
      "Lawn Nutrient Application for Healthy Growth",
      "Nutrient Application and Lawn Fertilization",
      "Weed Removal and Lawn Protection",
      "Weed Control and Lawn Protection",
    ],
  },
  {
    title: "Flowerbed & Landscape Care",
    image: flowerbedImg,
    reverse: true,
    items: [
      "Flowerbed Health and Appearance Maintenance",
      "Flowerbed Care and Seasonal Maintenance",
      "Soil Health and Plant Support",
      "Complete Landscape Maintenance Services",
    ],
  },
];

const Landscaping = () => {
  return (
    <div className="landscaping-page">

      {/* Banner */}
      <section
        className="landscaping-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
        aria-label="Landscaping Services"
      >
        <div className="landscaping-banner-overlay"></div>
      </section>

      {/* Main Content */}
      <section className="landscaping-section">
        <div className="landscaping-container">

          {/* Introduction */}
          <div className="landscaping-intro">
            <h1>
              How do professional landscaping services enhance lawn health,
              visual appeal, and long-term outdoor maintenance?
            </h1>

            <span className="landscaping-border"></span>

            <p>
              Landscaping Services focus on maintaining healthy, well-groomed
              lawns and vibrant outdoor spaces through regular lawn cutting,
              edging, nutrient application, and weed control. These services
              improve the overall appearance of lawns and flowerbeds while
              promoting strong grass growth and soil health. By ensuring clean
              borders, filling bare patches, and maintaining flowerbeds,
              professional landscaping enhances curb appeal, environmental
              quality, and the long-term sustainability of outdoor areas for
              residential, commercial, and institutional properties.
            </p>
          </div>

          {/* Service Cards */}
          <div className="landscaping-service-list">
            {landscapingServices.map((service, index) => (
              <article
                className={`landscaping-service-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={index}
              >
                <div className="landscaping-card-text">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="landscaping-card-image">
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

export default Landscaping;