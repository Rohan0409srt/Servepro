import React from "react";
import "../../../style/JetCleaning.css";

import banner from "../../../assets/images/1servepro/special-service/Jet-cleaning/banner.jpg";

import img1 from "../../../assets/images/1servepro/special-service/Jet-cleaning/1High-Pressure Jet.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Jet-cleaning/2 Industrial & Infrastructure Cleaning.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Jet-cleaning/3 Drainage, HVAC & Utility Cleaning.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Jet-cleaning/4 Surface Restoration & Environmental Safety.jpg";

const JetCleaning = () => {
  return (
    <div className="jet-cleaning-page">

      <section
        className="jet-cleaning-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="jet-cleaning-banner-overlay"></div>
      </section>

      <section className="jet-cleaning-section">
        <div className="jet-cleaning-container">

          <div className="jet-cleaning-intro">
            <h1>
              How does professional jet cleaning service effectively remove
              stubborn dirt, grease, and blockages using high-pressure water
              technology?
            </h1>

            <span className="jet-cleaning-border"></span>

            <p>
              Jet Cleaning Service uses advanced high-pressure water jets to
              remove tough dirt, grease, mold, rust, and blockages from
              industrial equipment, pipelines, drains, surfaces, and HVAC
              systems. Powered by high-pressure pumps and precision nozzles,
              the service delivers deep, chemical-free cleaning that restores
              surfaces, improves efficiency, and extends equipment life. Ideal
              for industrial, commercial, and facility maintenance needs, jet
              cleaning ensures thorough sanitation, enhanced safety, and
              optimal performance.
            </p>
          </div>

          <div className="jet-cleaning-service-list">

            {/* 1 */}
            <div className="jet-cleaning-card">
              <div className="jet-cleaning-text">
                <h2>High-Pressure Jet Cleaning Technology</h2>

                <ul>
                  <li>Jet Cleaning Service</li>
                  <li>High-Pressure Jet Cleaning Technology</li>
                  <li>Precision Nozzle and Pump System</li>
                  <li>Deep Cleaning Without Chemicals</li>
                </ul>
              </div>

              <div className="jet-cleaning-image">
                <img
                  src={img1}
                  alt="High-Pressure Jet Cleaning Technology"
                />
              </div>
            </div>

            {/* 2 */}
            <div className="jet-cleaning-card reverse">
              <div className="jet-cleaning-text">
                <h2>Industrial &amp; Infrastructure Cleaning</h2>

                <ul>
                  <li>Industrial Equipment Jet Cleaning</li>
                  <li>Pipeline and Tank Cleaning Services</li>
                  <li>Industrial Jet Cleaning Solutions</li>
                  <li>Surface Preparation Using Jet Spray</li>
                </ul>
              </div>

              <div className="jet-cleaning-image">
                <img
                  src={img2}
                  alt="Industrial & Infrastructure Cleaning"
                />
              </div>
            </div>

            {/* 3 */}
            <div className="jet-cleaning-card">
              <div className="jet-cleaning-text">
                <h2>Drainage, HVAC &amp; Utility Cleaning</h2>

                <ul>
                  <li>Hydro Jet Drain and Sewer Cleaning</li>
                  <li>HVAC and AC Coil Jet Cleaning</li>
                  <li>Grease and Sediment Removal</li>
                  <li>Improved System Performance</li>
                </ul>
              </div>

              <div className="jet-cleaning-image">
                <img
                  src={img3}
                  alt="Drainage, HVAC & Utility Cleaning"
                />
              </div>
            </div>

            {/* 4 */}
            <div className="jet-cleaning-card reverse">
              <div className="jet-cleaning-text">
                <h2>Surface Restoration &amp; Environmental Safety</h2>

                <ul>
                  <li>Customer Communication and Issue Explanation</li>
                  <li>Work Records and Service Documentation</li>
                  <li>Service History Tracking and Reporting</li>
                  <li>Operational Transparency and Accountability</li>
                </ul>
              </div>

              <div className="jet-cleaning-image">
                <img
                  src={img4}
                  alt="Surface Restoration & Environmental Safety"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default JetCleaning;