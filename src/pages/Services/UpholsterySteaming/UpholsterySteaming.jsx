import React from "react";
import "../../../style/UpholsterySteaming.css";

import banner from "../../../assets/images/1servepro/special-service/Steaming/banner.jpg";

import img1 from "../../../assets/images/1servepro/special-service/Steaming/1Pre-Cleaning & Dust Removal.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Steaming/2Stain Treatment & Steam Sanitization.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Steaming/3Extraction & Hygiene Control.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Steaming/4Drying, Safety & Fabric Care.jpg";

const UpholsterySteaming = () => {
  return (
    <div className="upholstery-steaming-page">

      <section
        className="upholstery-steaming-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="upholstery-steaming-banner-overlay"></div>
      </section>

      <section className="upholstery-steaming-section">
        <div className="upholstery-steaming-container">

          <div className="upholstery-steaming-intro">
            <h1>
              How does professional upholstery steaming service deep-clean,
              disinfect, and sanitize fabrics without excessive moisture?
            </h1>

            <span className="upholstery-steaming-border"></span>

            <p>
              Upholstery Steaming Service is an advanced cleaning and
              sanitization solution designed for carpets, sofas, chairs,
              mattresses, pillows, soft boards, and curtains. The service uses
              pressurized steam combined with HEPA-filter vacuuming to remove
              dust, stains, germs, and allergens without soaking the fabric.
              Through spot treatment, steam disinfection, moisture extraction,
              and controlled drying, upholstery steaming restores freshness,
              hygiene, and fabric integrity, making it ideal for residential,
              commercial, and hospitality environments.
            </p>
          </div>

          <div className="upholstery-steaming-service-list">

            <div className="upholstery-steaming-card">
              <div className="upholstery-steaming-text">
                <h2>Pre-Cleaning &amp; Dust Removal</h2>

                <ul>
                  <li>Upholstery Steaming Service</li>
                  <li>HEPA Filter Vacuuming for Dust Removal</li>
                  <li>Low-Moisture Upholstery Cleaning</li>
                  <li>Carpet, Sofa, Chair, Mattress, and Curtain Cleaning</li>
                </ul>
              </div>

              <div className="upholstery-steaming-image">
                <img
                  src={img1}
                  alt="Pre-Cleaning & Dust Removal"
                />
              </div>
            </div>

            <div className="upholstery-steaming-card reverse">
              <div className="upholstery-steaming-text">
                <h2>Stain Treatment &amp; Steam Sanitization</h2>

                <ul>
                  <li>Spot Removal Treatment</li>
                  <li>Pressurized Steam Sanitization</li>
                  <li>Pressurized Steam Disinfection Service</li>
                  <li>Deep Fabric Sanitization Process</li>
                </ul>
              </div>

              <div className="upholstery-steaming-image">
                <img
                  src={img2}
                  alt="Stain Treatment & Steam Sanitization"
                />
              </div>
            </div>

            <div className="upholstery-steaming-card">
              <div className="upholstery-steaming-text">
                <h2>Extraction &amp; Hygiene Control</h2>

                <ul>
                  <li>Residual Moisture and Dirt Extraction</li>
                  <li>Germ and Allergen Elimination</li>
                  <li>Complete Fabric Hygiene Restoration</li>
                  <li>Safe Non-Wet Cleaning Method</li>
                </ul>
              </div>

              <div className="upholstery-steaming-image">
                <img
                  src={img3}
                  alt="Extraction & Hygiene Control"
                />
              </div>
            </div>

            <div className="upholstery-steaming-card reverse">
              <div className="upholstery-steaming-text">
                <h2>Drying, Safety &amp; Fabric Care</h2>

                <ul>
                  <li>Controlled Drying After Steam Cleaning</li>
                  <li>Fast-Drying Steam Cleaning Solution</li>
                  <li>Fabric Protection and Longevity</li>
                  <li>Professional Upholstery Care Standards</li>
                </ul>
              </div>

              <div className="upholstery-steaming-image">
                <img
                  src={img4}
                  alt="Drying, Safety & Fabric Care"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default UpholsterySteaming;