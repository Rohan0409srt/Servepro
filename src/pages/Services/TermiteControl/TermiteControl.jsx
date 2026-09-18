import React from "react";
import "../../../style/TermiteControl.css";

import banner from "../../../assets/images/1servepro/PestControl/Termite-Control/termite-banner-new.jpeg";

import treatmentImg from "../../../assets/images/1servepro/PestControl/Termite-Control/1 Drilling Method for Termite Treatment.jpg";
import targetImg from "../../../assets/images/1servepro/PestControl/Termite-Control/2 Target Areas & Application.jpg";
import protectionImg from "../../../assets/images/1servepro/PestControl/Termite-Control/3 Protection & Effectiveness.jpg";
import safetyImg from "../../../assets/images/1servepro/PestControl/Termite-Control/4 Safety, Reliability & Professional Handling.jpg";

export default function TermiteControl() {
  return (
    <section className="termite-control-page">

      {/* Banner */}
      <section
        className="termite-control-banner"
        style={{ backgroundImage: `url("${banner}")` }}
      />

      {/* Main Section */}
      <section className="termite-control-section">
        <div className="termite-control-container">

          {/* Intro */}
          <div className="termite-control-intro">
            <h2>
              How does professional termite control service protect
              buildings from structural damage caused by active termite
              infestations?
            </h2>

            <span className="termite-control-border"></span>

            <p>
              Termite Control Service provides an effective solution to
              eliminate active termite infestations and protect buildings
              from severe structural damage. Using the drilling and
              injection method, termiticide solutions are applied directly
              into infested wood and walls, ensuring deep penetration and
              long-lasting protection. This method is especially suitable
              for existing buildings where termites are already present,
              helping prevent further spread and safeguarding the strength,
              safety, and longevity of the structure.
            </p>
          </div>

          {/* Service Cards */}
          <div className="termite-control-services">

            {/* 1 */}
            <div className="termite-control-card">
              <div className="termite-control-card-text">
                <h3>Termite Treatment Methods</h3>

                <ul>
                  <li>Drilling Method for Termite Treatment</li>
                  <li>Injection of Termiticide Solution</li>
                  <li>Direct Termiticide Application Method</li>
                  <li>Deep Penetration Termite Control</li>
                </ul>
              </div>

              <div className="termite-control-card-image">
                <img
                  src={treatmentImg}
                  alt="Termite Treatment Methods"
                />
              </div>
            </div>

            {/* 2 */}
            <div className="termite-control-card reverse">
              <div className="termite-control-card-text">
                <h3>Target Areas &amp; Application</h3>

                <ul>
                  <li>Active Termite Infestation Control</li>
                  <li>Termite Treatment for Existing Buildings</li>
                  <li>Drill and Injection Termite Treatment</li>
                  <li>Sealing of Drill Holes After Treatment</li>
                </ul>
              </div>

              <div className="termite-control-card-image">
                <img
                  src={targetImg}
                  alt="Target Areas & Application"
                />
              </div>
            </div>

            {/* 3 */}
            <div className="termite-control-card">
              <div className="termite-control-card-text">
                <h3>Protection &amp; Effectiveness</h3>

                <ul>
                  <li>Structural Damage Prevention Solutions</li>
                  <li>Long-Term Termite Elimination</li>
                  <li>Complete Termite Eradication</li>
                  <li>Building Strength Preservation</li>
                </ul>
              </div>

              <div className="termite-control-card-image">
                <img
                  src={protectionImg}
                  alt="Protection & Effectiveness"
                />
              </div>
            </div>

            {/* 4 */}
            <div className="termite-control-card reverse">
              <div className="termite-control-card-text">
                <h3>Safety, Reliability &amp; Professional Handling</h3>

                <ul>
                  <li>Professional Anti-Termite Treatment</li>
                  <li>Safe and Approved Termiticide Usage</li>
                  <li>Compliance with Pest Control Standards</li>
                  <li>Reliable Termite Management Solutions</li>
                </ul>
              </div>

              <div className="termite-control-card-image">
                <img
                  src={safetyImg}
                  alt="Safety, Reliability & Professional Handling"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </section>
  );
}