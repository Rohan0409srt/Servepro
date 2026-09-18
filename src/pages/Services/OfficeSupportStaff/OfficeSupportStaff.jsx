import React from "react";
import "../../../style/OfficeSupportStaff.css";

import bannerImg from "../../../assets/images/1servepro/Business_Support_Services/Office-Support-Staff/banner.jpg";

import teamLeadershipImg from "../../../assets/images/1servepro/Business_Support_Services/Office-Support-Staff/1 Team Leadership & Workforce Supervision.jpg";

import communicationImg from "../../../assets/images/1servepro/Business_Support_Services/Office-Support-Staff/2Communication, Coordination & Reporting.jpg";

import workflowImg from "../../../assets/images/1servepro/Business_Support_Services/Office-Support-Staff/3 Workflow Management.jpg";

import workplaceImg from "../../../assets/images/1servepro/Business_Support_Services/Office-Support-Staff/4Workplace Environment.jpg";

const serviceCards = [
  {
    title: "Team Leadership & Workforce Supervision",
    image: teamLeadershipImg,
    alt: "Team Leadership & Workforce",
    points: [
      "Monitor Team Performance",
      "Motivate and Support Team Members",
      "Work Allocation",
      "Evaluate Team Performance",
      "Identify Training Needs",
      "Handle Disciplinary Actions",
      "Team Motivation and Engagement Initiatives",
      "New Employee Orientation Support",
    ],
  },
  {
    title: "Communication, Coordination & Reporting",
    image: communicationImg,
    alt: "Communication, Coordination & Reporting",
    reverse: true,
    points: [
      "Internal Communication",
      "Report to Management",
      "Hold Meetings",
      "Maintain Records",
      "Incident Reports",
      "Cross-Department Coordination",
      "Compliance Monitoring and Policy Enforcement",
    ],
  },
  {
    title: "Resource, Safety & Workflow Management",
    image: workflowImg,
    alt: "Resource, Safety & Workflow",
    points: [
      "Ensure Adequate Resources",
      "Maintain Safety Standards",
      "Workflow Optimization and Process Improvement",
      "Quality Assurance Oversight",
      "Ensure Adherence to Deadlines",
      "Manage Shift Schedules",
    ],
  },
  {
    title: "Conflict Resolution & Workplace Environment Support",
    image: workplaceImg,
    alt: "Conflict Resolution",
    reverse: true,
    points: [
      "Address Conflicts",
      "Promote Team Collaboration",
      "Support a Positive Work Environment",
      "Assist in Policy Implementation",
    ],
  },
];

export default function OfficeSupportStaff() {
  return (
    <div className="office-support-page">

      {/* Banner */}
      <section
        className="office-support-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
        aria-label="Office Support Staff"
      >
        <div className="office-support-banner-overlay" />
      </section>

      {/* Main Content */}
      <section className="office-support-section">
        <div className="office-support-container">

          {/* Intro */}
          <div className="office-support-intro">
            <h2>
              What key responsibilities enable an Office Assistant to support
              smooth, efficient, and well-organized daily operations within a
              corporate office?
            </h2>

            <span className="office-support-border" />

            <p>
              The Office Assistant plays a key role in ensuring the smooth and
              efficient functioning of the corporate office by managing daily
              logistical tasks, supporting administrative operations, and
              maintaining a well-organized work environment. Their
              responsibilities include handling errands, managing mail,
              assisting with meeting room setups, maintaining cleanliness in
              common areas, monitoring office supplies, and providing
              courteous support to staff and visitors. By coordinating basic
              clerical duties and promptly reporting maintenance needs, the
              Office Assistant helps maintain professional standards and
              contributes to seamless day-to-day office operations.
            </p>
          </div>

          {/* Service Cards */}
          <div className="office-support-service-list">
            {serviceCards.map((service, index) => (
              <article
                className={`office-support-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={service.title}
              >
                <div className="office-support-card-text">
                  <h3>{service.title}</h3>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="office-support-card-image">
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