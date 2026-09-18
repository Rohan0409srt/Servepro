import React from "react";
import { Link } from "react-router-dom";
import "../../../style/BusinessSupport.css";

import bannerImg from "../../../assets/images/1servepro/service-main-banner/business-main-banner.jpeg";

import receptionImg from "../../../assets/images/1servepro/Business_Support_Services/Reception/web 1.png";
import helpdeskImg from "../../../assets/images/1servepro/Business_Support_Services/help-desk/web1.jpg";
import transportationImg from "../../../assets/images/1servepro/Business_Support_Services/Transportation-Management/1 Transportation Planning & Optimization.jpg";
import mailroomImg from "../../../assets/images/1servepro/Business_Support_Services/Mailroom-Services/1 Mail Handling & Processing Operations.jpg";
import officeSupportImg from "../../../assets/images/1servepro/Business_Support_Services/Office-Support-Staff/2Communication, Coordination & Reporting.jpg";
import staffingPayrollImg from "../../../assets/images/1servepro/Business_Support_Services/Staffing-Payroll/1Recruitment.jpg";

const services = [
  {
    title: "Reception Service Provider in Mumbai",
    image: receptionImg,
    points: [
      "Greeting & directing visitors",
      "Answering phone calls",
      "Managing emails",
      "Scheduling and coordinating meetings",
      "Assisting with administrative tasks",
      "Maintaining a professional environment",
      "Keeping the reception area tidy & organized",
    ],
    link: "/business-support-receptionservice",
  },
  {
    title: "Helpdesk Service Provider in Mumbai",
    image: helpdeskImg,
    points: [
      "Providing assistance to users, guiding them",
      "To diagnose and problem resolving",
      "Help user to get full access information",
      "Conveying technical info. clearly to users",
      "To Manage and track support requests",
      "Documenting interactions and solutions for ref.",
    ],
    link: "/business-support-helpdesk",
  },
  {
    title: "Transportation Management Service",
    image: transportationImg,
    points: [
      "Determining the most efficient routes for shipments",
      "Choosing the best carriers based on cost and reliability",
      "Loading vehicles to maximize space and minimize costs",
      "Coordinating to ensure timely delivery",
      "Negotiating favourable freight rates with carriers",
      "Maintaining transparency throughout the entire process",
      "Analysing transportation costs and preparing reports",
    ],
    link: "/business-support-transportationmangementservice",
  },
  {
    title: "Mailroom Service Provider in Mumbai",
    image: mailroomImg,
    points: [
      "Receiving and Sorting of mails.",
      "Delivering mail and packages to recipients",
      "Outgoing Mail Management",
      "Managing deliveries from various couriers",
      "Document Scanning and Digitization",
      "Mailroom Security and Compliance",
      "Mailroom Reporting and Analytics",
    ],
    link: "/business-support-mailroomservice",
  },
  {
    title: "Office Support Staff Service Provider",
    image: officeSupportImg,
    points: [
      "Administrative Support (Data entry, document preparation & assisting others)",
      "Scheduling Meeting l arrangements",
      "Handling incoming and outgoing calls/mails.",
      "Travel arrangement for employees",
      "Preparing reports, database",
      "Maintaining Office area clean & organized",
      "Maintaining office records and files",
    ],
    link: "/business-support-officesupportstaff",
  },
  {
    title: "Staffing & Payroll Service Provider",
    image: staffingPayrollImg,
    points: [
      "Connect Candidate/Job Sicker & Employer",
      "Help to fill temporary, contract positions",
      "To match candidates with job requirements",
      "Help to acquire talented & experience person",
      "Waste Disposal & maintain all area",
      "Manage payroll and all the Compliances",
    ],
    link: "/business-support-staffingandpayrollservice",
  },
];

const BusinessSupport = () => {
  return (
    <div className="business-support-page">

      {/* BANNER */}
      <section
        className="business-support-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
        aria-label="Business Support Services"
      >
        <div className="business-support-banner-overlay"></div>
      </section>

      {/* CONTENT */}
      <section className="business-support-section">
        <div className="business-support-container">

          {/* INTRO */}
          <div className="business-support-intro">
            <h1>
              How this Business Support Services can help you to manage the
              you organisation efficiently?
            </h1>

            <span className="business-support-border"></span>

            <p>
              Our Business Support Services are designed to help organizations
              operate efficiently and focus on what truly matters — their core
              business. We handle essential functions that streamline
              processes, reduce costs, and improve productivity. By outsourcing
              non-core tasks to our expert team, you gain more time to drive
              growth and innovation. With reliable support and seamless service
              delivery, we help you enhance customer satisfaction and build a
              strong, trusted brand reputation.
            </p>
          </div>

          {/* SERVICE GRID */}
          <div className="business-support-grid">
            {services.map((service, index) => (
              <article
                className="business-support-card"
                key={service.title}
              >
                <div className="business-support-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                <div className="business-support-card-content">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <Link
                    to={service.link}
                    className="business-support-read-more"
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

export default BusinessSupport;