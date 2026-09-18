import React from "react";
import "../../../style/WaterTankCleaning.css";

import banner from "../../../assets/images/1servepro/special-service/Water-Tank-Cleaning_/banner.jpg";

import img1 from "../../../assets/images/1servepro/special-service/Water-Tank-Cleaning_/1 Tank Draining & Preparation.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Water-Tank-Cleaning_/2 Internal Cleaning & Scrubbing.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Water-Tank-Cleaning_/3 Disinfection & Hygiene Control.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Water-Tank-Cleaning_/4 Refilling, Inspection & Safety.jpg";

const WaterTankCleaning = () => {
  return (
    <div className="water-tank-cleaning-page">

      <section
        className="water-tank-cleaning-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="water-tank-cleaning-banner-overlay"></div>
      </section>

      <section className="water-tank-cleaning-section">
        <div className="water-tank-cleaning-container">

          <div className="water-tank-cleaning-intro">
            <h1>
              How does professional water tank cleaning service ensure safe,
              hygienic, and contamination-free water storage?
            </h1>

            <span className="water-tank-cleaning-border"></span>

            <p>
              Water Tank Cleaning Service ensures the hygiene, safety, and
              quality of stored water by removing sludge, algae, dirt, and
              harmful microorganisms from tanks. Using a systematic process of
              draining, scrubbing, disinfection, thorough rinsing, and safe
              refilling, the service helps prevent waterborne diseases and
              contamination. Ideal for residential, commercial, and industrial
              properties, professional water tank cleaning maintains potable
              water standards, extends tank life, and ensures compliance with
              health and safety norms.
            </p>
          </div>

          <div className="water-tank-cleaning-service-list">

            <div className="water-tank-cleaning-card">
              <div className="water-tank-cleaning-text">
                <h2>Tank Draining &amp; Preparation</h2>

                <ul>
                  <li>Water Tank Cleaning Service</li>
                  <li>Complete Tank Draining Process</li>
                  <li>Sludge and Residual Water Removal</li>
                  <li>Preparation for Internal Cleaning</li>
                </ul>
              </div>

              <div className="water-tank-cleaning-image">
                <img
                  src={img1}
                  alt="Tank Draining & Preparation"
                />
              </div>
            </div>

            <div className="water-tank-cleaning-card reverse">
              <div className="water-tank-cleaning-text">
                <h2>Internal Cleaning &amp; Scrubbing</h2>

                <ul>
                  <li>Internal Surface Scrubbing and Washing</li>
                  <li>Algae and Dirt Removal</li>
                  <li>Use of Brushes and Pressure Cleaning</li>
                  <li>Thorough Rinsing of Tank Surfaces</li>
                </ul>
              </div>

              <div className="water-tank-cleaning-image">
                <img
                  src={img2}
                  alt="Internal Cleaning & Scrubbing"
                />
              </div>
            </div>

            <div className="water-tank-cleaning-card">
              <div className="water-tank-cleaning-text">
                <h2>Disinfection &amp; Hygiene Control</h2>

                <ul>
                  <li>Tank Disinfection Using Approved Chemicals</li>
                  <li>Chlorine-Based Sanitization Process</li>
                  <li>Multiple Rinsing for Chemical Removal</li>
                  <li>Potable Water Safety Assurance</li>
                </ul>
              </div>

              <div className="water-tank-cleaning-image">
                <img
                  src={img3}
                  alt="Disinfection & Hygiene Control"
                />
              </div>
            </div>

            <div className="water-tank-cleaning-card reverse">
              <div className="water-tank-cleaning-text">
                <h2>Refilling, Inspection &amp; Safety</h2>

                <ul>
                  <li>Refilling with Clean Potable Water</li>
                  <li>Leak Inspection and Lid Securing</li>
                  <li>Residential and Commercial Tank Cleaning</li>
                  <li>Long-Term Water Hygiene and Safety</li>
                </ul>
              </div>

              <div className="water-tank-cleaning-image">
                <img
                  src={img4}
                  alt="Refilling, Inspection & Safety"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WaterTankCleaning;