import React from "react";
import "../../../style/GardenMaintenance.css";

import bannerImg from "../../../assets/images/1servepro/garden-service/Garden-Maintenance/banner.jpg";

import routineCareImg from "../../../assets/images/1servepro/garden-service/Garden-Maintenance/1 Maintenance.jpg";
import lawnCareImg from "../../../assets/images/1servepro/garden-service/Garden-Maintenance/2Lawn Cutting & Turf Management.jpg";
import pestControlImg from "../../../assets/images/1servepro/garden-service/Garden-Maintenance/3Pest Control & Plant Protection.jpg";
import renovationImg from "../../../assets/images/1servepro/garden-service/Garden-Maintenance/4Garden Renovation & Enhancement.jpg";

const gardenMaintenanceServices = [
  {
    title: "Routine Garden Care & Maintenance",
    image: routineCareImg,
    items: [
      "Garden Maintenance Service",
      "Regular Garden Pruning and Fertilization",
      "Seasonal Garden Care Services",
      "Plant Health and Growth Management",
    ],
  },
  {
    title: "Lawn Care & Turf Management",
    image: lawnCareImg,
    reverse: true,
    items: [
      "Lawn Mowing and Lawn Maintenance",
      "Lawn Care and Turf Maintenance",
      "Soil Enrichment and Fertilization Programs",
      "Healthy Lawn Growth Management",
    ],
  },
  {
    title: "Pest Control & Plant Protection",
    image: pestControlImg,
    items: [
      "Comprehensive Garden Pest Control",
      "Integrated Garden Pest Control",
      "Trimming and Planting Services",
      "Preventive Plant Care Solutions",
    ],
  },
  {
    title: "Garden Renovation & Enhancement",
    image: renovationImg,
    reverse: true,
    items: [
      "Customer Communication and Issue Explanation",
      "Work Records and Service Documentation",
      "Service History Tracking and Reporting",
      "Operational Transparency and Accountability",
    ],
  },
];

const GardenMaintenance = () => {
  return (
    <div className="garden-maintenance-page">

      {/* Banner */}
      <section
        className="garden-maintenance-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
        aria-label="Garden Maintenance Services"
      >
        <div className="garden-maintenance-banner-overlay"></div>
      </section>

      {/* Main Section */}
      <section className="garden-maintenance-section">
        <div className="garden-maintenance-container">

          {/* Introduction */}
          <div className="garden-maintenance-intro">
            <h1>
              How do professional garden maintenance services help keep
              gardens healthy, attractive, and well-maintained throughout
              the year?
            </h1>

            <span className="garden-maintenance-border"></span>

            <p>
              Garden Maintenance Services focus on preserving the beauty,
              health, and functionality of outdoor spaces through regular
              care such as lawn mowing, pruning, fertilization, pest control,
              and seasonal upkeep. These services ensure lawns, plants, and
              garden areas remain vibrant and well-groomed while also
              renovating existing gardens to enhance design and usability.
              Professional garden maintenance supports long-term plant
              health, improves visual appeal, and creates a pleasant outdoor
              environment for residential, commercial, and institutional
              properties.
            </p>
          </div>

          {/* Service Cards */}
          <div className="garden-maintenance-list">
            {gardenMaintenanceServices.map((service, index) => (
              <article
                className={`garden-maintenance-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={index}
              >
                <div className="garden-maintenance-text">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="garden-maintenance-image">
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

export default GardenMaintenance;