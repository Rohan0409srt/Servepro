import React from "react";
import "../../../style/OfficeDeepCleaning.css";

import banner from "../../../assets/images/1servepro/special-service/Office-Cleaning/banner.jpg";

import img1 from "../../../assets/images/1servepro/special-service/Office-Cleaning/1 Exterior & High-Level Cleaning.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Office-Cleaning/2 Doors, Panels & Surfaces.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Office-Cleaning/3 Workstations, Furniture.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Office-Cleaning/4 Floor Care (2).jpg";

const OfficeDeepCleaning = () => {
  return (
    <div className="office-deep-cleaning-page">

      <section
        className="office-deep-cleaning-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="office-deep-cleaning-banner-overlay"></div>
      </section>

      <section className="office-deep-cleaning-section">
        <div className="office-deep-cleaning-container">

          <div className="office-deep-cleaning-intro">
            <h1>
              Looking for a complete deep cleaning solution to keep your office
              hygienic and productive?
            </h1>

            <span className="office-deep-cleaning-border"></span>

            <p>
              Our office deep cleaning service covers everything from floor
              scrubbing, dusting of appliances and furniture, cabinet and
              pantry cleaning, cobweb and ceiling cleaning, lighting and
              fixture cleaning, carpet and upholstery vacuuming, washroom
              sanitization, to glass and facade cleaning—ensuring a hygienic,
              fresh, and productive work environment for your team.
            </p>
          </div>

          <div className="office-deep-cleaning-service-list">

            <div className="office-deep-cleaning-card">
              <div className="office-deep-cleaning-text">
                <h2>Exterior &amp; High-Level Cleaning</h2>

                <ul>
                  <li>Removal of cobwebs</li>
                  <li>Facade cleaning</li>
                  <li>Cleaning of window panes, window channels and grills</li>
                  <li>Ceiling cleaning (lights, fire pipes, AC ducts, etc.)</li>
                  <li>Glass and section cleaning</li>
                  <li>Back-painted glass cleaning</li>
                </ul>
              </div>

              <div className="office-deep-cleaning-image">
                <img
                  src={img1}
                  alt="Exterior & High-Level Cleaning"
                />
              </div>
            </div>

            <div className="office-deep-cleaning-card reverse">
              <div className="office-deep-cleaning-text">
                <h2>Doors, Panels &amp; Surfaces</h2>

                <ul>
                  <li>All doors cleaning (cabin doors, exit doors, etc.)</li>
                  <li>Electric panel doors cleaning</li>
                  <li>Skirting cleaning</li>
                  <li>Metal cleaning (steel)</li>
                </ul>
              </div>

              <div className="office-deep-cleaning-image">
                <img
                  src={img2}
                  alt="Doors, Panels & Surfaces"
                />
              </div>
            </div>

            <div className="office-deep-cleaning-card">
              <div className="office-deep-cleaning-text">
                <h2>Workstations, Furniture &amp; Upholstery</h2>

                <ul>
                  <li>Cleaning of workstations</li>
                  <li>Furniture cleaning (wooden)</li>
                  <li>Chair vacuuming</li>
                  <li>Carpet vacuuming</li>
                  <li>Dusting of electric appliances</li>
                </ul>
              </div>

              <div className="office-deep-cleaning-image">
                <img
                  src={img3}
                  alt="Workstations, Furniture & Upholstery"
                />
              </div>
            </div>

            <div className="office-deep-cleaning-card reverse">
              <div className="office-deep-cleaning-text">
                <h2>Pantry, Washrooms &amp; Floor Care</h2>

                <ul>
                  <li>Cleaning and disinfection of washrooms</li>
                  <li>Degreasing of pantry area</li>
                  <li>Cleaning of cabinets and storage areas</li>
                  <li>Floor scrubbing with single disk machines</li>
                </ul>
              </div>

              <div className="office-deep-cleaning-image">
                <img
                  src={img4}
                  alt="Pantry, Washrooms & Floor Care"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default OfficeDeepCleaning;