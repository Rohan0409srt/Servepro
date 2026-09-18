import React from "react";
import { Link } from "react-router-dom";
import "../../../style/HelpDesk.css";

import bannerImg from "../../../assets/images/1servepro/Business_Support_Services/help-desk/Banner.jpg";

import supportImg from "../../../assets/images/1servepro/Business_Support_Services/help-desk/servepro_executive_exact_400x331.jpg";
import userSupportImg from "../../../assets/images/1servepro/Business_Support_Services/help-desk/web1.jpg";
import ticketingImg from "../../../assets/images/1servepro/Business_Support_Services/help-desk/web2.jpg";
import knowledgeImg from "../../../assets/images/1servepro/Business_Support_Services/help-desk/web3.png";

const helpDeskSections = [
  {
    id: 1,
    title: "Core Technical Support",
    image: supportImg,
    alt: "Core Technical Support",
    items: [
      "Incident Resolution",
      "Technical Troubleshooting Support",
      "Hardware and Software Assistance",
      "Remote Assistance and Monitoring",
      "System Performance and Health Monitoring",
    ],
  },
  {
    id: 2,
    title: "User Assistance & Communication",
    image: userSupportImg,
    alt: "User Assistance and Communication",
    reverse: true,
    items: [
      "User Support",
      "User Education and Awareness",
      "Customer Satisfaction Follow-ups",
      "Service Request Coordination",
    ],
  },
  {
    id: 3,
    title: "Ticketing & Escalation Management",
    image: ticketingImg,
    alt: "Ticketing and Escalation Management",
    items: [
      "Administrative Support",
      "Ticket Management",
      "Escalation",
      "SLA Tracking and Compliance",
      "Documentation and Reporting",
    ],
  },
  {
    id: 4,
    title: "Improvement & Knowledge Management",
    image: knowledgeImg,
    alt: "Improvement and Knowledge Management",
    reverse: true,
    items: [
      "Process Improvement",
      "HelpDesk Knowledge Base Management",
      "Service Analytics and Insights",
      "Continuous Workflow Optimization",
    ],
  },
];

const HelpDesk = () => {
  return (
    <main className="helpdesk-page">

      {/* =========================
          HERO / BANNER
      ========================== */}
      <section
        className="helpdesk-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
      >
        <div className="helpdesk-banner-overlay">
          <div className="helpdesk-container">
            <div className="helpdesk-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/services">Services</Link>
              <span>/</span>
              <Link to="/business-support-service">
                Business Support Services
              </Link>
              <span>/</span>
              <span>HelpDesk Services</span>
            </div>

            <h1>HelpDesk Services</h1>
          </div>
        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="helpdesk-section">
        <div className="helpdesk-container">

          <div className="helpdesk-section-title">
            <h2>
              What are the key responsibilities of a HelpDesk service in
              resolving incidents, supporting users, and managing technical
              issues efficiently?
            </h2>

            <span className="helpdesk-title-border"></span>

            <p>
              HelpDesk services ensure smooth technical operations by
              diagnosing and resolving user issues, guiding employees through
              troubleshooting steps, and maintaining accurate ticket records
              for timely support. By categorizing and tracking incidents
              within a ticketing system, escalating complex problems to
              higher-level teams, and identifying recurring issues, the
              HelpDesk enhances efficiency, improves user experience, and
              contributes to continuous process improvement across the
              organization.
            </p>
          </div>

          {/* =========================
              SERVICE CARDS
          ========================== */}
          <div className="helpdesk-service-list">

            {helpDeskSections.map((service) => (
              <article
                className={`helpdesk-service-card ${
                  service.reverse ? "helpdesk-reverse" : ""
                }`}
                key={service.id}
              >
                <div className="helpdesk-service-content">
                  <h3>{service.title}</h3>

                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="helpdesk-service-image">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading={service.id === 1 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>
      

    </main>
  );
};

export default HelpDesk;