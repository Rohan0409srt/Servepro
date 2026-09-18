import React from "react";
import "../../../style/MechnicalElectrical.css";

import banner from "../../../assets/images/1servepro/service-main-banner/tech-main-banner.jpeg";

import img1 from "../../../assets/images/1servepro/Technical_service/Mechanical-Electrical/1 inspection, Diagnostics & Testing.png";

const MechnicalElectrical = () => {
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
              How do professional mechanical and electrical services ensure
              safe, reliable, and efficient building systems?
            </h1>

            <span className="technical-service-border"></span>

            <p>
              Mechanical and Electrical Services support the design,
              installation, testing, commissioning, maintenance, and ongoing
              operation of essential building systems. These services include
              power generation, lighting, fire alarm systems, communication
              networks, Building Management Systems, emergency power
              equipment, and other electrical infrastructure to support
              reliable facility operations.
            </p>
          </div>

          <div className="technical-service-list">

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Power &amp; Electrical Systems</h2>
                <ul>
                  <li>Design &amp; install system for power generation</li>
                  <li>Fixing up the lighting systems</li>
                  <li>Electrical system installation</li>
                  <li>Power distribution system support</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Mechanical and Electrical Service" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Fire, Communication &amp; BMS Systems</h2>
                <ul>
                  <li>Installing fire alarm system</li>
                  <li>Configuring communication networks</li>
                  <li>Integrating electrical systems with BMS</li>
                  <li>Building system integration and monitoring</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Electrical Systems" />
              </div>
            </div>

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Emergency Power &amp; Equipment</h2>
                <ul>
                  <li>Maintaining emergency power generators &amp; UPS</li>
                  <li>Emergency power system maintenance</li>
                  <li>Equipment inspection and testing</li>
                  <li>Reliable backup power support</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Emergency Power Systems" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Testing, Commissioning &amp; Maintenance</h2>
                <ul>
                  <li>Testing and commissioning all M&amp;E systems</li>
                  <li>Providing ongoing maintenance and support</li>
                  <li>Inspection and diagnostics</li>
                  <li>Preventive maintenance services</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Testing and Commissioning" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MechnicalElectrical;