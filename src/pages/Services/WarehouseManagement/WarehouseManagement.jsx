import React from "react";
import "../../../style/WarehouseManagement.css";

// Images
import bannerImg from "../../../assets/images/1servepro/soft-service/Warehouse-Management-Services/1.png";
import inboundImg from "../../../assets/images/1servepro/soft-service/Warehouse-Management-Services/2.png";
import inventoryImg from "../../../assets/images/1servepro/soft-service/Warehouse-Management-Services/3.png";
import outboundImg from "../../../assets/images/1servepro/soft-service/Warehouse-Management-Services/4.png";
import operationsImg from "../../../assets/images/1servepro/soft-service/Warehouse-Management-Services/5.png";

const WarehouseManagement = () => {
  return (
    <div className="warehouse-management-page">

      {/* Banner */}
      <section
        className="warehouse-banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      ></section>

      {/* Main Section */}
      <section className="warehouse-service-section">
        <div className="warehouse-container">

          {/* Introduction */}
          <div className="warehouse-section-title">
            <h1>
              What key responsibilities are involved in an effective Warehouse
              Management Service?
            </h1>

            <span className="warehouse-border"></span>

            <p>
              Warehouse Management Service involves receiving and verifying
              goods, storing them properly, maintaining accurate inventory
              records, coordinating with carriers, managing shipping and timely
              deliveries, preventing theft, overseeing daily operations,
              scheduling warehouse staff, and using WMS technology to streamline
              processes. It also ensures smooth material flow, minimizes
              operational delays, and improves overall supply chain efficiency.
              By implementing standardized procedures, it enhances accuracy and
              reduces handling errors. Modern warehouse management further
              focuses on optimizing space utilization, improving workforce
              productivity, and delivering consistent, reliable service for
              seamless business operations.
            </p>
          </div>

          {/* Service Cards */}
          <div className="warehouse-service-list">

            {/* Card 1 */}
            <div className="warehouse-service-card">
              <div className="warehouse-card-text">
                <h2>Inbound Handling &amp; Storage</h2>

                <ul>
                  <li>Cleaning and Maintenance of Common Areas</li>
                  <li>Waste Management</li>
                  <li>Specialized Cleaning Services</li>
                  <li>Pest Control</li>
                  <li>Landscape and Outdoor Maintenance</li>
                </ul>
              </div>

              <div className="warehouse-card-image">
                <img
                  src={inboundImg}
                  alt="Inbound Handling & Storage"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="warehouse-service-card reverse">
              <div className="warehouse-card-text">
                <h2>Inventory Governance &amp; Security</h2>

                <ul>
                  <li>Maintaining Accurate Inventory Details</li>
                  <li>Inventory Accuracy &amp; Control</li>
                  <li>Tracking Inventory &amp; Preventing Theft</li>
                  <li>Inventory Security &amp; Theft Prevention</li>
                </ul>
              </div>

              <div className="warehouse-card-image">
                <img
                  src={inventoryImg}
                  alt="Inventory Governance & Security"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="warehouse-service-card">
              <div className="warehouse-card-text">
                <h2>Outbound Operations &amp; Logistics</h2>

                <ul>
                  <li>Coordinating With Carriers &amp; Managing Schedules</li>
                  <li>Carrier Coordination &amp; Scheduling</li>
                  <li>Shipping Orders &amp; Ensuring Timely Delivery</li>
                  <li>Order Shipping &amp; Timely Dispatch</li>
                </ul>
              </div>

              <div className="warehouse-card-image">
                <img
                  src={outboundImg}
                  alt="Outbound Operations & Logistics"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="warehouse-service-card reverse">
              <div className="warehouse-card-text">
                <h2>
                  Warehouse Operations, Workforce &amp; Technology
                </h2>

                <ul>
                  <li>Overseeing Day-To-Day Warehouse Activities</li>
                  <li>Daily Warehouse Operations</li>
                  <li>Planning &amp; Scheduling Warehouse Staff</li>
                  <li>Workforce Planning &amp; Scheduling</li>
                  <li>Using WMS and Warehouse Technology</li>
                  <li>WMS &amp; Technology Integration</li>
                </ul>
              </div>

              <div className="warehouse-card-image">
                <img
                  src={operationsImg}
                  alt="Warehouse Operations, Workforce & Technology"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WarehouseManagement;