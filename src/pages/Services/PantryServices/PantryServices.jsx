import React from "react";
import "../../../style/PantryServices.css";

import bannerImg from "../../../assets/images/1servepro/soft-service/Pantry-Services/banner pantry.png";
import pantryCleaningImg from "../../../assets/images/1servepro/soft-service/Pantry-Services/Supporting other Kitchen Operations.png";
import beverageImg from "../../../assets/images/1servepro/soft-service/Pantry-Services/beverage & Refreshment.png";
import inventoryImg from "../../../assets/images/1servepro/soft-service/Pantry-Services/inventory & Supply control.png";
import meetingRoomImg from "../../../assets/images/1servepro/soft-service/Pantry-Services/meeting room serve .png";

const PantryServices = () => {
  return (
    <div className="pantry-service-page">

      {/* =========================================
          BANNER
      ========================================= */}
      <section
        className="pantry-banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="pantry-banner-overlay"></div>
      </section>


      {/* =========================================
          MAIN PANTRY SERVICE SECTION
      ========================================= */}
      <section className="pantry-service-section">
        <div className="pantry-container">

          {/* =====================================
              INTRODUCTION
          ===================================== */}
          <div className="pantry-section-title">

            <h1>
              What are the main responsibilities involved in maintaining and
              managing pantry operations, serving refreshments, and supporting
              office events?
            </h1>

            <span className="pantry-border"></span>

            <p>
              The pantry and kitchen maintenance role ensures a clean,
              hygienic, and well-organized pantry by regularly cleaning
              surfaces, utensils, appliances, and maintaining proper stock of
              essential items like tea, coffee, milk, and snacks. It includes
              preparing and serving refreshments to staff, visitors, and during
              meetings, while also supporting office events with food and
              beverage arrangements. Responsibilities extend to setting up
              and cleaning meeting rooms, managing pantry supplies, handling
              waste disposal and recycling, maintaining pantry equipment, and
              ensuring food safety and hygiene standards. This role also
              involves assisting staff with pantry-related needs, organizing
              supplies to prevent clutter or wastage, and helping ensure
              smooth, hygienic, and efficient pantry operations within the
              office.
            </p>

          </div>


          {/* =====================================
              SERVICE CARDS
          ===================================== */}
          <div className="pantry-service-list">


            {/* ===================================
                CARD 1
            =================================== */}
            <div className="pantry-service-card">

              <div className="pantry-card-text">

                <h2>
                  Pantry Cleaning &amp; Hygiene Management
                </h2>

                <ul>
                  <li>Pantry &amp; Kitchen Maintenance</li>

                  <li>
                    Pantry Cleaning and Hygiene Practices
                  </li>

                  <li>
                    Meeting Room Pantry Cleanup
                  </li>

                  <li>
                    Food Safety &amp; Pantry Hygiene Compliance
                  </li>

                  <li>
                    Waste Management
                  </li>
                </ul>

              </div>


              <div className="pantry-card-image">

                <img
                  src={pantryCleaningImg}
                  alt="Pantry Cleaning & Hygiene"
                />

              </div>

            </div>


            {/* ===================================
                CARD 2 - REVERSE
            =================================== */}
            <div className="pantry-service-card reverse">

              <div className="pantry-card-text">

                <h2>
                  Beverage &amp; Refreshment Services
                </h2>

                <ul>

                  <li>
                    Serving Refreshments
                  </li>

                  <li>
                    Tea, Coffee &amp; Beverage Preparation
                  </li>

                  <li>
                    Visitor Refreshment Service Support
                  </li>

                  <li>
                    Pantry Support for Office Events
                  </li>

                  <li>
                    Handling Office Events and Functions
                  </li>

                </ul>

              </div>


              <div className="pantry-card-image">

                <img
                  src={beverageImg}
                  alt="Beverage & Refreshment"
                />

              </div>

            </div>


            {/* ===================================
                CARD 3
            =================================== */}
            <div className="pantry-service-card">

              <div className="pantry-card-text">

                <h2>
                  Inventory &amp; Supply Control
                </h2>

                <ul>

                  <li>
                    Managing Pantry Supplies
                  </li>

                  <li>
                    Pantry Restocking and Supply Management
                  </li>

                  <li>
                    Pantry Stock Monitoring and Reporting
                  </li>

                  <li>
                    Pantry Equipment Inventory Control
                  </li>

                  <li>
                    Basic Office Equipment Management
                  </li>

                </ul>

              </div>


              <div className="pantry-card-image">

                <img
                  src={inventoryImg}
                  alt="Inventory & Supply Control"
                />

              </div>

            </div>


            {/* ===================================
                CARD 4 - REVERSE
            =================================== */}
            <div className="pantry-service-card reverse">

              <div className="pantry-card-text">

                <h2>
                  Office Support &amp; Compliance
                </h2>

                <ul>

                  <li>
                    Supporting Office Staff
                  </li>

                  <li>
                    Office Meeting Support
                  </li>

                  <li>
                    Pantry Appliance Cleaning &amp; Maintenance
                  </li>

                  <li>
                    Ensure Office Compliance
                  </li>

                  <li>
                    Pantry Waste Disposal &amp; Recycling Practices
                  </li>

                </ul>

              </div>


              <div className="pantry-card-image">

                <img
                  src={meetingRoomImg}
                  alt="Office Support & Compliance"
                />

              </div>

            </div>


          </div>

        </div>
      </section>

    </div>
  );
};

export default PantryServices;