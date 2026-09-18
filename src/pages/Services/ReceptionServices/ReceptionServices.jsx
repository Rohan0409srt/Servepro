import React from "react";
import "../../../style/ReceptionServices.css";

import bannerImg from "../../../assets/images/1servepro/Business_Support_Services/Reception/banner.jpg";

import frontDeskImg from "../../../assets/images/1servepro/Business_Support_Services/Reception/web 1.png";
import communicationImg from "../../../assets/images/1servepro/Business_Support_Services/Reception/web 2.png";
import administrativeImg from "../../../assets/images/1servepro/Business_Support_Services/Reception/web3.png";
import safetyImg from "../../../assets/images/1servepro/Business_Support_Services/Reception/web4.png";

const receptionServices = [
  {
    title: "Front Desk & Visitor Management",
    image: frontDeskImg,
    alt: "Front Desk & Visitor",
    points: [
      "Front Desk Management",
      "Greet & Direct All Visitors",
      "Visitor Sign-in and Security Management",
      "Maintaining Reception Area Appearance",
      "Visitor Experience Management",
      "Customer Service Excellence",
    ],
  },
  {
    title: "Communication & Coordination",
    image: communicationImg,
    alt: "Communication & Coordination",
    reverse: true,
    points: [
      "Communication Hub",
      "Handling Phone Calls",
      "Managing Mail and Deliveries",
      "Internal Communication Assistance",
      "Providing Company Information",
    ],
  },
  {
    title: "Administrative & Office Support",
    image: administrativeImg,
    alt: "Administrative",
    points: [
      "Administrative Support",
      "Meeting Room Scheduling",
      "Office Supplies & Inventory Control",
      "Clerical Support Tasks",
      "Record Keeping and Documentation Support",
      "Meeting & Conference Coordination",
    ],
  },
  {
    title: "Safety, Environment & Emergency Assistance",
    image: safetyImg,
    alt: "Safety, Environment & Emergency",
    reverse: true,
    points: [
      "Professional Environment Maintenance",
      "Emergency Handling and Front-Point Assistance",
      "Office Coordination and Support",
    ],
  },
];

export default function Reception() {
  return (
    <div className="reception-page">

      {/* =========================
          BANNER
      ========================== */}
      <section
        className="reception-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
      >
        <div className="reception-banner-overlay">
          <div className="reception-container">
            <h1>Reception Services</h1>
          </div>
        </div>
      </section>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <section className="reception-section">
        <div className="reception-container">

          {/* Intro */}
          <div className="reception-section-title">
            <h2>
              What are the key responsibilities of a receptionist in managing
              front desk operations, communication flow, and administrative
              support within an office?
            </h2>

            <span className="reception-title-border"></span>

            <p>
              A receptionist plays a vital role in ensuring smooth front desk
              operations by professionally greeting visitors, managing
              security protocols, and maintaining a tidy reception area.
              Acting as the communication hub, they handle calls, mail,
              deliveries, and provide essential company information. They
              also support administrative tasks such as scheduling meetings,
              managing office supplies, maintaining records, and coordinating
              daily office activities to ensure efficiency and
              professionalism across the workplace.
            </p>
          </div>

          {/* Services */}
          <div className="reception-service-list">

            {receptionServices.map((service, index) => (
              <article
                key={service.title}
                className={`reception-service-card ${
                  service.reverse ? "reception-reverse" : ""
                }`}
              >
                <div className="reception-service-content">
                  <h3>{service.title}</h3>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="reception-service-image">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
}