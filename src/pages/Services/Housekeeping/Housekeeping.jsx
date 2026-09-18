import React from "react";
import "../../../style/Housekeeping.css";

import bannerImg from "../../../assets/images/1servepro/soft-service/Housekeeping-Services/banner.jpg";

import img1 from "../../../assets/images/1servepro/soft-service/Housekeeping-Services/1-new-housekeeping.jpeg";
import img2 from "../../../assets/images/1servepro/soft-service/Housekeeping-Services/2 Housekeeping in Office Premises.JPG";
import img3 from "../../../assets/images/1servepro/soft-service/Housekeeping-Services/3 Housekeeping in school _ College.png";
import img4 from "../../../assets/images/1servepro/soft-service/Housekeeping-Services/4-malls.jpeg";
import img5 from "../../../assets/images/1servepro/soft-service/Housekeeping-Services/6 Housekeeping in Hospital.png";
import img6 from "../../../assets/images/1servepro/soft-service/Housekeeping-Services/7 Housekeeping in Company_Factory.jpg";

const Housekeeping = () => {
  return (
    <div className="housekeeping-page">

      {/* Banner */}
      <section
        className="housekeeping-banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      ></section>

      {/* Main Section */}
      <section className="housekeeping-section">
        <div className="housekeeping-container">

          {/* Intro */}
          <div className="housekeeping-intro">
            <h1>
              What is the primary purpose of housekeeping services in
              maintaining a clean, safe, and efficient environment within a
              facility?
            </h1>

            <span className="housekeeping-border"></span>

            <p>
              Housekeeping services aim to maintain a clean, safe, and
              pleasant environment for guests and staff by ensuring high
              standards of hygiene, comfort, and visual appeal across all
              areas of a facility. By delivering well-maintained, organized,
              and hazard-free spaces, housekeeping enhances guest
              satisfaction, supports health and safety, and contributes to
              smooth daily operations through effective time and resource
              management. Modern housekeeping also emphasizes sustainability
              by using eco-friendly products and reducing waste, while working
              collaboratively with departments like maintenance, guest
              services, and food &amp; beverage to ensure seamless service and
              overall operational efficiency.
            </p>
          </div>

          {/* Service Cards */}
          <div className="housekeeping-list">

            {/* 1 */}
            <div className="housekeeping-card">
              <div className="housekeeping-text">
                <h2>Housekeeping in Residential Society</h2>

                <ul>
                  <li>Cleaning and Maintenance of Common Areas</li>
                  <li>Waste Management</li>
                  <li>Specialized Cleaning Services</li>
                  <li>Pest Control</li>
                  <li>Landscape and Outdoor Maintenance</li>
                </ul>
              </div>

              <div className="housekeeping-image">
                <img src={img1} alt="Housekeeping Service" />
              </div>
            </div>

            {/* 2 */}
            <div className="housekeeping-card reverse">
              <div className="housekeeping-text">
                <h2>Housekeeping in Office Premises</h2>

                <ul>
                  <li>Comprehensive Office Cleaning</li>
                  <li>Floor and Carpet Care</li>
                  <li>Furniture and Fixture Maintenance</li>
                  <li>Sanitization Services</li>
                  <li>Waste Management</li>
                  <li>Specialized Cleaning Services</li>
                  <li>Pest Control Measures</li>
                </ul>
              </div>

              <div className="housekeeping-image">
                <img src={img2} alt="Office Premises" />
              </div>
            </div>

            {/* 3 */}
            <div className="housekeeping-card">
              <div className="housekeeping-text">
                <h2>Housekeeping in school / College</h2>

                <ul>
                  <li>Classroom and Lecture Hall Cleaning</li>
                  <li>Laboratory and Specialized Room Maintenance</li>
                  <li>Cafeteria and Dining Area Services</li>
                  <li>Restroom Hygiene Maintenance</li>
                  <li>Common Area Upkeep</li>
                  <li>Playground and Outdoor Space Cleaning</li>
                  <li>Event Support Services</li>
                  <li>Pest Control Measures</li>
                </ul>
              </div>

              <div className="housekeeping-image">
                <img src={img3} alt="School/College" />
              </div>
            </div>

            {/* 4 */}
            <div className="housekeeping-card reverse">
              <div className="housekeeping-text">
                <h2>Housekeeping in Malls</h2>

                <ul>
                  <li>Routine Cleaning</li>
                  <li>Restroom Maintenance</li>
                  <li>Waste Management</li>
                  <li>Glass and Window Cleaning</li>
                  <li>Special Event Support</li>
                  <li>Pest Control</li>
                </ul>
              </div>

              <div className="housekeeping-image">
                <img src={img4} alt="Malls" />
              </div>
            </div>

            {/* 5 */}
            <div className="housekeeping-card">
              <div className="housekeeping-text">
                <h2>Housekeeping in Hospital</h2>

                <ul>
                  <li>Cleaning and Disinfection</li>
                  <li>Waste Management</li>
                  <li>Linen and Laundry Services</li>
                  <li>Floor Care</li>
                  <li>Restroom Hygiene</li>
                  <li>Pest Control</li>
                  <li>Safety and Compliance</li>
                </ul>
              </div>

              <div className="housekeeping-image">
                <img src={img5} alt="Hospital" />
              </div>
            </div>

            {/* 6 */}
            <div className="housekeeping-card reverse">
              <div className="housekeeping-text">
                <h2>Housekeeping in Company/Factory</h2>

                <ul>
                  <li>Cleaning and Maintenance</li>
                  <li>Organization and Storage</li>
                  <li>Safety Standards</li>
                  <li>Environmental Responsibility</li>
                  <li>Employee Training and Involvement</li>
                  <li>Health and Well-being</li>
                  <li>Compliance with Regulations</li>
                </ul>
              </div>

              <div className="housekeeping-image">
                <img src={img6} alt="Company/Factory" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Housekeeping;