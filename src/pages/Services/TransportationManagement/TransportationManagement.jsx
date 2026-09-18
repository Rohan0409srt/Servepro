import React from "react";
import "../../../style/TransportationManagement.css";

import bannerImg from "../../../assets/images/1servepro/Business_Support_Services/Transportation-Management/banner.jpg";

import planningImg from "../../../assets/images/1servepro/Business_Support_Services/Transportation-Management/1 Transportation Planning & Optimization.jpg";
import costImg from "../../../assets/images/1servepro/Business_Support_Services/Transportation-Management/2 Cost Management.jpg";
import trackingImg from "../../../assets/images/1servepro/Business_Support_Services/Transportation-Management/3 Tracking, Visibility .jpg";
import documentationImg from "../../../assets/images/1servepro/Business_Support_Services/Transportation-Management/4Documentation.jpg";

const services = [
  {
    title: "Transportation Planning & Optimization",
    image: planningImg,
    reverse: false,
    points: [
      "Determine the Most Efficient Routes for Shipments",
      "Vehicle Scheduling and Dispatch Management",
      "Loading Vehicles to Maximize Space and Minimize Costs",
      "Risk and Delay Mitigation Management",
    ],
  },
  {
    title: "Carrier Coordination & Cost Management",
    image: costImg,
    reverse: true,
    points: [
      "Choose Best Carriers Based on Cost and Reliability",
      "Negotiating Favourable Freight Rates with Carriers",
      "Carrier Performance Evaluation",
      "Analyzing Transportation Costs and Preparing Reports",
    ],
  },
  {
    title: "Tracking, Visibility & Communication",
    image: trackingImg,
    reverse: false,
    points: [
      "Shipment Tracking and Real-Time Visibility",
      "Maintain Transparency into the Whole Transportation Process",
      "Customer Communication and Status Updates",
      "Coordinate to Ensure Timely Delivery",
    ],
  },
  {
    title: "Compliance, Documentation & Reporting",
    image: documentationImg,
    reverse: true,
    points: [
      "Documentation and Compliance Processing",
      "Analyzing Transportation Costs and Preparing Reports",
      "Record-Keeping for Logistics Operations",
    ],
  },
];

const TransportationManagement = () => {
  return (
    <div className="transportation-management-page">

      {/* Banner */}
      <section
        className="transportation-management-banner"
        style={{ backgroundImage: `url("${bannerImg}")` }}
        aria-label="Transportation Management Service"
      >
        <div className="transportation-management-banner-overlay" />
      </section>

      {/* Main Section */}
      <section className="transportation-management-section">
        <div className="transportation-management-container">

          {/* Intro */}
          <div className="transportation-management-intro">
            <h2>
              How does a transportation management service ensure efficient
              routing, cost control, and timely delivery while maintaining
              complete visibility across the logistics process?
            </h2>

            <span className="transportation-management-border" />

            <p>
              Transportation Management Service focuses on planning,
              coordinating, and optimizing the movement of goods to ensure
              efficient, cost-effective, and reliable delivery operations. It
              includes selecting the best carriers, determining optimal
              routes, monitoring shipments, negotiating freight rates, and
              analyzing transportation performance. By maintaining visibility
              across the entire logistics chain and ensuring smooth
              coordination between shippers, carriers, and receivers,
              transportation management enhances operational efficiency,
              reduces costs, and ensures timely and accurate delivery of goods.
            </p>
          </div>

          {/* Service Cards */}
          <div className="transportation-management-list">
            {services.map((service, index) => (
              <article
                className={`transportation-management-card ${
                  service.reverse ? "reverse" : ""
                }`}
                key={service.title}
              >
                <div className="transportation-management-card-text">
                  <h3>{service.title}</h3>

                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="transportation-management-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default TransportationManagement;