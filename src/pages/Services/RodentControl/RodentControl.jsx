import React from "react";
import "../../../style/RodentControl.css";

import banner from "../../../assets/images/1servepro/PestControl/Rodent-Control/banner.jpg";

import trappingImg from "../../../assets/images/1servepro/PestControl/Rodent-Control/1 Rodent Trapping Techniques.jpg";
import controlMethodsImg from "../../../assets/images/1servepro/PestControl/Rodent-Control/2 Control Methods.jpg";
import monitoringImg from "../../../assets/images/1servepro/PestControl/Rodent-Control/3 High-Risk Area Rodent Monitoring.jpg";
import safetyImg from "../../../assets/images/1servepro/PestControl/Rodent-Control/4 Safety, Hygiene & Compliance.jpg";

export default function RodentControl() {
  return (
    <section className="rodent-control-page">

      {/* Banner */}
      <section
        className="rodent-control-banner"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="rodent-control-banner-overlay"></div>
      </section>

      {/* Main Content */}
      <section className="rodent-control-section">
        <div className="rodent-control-container">

          {/* Intro */}
          <div className="rodent-control-intro">
            <h2>
              How does professional rodent control service effectively
              eliminate rats and mice while ensuring safety and hygiene
              in your premises?
            </h2>

            <span className="rodent-control-border"></span>

            <p>
              Rodent Control Services provide an effective solution to
              eliminate rats and mice from residential, commercial, and
              industrial premises using safe and proven trapping and
              baiting methods. By targeting rodent activity areas with
              snap traps, live traps, glue traps, and secured bait
              stations containing approved rodenticides, the service
              helps prevent property damage, food contamination, and
              health risks. Professional rodent control ensures
              long-term protection, improved hygiene, and compliance
              with safety standards.
            </p>
          </div>

          {/* Service Cards */}
          <div className="rodent-control-services">

            {/* 1 */}
            <div className="rodent-control-card">
              <div className="rodent-control-card-text">
                <h3>Rodent Trapping Techniques</h3>

                <ul>
                  <li>Snap Trap Rodent Control Method</li>
                  <li>Live Trap Rodent Capture Solutions</li>
                  <li>Glue Trap Rodent Control Technique</li>
                  <li>Targeted Rat and Mouse Control</li>
                </ul>
              </div>

              <div className="rodent-control-card-image">
                <img
                  src={trappingImg}
                  alt="Rodent Trapping Techniques"
                />
              </div>
            </div>

            {/* 2 */}
            <div className="rodent-control-card reverse">
              <div className="rodent-control-card-text">
                <h3>Baiting &amp; Chemical Control Methods</h3>

                <ul>
                  <li>Baiting Method Using Rodenticide</li>
                  <li>Use of Secured Bait Stations</li>
                  <li>Safe Rodenticide Application</li>
                  <li>Chemical and Non-Chemical Rodent Treatments</li>
                </ul>
              </div>

              <div className="rodent-control-card-image">
                <img
                  src={controlMethodsImg}
                  alt="Baiting & Chemical Control Methods"
                />
              </div>
            </div>

            {/* 3 */}
            <div className="rodent-control-card">
              <div className="rodent-control-card-text">
                <h3>Monitoring, Prevention &amp; Effectiveness</h3>

                <ul>
                  <li>High-Risk Area Rodent Monitoring</li>
                  <li>Integrated Rodent Management Solutions</li>
                  <li>Long-Term Rodent Prevention Measures</li>
                  <li>Professional Rodent Infestation Control</li>
                </ul>
              </div>

              <div className="rodent-control-card-image">
                <img
                  src={monitoringImg}
                  alt="Monitoring, Prevention & Effectiveness"
                />
              </div>
            </div>

            {/* 4 */}
            <div className="rodent-control-card reverse">
              <div className="rodent-control-card-text">
                <h3>Safety, Hygiene &amp; Compliance</h3>

                <ul>
                  <li>Hygienic Rodent Control Practices</li>
                  <li>Health Risk Reduction from Rodents</li>
                  <li>Environment-Safe Rodent Control Solutions</li>
                  <li>Compliance with Pest Control Standards</li>
                </ul>
              </div>

              <div className="rodent-control-card-image">
                <img
                  src={safetyImg}
                  alt="Safety, Hygiene & Compliance"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </section>
  );
}