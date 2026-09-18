import React from "react";
import { Link } from "react-router-dom";
import "../../../style/PestControl.css";

import bannerImg from "../../../assets/images/1servepro/service-main-banner/pest-main-banner.jpeg";

import generalDisinfectionImg from "../../../assets/images/1servepro/PestControl/General-Disinfection/3 Hygiene & Infection Control.jpg";
import fumigationImg from "../../../assets/images/1servepro/PestControl/Fumigation/1 Fumigation Methods.jpg";
import antiLarvaeImg from "../../../assets/images/1servepro/PestControl/PC-anitlarve-card1.png";
import birdNettingImg from "../../../assets/images/1servepro/PestControl/Bird-Netting/2 Protection & Effectiveness.jpg";
import rodentImg from "../../../assets/images/1servepro/PestControl/PC-rodent-card1.png";
import termiteImg from "../../../assets/images/1servepro/PestControl/Termite-Control/1 Drilling Method for Termite Treatment.jpg";

const pestServices = [
  {
    title: "General Disinfection Service Provider",
    image: generalDisinfectionImg,
    items: [
      "Spraying technique for manual surface disinfection",
      "Effective coverage for small areas",
      "Fogging technique for highly concentrated areas",
      "Long-lasting contact time for deeper disinfection",
      "Follow-up spray treatment for complete sanitation",
      "Special focus on high-touch points (doorknobs, light switches, tables)",
    ],
    link: "/pest-control-service-generaldisfection",
  },

  {
    title: "Fumigation Service Provider",
    image: fumigationImg,
    items: [
      "Powerful method for pest elimination using toxic gases",
      "Targets pests within enclosed spaces and hard-to-reach areas",
      "Effective against a wide range of pests",
      "Includes insects, termites, and bed bugs",
    ],
    link: "/pest-control-service-fumigation",
  },

  {
    title: "Anti-Larvae Treatment Service Provider",
    image: antiLarvaeImg,
    items: [
      "Larvicide treatment uses pesticides to kill mosquito larvae",
      "Prevents larvae from developing into biting adult mosquitoes",
      "Helps reduce the overall mosquito population",
      "Lessens the need for adulticide treatments",
      "Used as a preventive approach to control mosquito growth",
    ],
    link: "/pest-control-service-anitlarvaetreatement",
  },

  {
    title: "Bird Netting Service Provider",
    image: birdNettingImg,
    items: [
      "Measure the area to be covered",
      "Choose the appropriate netting material",
      "Install anchor points along the perimeter",
      "Drape and secure the netting with cable ties or clips",
      "Cut and shape netting to fit uneven surfaces",
    ],
    link: "/pest-control-service-birdnetting",
  },

  {
    title: "Rodent Control Service Provider",
    image: rodentImg,
    items: [
      "Trapping methods for effective rodent control",
      "Snap traps – traditional & effective method",
      "Live traps – allow capture of rodents without harming",
      "Glue traps – sticky traps placed in active rodent areas",
      "Baiting methods using bait stations with rodenticide",
    ],
    link: "/pest-control-service-rodantcontrol",
  },

  {
    title: "Termite Control Service Provider",
    image: termiteImg,
    items: [
      "Drill holes into infested wood or walls",
      "Inject termiticide solution into the drilled holes",
      "Seal the drill holes to prevent further termite entry",
      "Used in existing buildings with active termite infestation",
    ],
    link: "/pest-control-service-termitecontrolservice",
  },
];

const PestControl = () => {
  return (
    <div className="pc-overview-page">

      {/* =====================================================
          BANNER
      ====================================================== */}
      <section
        className="pc-overview-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
        aria-label="Pest Control Services"
      >
        <div className="pc-overview-banner-overlay"></div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="pc-overview-section">
        <div className="pc-overview-container">

          {/* INTRO */}
          <div className="pc-overview-intro">

            <h1>
              Why the Pest control service is important for your premises?
            </h1>

            <span className="pc-overview-intro-border"></span>

            <p>
              Pest control services are important for maintaining a healthy
              and safe environment, protecting property, and safeguarding
              food supplies. Pests can carry diseases, damage homes and
              businesses, and contaminate food, highlighting the need for
              effective pest management.
            </p>

          </div>

          {/* =================================================
              SERVICE GRID
          ================================================== */}
          <div className="pc-overview-grid">

            {pestServices.map((service, index) => (
              <article
                className="pc-overview-card"
                key={service.title}
              >

                {/* IMAGE - ALWAYS TOP */}
                <div className="pc-overview-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* CONTENT */}
                <div className="pc-overview-card-content">

                  <h2>
                    {service.title}
                  </h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* READ MORE - ALWAYS BOTTOM */}
                  <Link
                    to={service.link}
                    className="pc-overview-read-more"
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

export default PestControl;