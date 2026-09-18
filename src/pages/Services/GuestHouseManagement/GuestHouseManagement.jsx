import React from "react";
import "../../../style/GuestHouseManagement.css";

import bannerImg from "../../../assets/images/1servepro/soft-service/Guest-House-Management-Services/banner img.png";

import img1 from "../../../assets/images/1servepro/soft-service/Guest-House-Management-Services/web3.png";
import img2 from "../../../assets/images/1servepro/soft-service/Guest-House-Management-Services/web2.png";
import img3 from "../../../assets/images/1servepro/soft-service/Guest-House-Management-Services/web4.png";
import img4 from "../../../assets/images/1servepro/soft-service/Guest-House-Management-Services/web5.png";

const GuestHouseManagement = () => {
  return (
    <div className="guest-house-management-page">

      {/* Banner */}
      <section
        className="guest-house-management-banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      ></section>

      {/* Main Content */}
      <section className="guest-house-management-section">
        <div className="guest-house-management-container">

          {/* Intro */}
          <div className="guest-house-management-intro">
            <h1>
              What is the primary objective of guest management services in
              ensuring a smooth, professional, and comfortable experience for
              visitors?
            </h1>

            <span className="guest-house-management-border"></span>

            <p>
              Guest management service focuses on delivering a smooth,
              professional, and comfortable experience for every guest by
              ensuring efficient hospitality operations, maintaining a
              welcoming environment, and providing prompt assistance
              throughout their stay. It emphasizes high standards of service,
              proper coordination between staff, seamless communication, and
              proactive attention to guest needs. Along with maintaining a
              safe, well-kept property, the service ensures that every
              interaction reflects reliability, comfort, and care, creating a
              positive and memorable experience for all visitors.
            </p>
          </div>

          {/* Service Cards */}
          <div className="guest-house-management-list">

            {/* Card 1 */}
            <div className="guest-house-management-card">
              <div className="guest-house-management-text">
                <h2>Guest Arrival &amp; Front Desk Operations</h2>

                <ul>
                  <li>Streamlined Check-in and Check-out</li>
                  <li>Welcoming of New Guests</li>
                  <li>Front Desk Coordination</li>
                  <li>Visitor Tracking and Security</li>
                  <li>Client Check-out Notifications</li>
                </ul>
              </div>

              <div className="guest-house-management-image">
                <img
                  src={img1}
                  alt="Guest Arrival & Front Desk"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="guest-house-management-card reverse">
              <div className="guest-house-management-text">
                <h2>Guest Support &amp; Experience Management</h2>

                <ul>
                  <li>Addressing Guest Inquiries and Complaints</li>
                  <li>Guest Relationship Management</li>
                  <li>Hospitality and Guest Comfort Assurance</li>
                  <li>Guest Experience Enhancement</li>
                  <li>Providing Amenities and Additional Services</li>
                  <li>Complaint Resolution and Follow-up</li>
                </ul>
              </div>

              <div className="guest-house-management-image">
                <img
                  src={img2}
                  alt="Guest Support & Experience"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="guest-house-management-card">
              <div className="guest-house-management-text">
                <h2>
                  Property Maintenance &amp; Housekeeping Coordination
                </h2>

                <ul>
                  <li>Guest House Management</li>
                  <li>Housekeeping Coordination for Guest Rooms</li>
                  <li>Property Appearance and Ambience Management</li>
                  <li>Overseeing Property Repairs and Upkeep</li>
                  <li>Implementing and Maintaining Safety Protocols</li>
                  <li>Emergency Handling and Guest Safety Support</li>
                </ul>
              </div>

              <div className="guest-house-management-image">
                <img
                  src={img3}
                  alt="Property Maintenance & Housekeeping"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="guest-house-management-card reverse">
              <div className="guest-house-management-text">
                <h2>Administrative &amp; Operational Management</h2>

                <ul>
                  <li>Data and Records Management</li>
                  <li>Operational Reporting and Documentation</li>
                  <li>Service Quality Monitoring</li>
                </ul>
              </div>

              <div className="guest-house-management-image">
                <img
                  src={img4}
                  alt="Administrative & Operational"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default GuestHouseManagement;