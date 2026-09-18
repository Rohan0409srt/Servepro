import React from "react";
import { Link } from "react-router-dom";
import "../../../style/SpecializedServices.css";

import bannerImg from "../../../assets/images/1servepro/service-main-banner/special-main-banner.jpeg";

import homeCleaningImg from "../../../assets/images/1servepro/special-service/Home-Cleaning/1 Bedroom.jpg";
import officeCleaningImg from "../../../assets/images/1servepro/special-service/SC-officedeep-card1.png";
import carpetImg from "../../../assets/images/1servepro/special-service/SC-carper-card1.png";
import upholsteryShampooImg from "../../../assets/images/1servepro/special-service/Upholstery-Shampooing/2Stain Treatment & Foam Cleaning.jpg";
import upholsterySteamImg from "../../../assets/images/1servepro/special-service/SC-steaming-card1.png";
import marbleImg from "../../../assets/images/1servepro/special-service/sc-wodden-carrd1.png";
import facadeImg from "../../../assets/images/1servepro/special-service/Glass-Facade-Cleaning/2 Glass Cleaning, Stain Removal.jpg";
import warehouseImg from "../../../assets/images/1servepro/special-service/SC-warehouse-card1.jpg";
import jetCleaningImg from "../../../assets/images/1servepro/special-service/Jet-cleaning/Jet Pressure 2.JPG";
import waterTankImg from "../../../assets/images/1servepro/special-service/Water-Tank-Cleaning_/1 Tank Draining & Preparation.jpg";

const specializedServices = [
  {
    title: "Home Cleaning Service",
    image: homeCleaningImg,
    path: "/specialized-cleaning-service-homecleaning",
    items: [
      "Complete home cleaning from ceiling to flooring",
      "Deep cleaning of kitchen and washroom areas",
      "Dusting of all appliances and surfaces",
      "Vacuuming or shampooing of upholstery",
      "Germ-free cleaning for living hall and bedroom",
      "Create a more enjoyable living space for your loved one",
    ],
  },
  {
    title: "Office Deep Cleaning Service",
    image: officeCleaningImg,
    path: "/specialized-cleaning-service-officedeepcleaning",
    items: [
      "Flooring Cleaning with Scrubbing machine",
      "Dusting of all the appliance",
      "Cabinet Cleaning",
      "Cobweb Removal & Ceiling cleaning",
      "Cleaning of lighting & fixtures",
      "Furniture Dusting",
      "Vacuuming of carpets/upholstery",
      "Cleaning of your Pantry areas",
      "Cleaning & Sanitization of Washroom",
      "Glass/Facade Cleaning",
    ],
  },
  {
    title: "Carpet Shampooing Service",
    image: carpetImg,
    path: "/specialized-cleaning-service-carpetshampooing",
    items: [
      "Dry vacuuming carpet",
      "Spot removal with special chemicals",
      "Foam treatment & scrubbing",
      "Extraction with advance machines",
      "Dehumidifier to dry carpet & upholstery",
    ],
  },
  {
    title: "Upholstery Shampooing Service",
    image: upholsteryShampooImg,
    path: "/specialized-cleaning-service-upholsteryshampooing",
    items: [
      "Dry vacuuming of upholstery",
      "Spot Removal with special chemicals",
      "Foam Treatment & Scrubbing",
      "Extraction with advance machines",
      "Dehumidifier: To dry upholstery",
    ],
  },
  {
    title: "Upholstery Steaming Service",
    image: upholsterySteamImg,
    path: "/specialized-cleaning-service-upholsterysteaming",
    items: [
      "Vacuuming of Dust Particles",
      "Spot Removal",
      "Steam treatment to disinfect",
      "Residual moisture & Dust Vacuumed",
      "Allow to complete dry of upholstery",
    ],
  },
  {
    title: "Wooden/ Marble Polishing Service",
    image: marbleImg,
    path: "/specialized-cleaning-service-woodenmarblepolishing",
    items: [
      "Gently Clean the surface",
      "Stain removal",
      "Applying Polish to Marble",
      "Buffing until glossy finishing",
      "Check of imperfection",
      "Apply marble sealer",
    ],
  },
  {
    title: "Glass/Facade Cleaning Service",
    image: facadeImg,
    path: "/specialized-cleaning-service-glassfacade",
    items: [
      "Apply the cleaning solution or water",
      "Gently scrub the facade with a soft brush",
      "Rinse the facade with clean water",
      "Water Based Cleaning (Regular)",
      "Chemical Cleaning (for Soft Stain)",
      "Abrasive Cleaning (for Hard Stain)",
    ],
  },
  {
    title: "Warehouse Cleaning Service",
    image: warehouseImg,
    path: "/specialized-cleaning-service-warehousecleaning",
    items: [
      "Daily Sweeping and Spot Cleaning",
      "Periodical Deep Cleaning",
      "Waste Management",
      "Restroom Cleaning",
      "Transportation Equipment cleaning",
      "Equipment Maintenance",
    ],
  },
  {
    title: "Jet Cleaning Service",
    image: jetCleaningImg,
    path: "/specialized-cleaning-service-jetcleaning",
    items: [
      "Daily Sweeping and Spot Cleaning",
      "Periodical Deep Cleaning",
      "Waste Management",
      "Restroom Cleaning",
      "Transportation Equipment cleaning",
      "Equipment Maintenance",
    ],
  },
  {
    title: "Water Tank Cleaning Service",
    image: waterTankImg,
    path: "/specialized-cleaning-service-watertankcleaning",
    items: [
      "Emptying the Tank",
      "scrubbing the interior",
      "Rinsing of tank",
      "Disinfecting & Sanitizing",
      "Refill Cleaned water",
    ],
  },
];

const SpecializedServices = () => {
  return (
    <div className="special-overview-page">

      {/* Banner */}
      <section
        className="special-overview-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
        aria-label="Specialized Cleaning Services"
      >
        <div className="special-overview-banner-overlay"></div>
      </section>

      {/* Main Content */}
      <section className="special-overview-section">
        <div className="special-overview-container">

          {/* Introduction */}
          <div className="special-overview-intro">
            <h1>
              Why the Specialized Cleaning Service is important for your
              premises?
            </h1>

            <span className="special-overview-border"></span>

            <p>
              Pest control services are important for maintaining a healthy
              and safe environment, protecting property, and safeguarding
              food supplies. Pests can carry diseases, damage homes and
              businesses, and contaminate food, highlighting the need for
              effective pest management.
            </p>
          </div>

          {/* Services Grid */}
          <div className="special-overview-grid">
            {specializedServices.map((service, index) => (
              <article
                className="special-overview-card"
                key={service.path}
              >
                {/* Image */}
                <div className="special-overview-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Content */}
                <div className="special-overview-card-content">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>

                  <Link
                    to={service.path}
                    className="special-overview-read-more"
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

export default SpecializedServices;