import React from "react";
import "../../../style/PlumbingCarpentry.css";

import banner from "../../../assets/images/1servepro/Technical_service/Plumbing-Carpentry/banner.jpg";

import img1 from "../../../assets/images/1servepro/Technical_service/Plumbing-Carpentry/1Installation.jpg";
import img2 from "../../../assets/images/1servepro/Technical_service/Plumbing-Carpentry/2Repair, Maintenance.jpg";
import img3 from "../../../assets/images/1servepro/Technical_service/Plumbing-Carpentry/3 Safety, Compliance & Quality Control.jpg";
import img4 from "../../../assets/images/1servepro/Technical_service/Plumbing-Carpentry/4 Coordination & Skill Development.jpg";

const PlumbingCarpentry = () => {
  return (
    <div className="technical-service-page">
      <section
        className="technical-service-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="technical-service-banner-overlay"></div>
      </section>

      <section className="technical-service-section">
        <div className="technical-service-container">

          <div className="technical-service-intro">
            <h1>
              How do plumbing and carpentry services ensure safe installation,
              effective repairs, regulatory compliance, and long-term
              durability of building systems and structures?
            </h1>

            <span className="technical-service-border"></span>

            <p>
              Plumbing and carpentry services focus on the installation,
              repair, and maintenance of essential building systems and
              structures to ensure safety, functionality, and durability.
              These services include fitting piping systems and fixtures,
              maintaining plumbing networks, constructing and repairing
              structural elements, and installing interior and exterior
              components. By following building codes, conducting
              inspections, interpreting technical drawings, and collaborating
              with other professionals, plumbing and carpentry services
              support efficient construction, maintenance, and long-term
              asset reliability.
            </p>
          </div>

          <div className="technical-service-list">

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Installation &amp; Construction Services</h2>
                <ul>
                  <li>Piping System Installation and Assembly</li>
                  <li>Plumbing Fixture Installation</li>
                  <li>Appliance Installation and Connection</li>
                  <li>Construction and Structural Installation</li>
                  <li>Building Frameworks and Structures</li>
                  <li>Fixture, Door, and Cabinet Installation</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Installation and Construction Services" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Repair, Maintenance &amp; Troubleshooting</h2>
                <ul>
                  <li>Plumbing Troubleshooting and Repairs</li>
                  <li>Leak Detection and Repair</li>
                  <li>Pipe and Fixture Repair Services</li>
                  <li>Preventive Plumbing Maintenance</li>
                  <li>Repair and Maintenance of Structures</li>
                  <li>Preventive Repair and Maintenance Services</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img2} alt="Repair Maintenance and Troubleshooting" />
              </div>
            </div>

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Safety, Compliance &amp; Quality Control</h2>
                <ul>
                  <li>Plumbing Code Compliance and Inspections</li>
                  <li>Safety and Building Code Compliance</li>
                  <li>On-Site Inspection and Quality Assurance</li>
                  <li>Reading Blueprints and Building Plans</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img3} alt="Safety Compliance and Quality Control" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Planning, Coordination &amp; Skill Development</h2>
                <ul>
                  <li>Plumbing Cost Estimation</li>
                  <li>Cost Estimation and Project Planning</li>
                  <li>Coordination with Other Contractors</li>
                  <li>Collaboration with Construction Teams</li>
                  <li>Training and Mentoring Apprentices</li>
                  <li>Apprentice Training and Skill Development</li>
                  <li>Multi-Trade Coordination and Support</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img4} alt="Planning Coordination and Skill Development" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PlumbingCarpentry;