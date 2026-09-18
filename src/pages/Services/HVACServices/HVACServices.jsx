import React from "react";
import "../../../style/HVACServices.css";

import banner from "../../../assets/images/1servepro/service-main-banner/tech-main-banner.jpeg";
import img1 from "../../../assets/images/1servepro/Technical_service/HVAC/1 HVAC Installation .jpg";

const HVACServices = () => {
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
              How does professional HVAC service ensure reliable climate
              control, system efficiency, and long-term equipment performance?
            </h1>

            <span className="technical-service-border"></span>

            <p>
              HVAC Service focuses on the installation, maintenance,
              troubleshooting, testing, and repair of heating, ventilation,
              and air-conditioning systems. Professional HVAC services help
              maintain comfortable indoor conditions, support system
              efficiency, identify faults, and ensure equipment operates
              according to required quality and safety standards.
            </p>
          </div>

          <div className="technical-service-list">

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>HVAC Installation &amp; Setup</h2>
                <ul>
                  <li>Installing new HVAC systems &amp; components</li>
                  <li>Professional HVAC system installation</li>
                  <li>HVAC component setup and connection</li>
                  <li>System testing after installation</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="HVAC Installation" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Maintenance &amp; Troubleshooting</h2>
                <ul>
                  <li>Performing routine maintenance tasks</li>
                  <li>Diagnosing and repairing HVAC systems</li>
                  <li>Identifying equipment faults and malfunctions</li>
                  <li>Preventive HVAC maintenance services</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="HVAC Maintenance" />
              </div>
            </div>

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Testing &amp; Quality Control</h2>
                <ul>
                  <li>Testing HVAC systems to ensure quality standards</li>
                  <li>Performance inspection and system checking</li>
                  <li>HVAC efficiency monitoring</li>
                  <li>System performance verification</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="HVAC Testing" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Safety, Records &amp; Customer Support</h2>
                <ul>
                  <li>Communicating with customers and explaining issues</li>
                  <li>Keeping records of work performed</li>
                  <li>Adhering to safety regulations</li>
                  <li>Following industry standards</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="HVAC Service Support" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HVACServices;