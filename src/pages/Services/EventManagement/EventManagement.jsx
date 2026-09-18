
import React from "react";
import "../../../style/EventManagement.css";

import bannerImg from "../../../assets/images/1servepro/soft-service/Event-Management-services/banner.png";

import img1 from "../../../assets/images/1servepro/soft-service/Event-Management-services/event cleaning mopping web1.png";
import img2 from "../../../assets/images/1servepro/soft-service/Event-Management-services/event set up.png";
import img3 from "../../../assets/images/1servepro/soft-service/Event-Management-services/guest area .png";
import img4 from "../../../assets/images/1servepro/soft-service/Event-Management-services/web 2.png";

const EventManagementServices = () => {
  return (
    <div className="event-management-services-page">

      {/* =========================
          BANNER
      ========================== */}
      <section
        className="event-management-services-banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      ></section>

      {/* =========================
          MAIN SECTION
      ========================== */}
      <section
        id="event-management-service-section"
        className="event-management-services-section"
      >
        <div className="event-management-services-container">

          {/* =========================
              INTRO
          ========================== */}
          <div className="event-management-services-intro">

            <h1>
              How does the event management service ensure smooth, hygienic,
              and well-organized events that leave a positive and lasting
              impression on guests?
            </h1>

            <span className="event-management-services-border"></span>

            <p>
              Our Event Management Service in Mumbai ensures smooth, hygienic,
              and well-organized events by maintaining a spotless environment,
              preparing event areas with proper arrangements, and supporting
              the seamless setup and breakdown of equipment. We keep all event
              spaces clean, sanitized, and fully stocked with essential
              supplies while managing waste responsibly to maintain a safe and
              pleasant atmosphere. With a dedicated team focused on
              cleanliness, coordination, and timely support, we ensure every
              event runs efficiently and leaves a lasting positive impression
              on guests.
            </p>

          </div>

          {/* =========================
              SERVICE CARDS
          ========================== */}
          <div className="event-management-services-list">

            {/* =========================
                CARD 1
            ========================== */}
            <div className="event-management-service-card">

              <div className="event-management-service-text">

                <h2>
                  Event Cleaning &amp; Hygiene Management
                </h2>

                <ul>
                  <li>Cleaning and Sanitization</li>

                  <li>
                    Dusting/Mopping of Floor, Walls, Ceiling, Restrooms
                  </li>

                  <li>
                    Restocking Supplies – Toilet Paper &amp; Soaps
                  </li>

                  <li>
                    Restocking Cleaning Supplies and Toiletries
                  </li>

                  <li>
                    Waste Disposal &amp; Area Maintenance
                  </li>

                  <li>
                    Post-Event Cleanup and Restoration
                  </li>

                  <li>
                    Emergency Response and First-Aid Support
                  </li>
                </ul>

              </div>

              <div className="event-management-service-image">
                <img
                  src={img1}
                  alt="Event Cleaning & Hygiene Management"
                />
              </div>

            </div>

            {/* =========================
                CARD 2 - REVERSE
            ========================== */}
            <div className="event-management-service-card reverse">

              <div className="event-management-service-text">

                <h2>
                  Event Setup &amp; Venue Preparation
                </h2>

                <ul>
                  <li>
                    Arranging Tables, Chairs, and Decorations
                  </li>

                  <li>
                    Preparing Event Areas Tidy, Clean &amp; Ready for Use
                  </li>

                  <li>
                    Event Setup and Coordination
                  </li>

                  <li>
                    Venue Preparation and Staging
                  </li>

                  <li>
                    Logistics and Material Handling
                  </li>

                  <li>
                    Vendor and Supplier Coordination
                  </li>
                </ul>

              </div>

              <div className="event-management-service-image">
                <img
                  src={img2}
                  alt="Event Setup & Venue Preparation"
                />
              </div>

            </div>

            {/* =========================
                CARD 3
            ========================== */}
            <div className="event-management-service-card">

              <div className="event-management-service-text">

                <h2>
                  Guest Area &amp; Event Flow Management
                </h2>

                <ul>
                  <li>Guest Area Management</li>

                  <li>On-Site Support Staff</li>

                  <li>Event Flow Supervision</li>

                  <li>
                    Safety and Crowd Management Support
                  </li>
                </ul>

              </div>

              <div className="event-management-service-image">
                <img
                  src={img3}
                  alt="Guest Area & Event Flow Management"
                />
              </div>

            </div>

            {/* =========================
                CARD 4 - REVERSE
            ========================== */}
            <div className="event-management-service-card reverse">

              <div className="event-management-service-text">

                <h2>
                  Equipment &amp; Operations Support
                </h2>

                <ul>
                  <li>
                    Assisting with Equipment Setup and Breakdown
                  </li>

                  <li>
                    Ensuring Smooth Operational Support During Events
                  </li>

                  <li>
                    Coordination with Technical or Facility Teams
                  </li>
                </ul>

              </div>

              <div className="event-management-service-image">
                <img
                  src={img4}
                  alt="Equipment & Operations Support"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default EventManagementServices;

