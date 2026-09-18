import React from "react";
import { Link } from "react-router-dom";
import "../../../style/TechnicalServices.css";

import banner from "../../../assets/images/1servepro/service-main-banner/tech-main-banner.jpeg";

import img1 from "../../../assets/images/1servepro/Technical_service/Mechanical-Electrical/1 inspection, Diagnostics & Testing.png";
import img2 from "../../../assets/images/1servepro/Technical_service/Operation-Maintenance/1 Machine Operation & Production Control.jpg";
import img3 from "../../../assets/images/1servepro/Technical_service/Plumbing-Carpentry/1Installation.jpg";
import img4 from "../../../assets/images/1servepro/Technical_service/HVAC/1 HVAC Installation .jpg";
import img5 from "../../../assets/images/1servepro/Technical_service/Water-Treatment/2 Wastewater & Effluent Treatment.jpg";

const services = [
  {
    title: "Mechanical & Electrical Service",
    image: img1,
    points: [
      "Design & Install system for power generation.",
      "Fixing up the lighting systems.",
      "Installing fire alarm system.",
      "Configuring communication networks.",
      "Integrating electrical systems with BMS.",
      "Maintaining emergency power generators & UPS.",
      "Testing and commissioning all M&E systems.",
      "Providing ongoing maintenance and support.",
    ],
    link: "/technical-service-mechnical-electrical",
  },
  {
    title: "Operation & Maintenance Service",
    image: img2,
    points: [
      "Regular inspections, maintenance, and repairs",
      "Addressing breakdowns and malfunctions",
      "Provide support in troubleshooting & assistance",
      "Update and maintain software systems",
      "Track and manage the lifecycle of assets",
      "Providing technical support & assistance to users",
      "Ensure smooth operation and maximize efficiency",
    ],
    link: "/technical-service-operation-maintance",
  },
  {
    title: "Plumbing & Carpentry Service",
    image: img3,
    points: [
      "Installing & repairing plumbing systems",
      "Cutting, bending, and joining pipe",
      "Replacing pipes and fixtures",
      "Understanding construction plans & specification",
      "Installing cabinetry, doors, windows & fixtures",
      "Building & Framing, walls, floors, ceilings & roofs.",
      "Repairs and maintenance on existing structures",
    ],
    link: "/technical-service-plumbing-carpentry",
  },
  {
    title: "HVAC Service",
    image: img4,
    points: [
      "Installing new HVAC systems & components",
      "Performing routine maintenance tasks",
      "Diagnosing and repairing HVAC systems",
      "Testing HVAC systems to ensure Quality, standard",
      "Communicating with customers, explaining issues",
      "Keeping records of work performed",
      "Adhering to safety regulations, industry standards",
    ],
    link: "/technical-service-hvac",
  },
  {
    title: "Water Treatment Service Provider",
    image: img5,
    points: [
      "Focuses on removing contaminants",
      "Treats wastewater from industries to meet",
      "regulatory standards and protect the environment",
      "Treating wastewater from homes, businesses",
      "Addresses contaminants in well water",
      "Ensures the safety and hygiene of water in pools,",
      "Fountains and other aquatic feature",
      "Improving water quality for various purposes,",
      "including drinking water, industrial use, and",
      "wastewater treatment",
    ],
    link: "/technical-service-water-treatment-system",
  },
];

const TechnicalServices = () => {
  return (
    <div className="technical-services-page">

      {/* BANNER */}
      <section
        className="technical-services-banner"
        style={{ backgroundImage: `url(${banner})` }}
        aria-label="Technical Services"
      >
        <div className="technical-services-banner-overlay"></div>
      </section>

      {/* MAIN SECTION */}
      <section className="technical-services-section">
        <div className="technical-services-container">

          {/* INTRO */}
          <div className="technical-services-intro">
            <h1>
              What is the importance of Technical Services under Facility
              Management?
            </h1>

            <span className="technical-services-border"></span>

            <p>
              Technical service is crucial for ensuring the effective
              functioning and maintenance of technology and systems, ultimately
              impacting productivity, user experience, and business success.
              It provides essential support for troubleshooting, problem
              resolution, and ongoing maintenance, helping businesses minimize
              downtime and maximize the value of their technology investments.
            </p>
          </div>

          {/* SERVICE GRID */}
          <div className="technical-services-grid">
            {services.map((service, index) => (
              <article
                className="technical-services-card"
                key={service.title}
              >
                <div className="technical-services-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                <div className="technical-services-card-content">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="technical-services-read-more"
                  >
                    Read More
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

export default TechnicalServices;