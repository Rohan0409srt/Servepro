import React from "react";
import "../../../style/WaterTeatmentSystem.css";

import banner from "../../../assets/images/1servepro/service-main-banner/tech-main-banner.jpeg";

import img1 from "../../../assets/images/1servepro/Technical_service/Water-Treatment/2 Wastewater & Effluent Treatment.jpg";

const WaterTeatmentSystem = () => {
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
              How do professional water treatment services improve water
              quality, remove contaminants, and support safe and sustainable
              water management?
            </h1>

            <span className="technical-service-border"></span>

            <p>
              Water Treatment Services focus on removing contaminants from
              water and wastewater to improve water quality and support safe,
              efficient, and environmentally responsible water management.
              Services may address industrial wastewater, domestic
              wastewater, well water, pools, fountains, drinking water,
              industrial water, and other applications according to their
              treatment requirements.
            </p>
          </div>

          <div className="technical-service-list">

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Contaminant Removal &amp; Water Quality</h2>
                <ul>
                  <li>Focuses on removing contaminants</li>
                  <li>Improving water quality</li>
                  <li>Water purification and treatment support</li>
                  <li>Water quality management</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Water Treatment Service" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Wastewater &amp; Effluent Treatment</h2>
                <ul>
                  <li>Treats wastewater from industries</li>
                  <li>Helps meet regulatory standards</li>
                  <li>Protects the environment</li>
                  <li>Industrial wastewater treatment solutions</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Wastewater Treatment" />
              </div>
            </div>

            <div className="technical-service-card">
              <div className="technical-service-text">
                <h2>Domestic &amp; Well Water Treatment</h2>
                <ul>
                  <li>Treating wastewater from homes and businesses</li>
                  <li>Addresses contaminants in well water</li>
                  <li>Domestic water treatment support</li>
                  <li>Water hygiene and safety management</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Domestic Water Treatment" />
              </div>
            </div>

            <div className="technical-service-card reverse">
              <div className="technical-service-text">
                <h2>Pool, Fountain &amp; Special Water Systems</h2>
                <ul>
                  <li>Ensures safety and hygiene of water in pools</li>
                  <li>Water treatment for fountains</li>
                  <li>Improving water quality for various purposes</li>
                  <li>Support for industrial and wastewater treatment</li>
                </ul>
              </div>

              <div className="technical-service-image">
                <img src={img1} alt="Water Treatment Systems" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterTeatmentSystem;