import React from "react";
import "../../../style/UpholsteryShampooing.css";

import banner from "../../../assets/images/1servepro/special-service/Upholstery-Shampooing/banner (2).jpg";

import img1 from "../../../assets/images/1servepro/special-service/Upholstery-Shampooing/1 Pre-Cleaning Preparation & Vacuuming.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Upholstery-Shampooing/2Stain Treatment & Foam Cleaning.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Upholstery-Shampooing/3 Extraction & Deep Hygiene Cleaning.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Upholstery-Shampooing/4 Drying, Finishing & Fabric Careg.jpg";

const UpholsteryShampooing = () => {
  return (
    <div className="upholstery-shampooing-page">

      <section
  className="upholstery-shampooing-banner"
  style={{
    backgroundImage: `url("${banner}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="upholstery-shampooing-banner-overlay"></div>
</section>

      <section className="upholstery-shampooing-section">
        <div className="upholstery-shampooing-container">

          <div className="upholstery-shampooing-intro">
            <h1>
              How does professional upholstery shampooing service restore
              cleanliness, softness, and hygiene to sofas, chairs, mattresses,
              and fabric furnishings?
            </h1>

            <span className="upholstery-shampooing-border"></span>

            <p>
              Upholstery Shampooing Service provides deep cleaning and
              sanitization for fabric sofas, chairs, mattresses, pillows, soft
              boards, and curtains using advanced shampooing and extraction
              techniques. The process begins with thorough vacuuming and spot
              treatment, followed by foam shampoo scrubbing to remove
              deep-seated dirt, stains, and allergens. High-performance
              extraction and controlled drying using airflow or dehumidifiers
              ensure upholstery is left fresh, soft, germ-free, and safe for
              everyday use in homes, offices, hotels, and commercial spaces.
            </p>
          </div>

          <div className="upholstery-shampooing-service-list">

            <div className="upholstery-shampooing-card">
              <div className="upholstery-shampooing-text">
                <h2>Pre-Cleaning Preparation &amp; Vacuuming</h2>

                <ul>
                  <li>Upholstery Shampooing Service</li>
                  <li>Commercial Vacuuming with Brush Attachment</li>
                  <li>Deep Upholstery Cleaning Solutions</li>
                  <li>Fabric Sofa, Chair, Mattress, and Curtain Cleaning</li>
                </ul>
              </div>

              <div className="upholstery-shampooing-image">
                <img
                  src={img1}
                  alt="Pre-Cleaning Preparation & Vacuuming"
                />
              </div>
            </div>

            <div className="upholstery-shampooing-card reverse">
              <div className="upholstery-shampooing-text">
                <h2>Stain Treatment &amp; Foam Cleaning</h2>

                <ul>
                  <li>Spot Removal Using Special Solutions</li>
                  <li>Foam Shampoo Treatment and Scrubbing</li>
                  <li>Advanced Foam Scrubbing Treatment</li>
                  <li>Safe Chemical Upholstery Sanitization</li>
                </ul>
              </div>

              <div className="upholstery-shampooing-image">
                <img
                  src={img2}
                  alt="Stain Treatment & Foam Cleaning"
                />
              </div>
            </div>

            <div className="upholstery-shampooing-card">
              <div className="upholstery-shampooing-text">
                <h2>Extraction &amp; Deep Hygiene Cleaning</h2>

                <ul>
                  <li>Advanced Extraction Cleaning Method</li>
                  <li>Germ, Allergen, and Odor Removal</li>
                  <li>Mattress and Pillow Deep Cleaning</li>
                  <li>Complete Residue and Moisture Removal</li>
                </ul>
              </div>

              <div className="upholstery-shampooing-image">
                <img
                  src={img3}
                  alt="Extraction & Deep Hygiene Cleaning"
                />
              </div>
            </div>

            <div className="upholstery-shampooing-card reverse">
              <div className="upholstery-shampooing-text">
                <h2>Drying, Finishing &amp; Fabric Care</h2>

                <ul>
                  <li>Drying Using Dehumidifier and Airflow</li>
                  <li>Fast Drying Upholstery Cleaning Process</li>
                  <li>Restoration of Fabric Softness</li>
                  <li>Long-Lasting Upholstery Freshness</li>
                </ul>
              </div>

              <div className="upholstery-shampooing-image">
                <img
                  src={img4}
                  alt="Drying, Finishing & Fabric Care"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default UpholsteryShampooing;