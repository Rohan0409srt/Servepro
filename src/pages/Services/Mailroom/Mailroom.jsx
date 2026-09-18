
import React from "react";
import { Link } from "react-router-dom";
import "../../../style/Mailroom.css";

import bannerImg from "../../../assets/images/1servepro/Business_Support_Services/Mailroom-Services/banner.jpg";

import mailHandlingImg from "../../../assets/images/1servepro/Business_Support_Services/Mailroom-Services/1 Mail Handling & Processing Operations.jpg";

import storageImg from "../../../assets/images/1servepro/Business_Support_Services/Mailroom-Services/2 Storage Management.jpg";

import documentationImg from "../../../assets/images/1servepro/Business_Support_Services/Mailroom-Services/3 Digital Documentation & Record Control.jpg";

import complianceImg from "../../../assets/images/1servepro/Business_Support_Services/Mailroom-Services/4 Compliance & Quality Assurance.jpg";

const mailroomServices = [
  {
    id: 1,
    title: "Mail Handling & Processing Operations",
    image: mailHandlingImg,
    alt: "Mail Handling & Processing Operations",
    items: [
      "Receiving and Sorting of Mails",
      "Delivering Mail and Packages to Recipients",
      "Outgoing Mail Management",
      "Internal Mail Distribution Management",
      "Urgent and Priority Mail Handling",
      "Bulk Mail Handling and Distribution",
      "Return-to-Sender Processing",
      "Lost or Misrouted Mail Prevention",
      "Mail Forwarding and Redirection Services",
    ],
  },
  {
    id: 2,
    title: "Courier, Logistics & Storage Management",
    image: storageImg,
    alt: "Courier, Logistics & Storage Management",
    reverse: true,
    items: [
      "Managing Deliveries from Various Couriers",
      "Courier Coordination and Scheduling",
      "Package Storage and Retrieval System",
      "Inventory Management of Mail Supplies",
      "Daily Mailroom Workflow Scheduling",
      "Mailroom Equipment Operation & Upkeep",
      "Service Level Monitoring and Performance Tracking",
    ],
  },
  {
    id: 3,
    title: "Digital Documentation & Record Control",
    image: documentationImg,
    alt: "Digital Documentation & Record Control",
    items: [
      "Document Scanning and Digitization",
      "Mail Tracking and Record Management",
      "Mailroom Reporting and Analytics",
      "Record Retention and Archiving",
      "Interdepartmental Communication Support",
      "Customer Query Handling",
    ],
  },
  {
    id: 4,
    title: "Security, Compliance & Quality Assurance",
    image: complianceImg,
    alt: "Security, Compliance & Quality Assurance",
    reverse: true,
    items: [
      "Mailroom Security and Compliance",
      "Confidential Document Handling Protocols",
      "Mailroom Audit and Compliance Checks",
      "Signature Collection for Sensitive Deliveries",
      "Mailroom Workflow Optimization",
    ],
  },
];

const Mailroom = () => {
  return (
    <main className="mailroom-page">

      {/* =========================
          BANNER
      ========================== */}
      <section
        className="mailroom-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
      >
        <div className="mailroom-banner-overlay">
          <div className="mailroom-container">
            <div className="mailroom-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>

              <Link to="/services">Services</Link>
              <span>/</span>

              <Link to="/business-support-service">
                Business Support Services
              </Link>
              <span>/</span>

              <span>Mailroom Services</span>
            </div>

            <h1>Mailroom Services</h1>
          </div>
        </div>
      </section>


      {/* =========================
          INTRO + SERVICES
      ========================== */}
      <section className="mailroom-section">
        <div className="mailroom-container">

          <div className="mailroom-section-title">

            <h2>
              How does a mailroom service ensure efficient, secure, and
              well-organized handling of all incoming and outgoing mail and
              courier operations within an organization?
            </h2>

            <span className="mailroom-title-border"></span>

            <p>
              Mailroom services ensure the smooth, secure, and timely handling
              of all incoming and outgoing mail, parcels, and courier
              deliveries within an organization. The service focuses on
              accurately receiving, sorting, distributing, and dispatching
              items while maintaining proper documentation and security
              protocols. Through systematic digitization, tracking, and
              reporting, the mailroom enhances operational efficiency, reduces
              delays, and ensures every delivery reaches the right person at
              the right time. By adhering to compliance standards and
              maintaining seamless coordination with staff and courier
              partners, the mailroom plays a crucial role in supporting daily
              business operations and organizational workflow.
            </p>

          </div>


          {/* =========================
              SERVICE CARDS
          ========================== */}
          <div className="mailroom-service-list">

            {mailroomServices.map((service) => (
              <article
                className={`mailroom-service-card ${
                  service.reverse ? "mailroom-reverse" : ""
                }`}
                key={service.id}
              >

                <div className="mailroom-service-content">

                  <h3>{service.title}</h3>

                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>


                <div className="mailroom-service-image">
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

export default Mailroom;