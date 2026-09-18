import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "../../../style/TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-conditions-page">
    

      <main className="terms-conditions-main">
        <section className="terms-conditions-section">
          <div className="terms-conditions-container">

            {/* Page Header */}
            <div className="terms-conditions-header">
              <h1>TERMS &amp; CONDITIONS</h1>

              <p className="terms-conditions-updated">
                Last Updated: 03/09/2026
              </p>
            </div>

            {/* Policy Content */}
            <div className="terms-conditions-content">

              {/* Introduction */}
              <p>
                These Terms and Conditions constitute an agreement between
                Servepro Hospitality and Facility Private Limited. and the
                customer or user of our website and services. By using our
                website or availing our services, you agree to these Terms and
                Conditions and our Privacy Policy.
              </p>

              {/* Service Information */}
              <div className="terms-conditions-block">
                <h2>Service Information</h2>

                <p>
                  We provide hospitality, housekeeping, facility management and
                  other related professional services as described on our
                  website or in our service proposals.
                </p>

                <p>
                  Service scope, manpower, frequency, duration, pricing and
                  other applicable conditions may vary depending on the specific
                  service agreement, quotation, work order or contract.
                </p>

                <p>
                  Customers are responsible for providing accurate information
                  regarding their service requirements.
                </p>
              </div>

              {/* Service Charges & Payment */}
              <div className="terms-conditions-block">
                <h2>Service Charges &amp; Payment</h2>

                <p>
                  You agree to pay the charges applicable to the services
                  availed from Servepro as specified in the relevant quotation,
                  work order, purchase order, service agreement or contract.
                </p>
              </div>

              {/* Website Use */}
              <div className="terms-conditions-block">
                <h2>Website Use</h2>

                <p>
                  You agree not to use our website or services for any unlawful,
                  illegal or unauthorized purpose or in violation of applicable
                  Indian or local laws.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="terms-conditions-block">
                <h2>Third-Party Links</h2>

                <p>
                  Our website may contain links to third-party websites. If you
                  access such websites, their respective terms of use and
                  privacy policies will apply.
                </p>
              </div>

              {/* Service Agreement */}
              <div className="terms-conditions-block">
                <h2>Service Agreement</h2>

                <p>
                  Where a customer engages Servepro for services, the specific
                  quotation, work order, purchase order, service agreement or
                  contract may contain additional terms relating to the scope,
                  duration, pricing, payment, manpower and service requirements.
                </p>

                <p>
                  In case of any conflict, the specific written agreement
                  between Servepro and the customer shall govern the relevant
                  service arrangement.
                </p>
              </div>

              {/* Refund */}
              <div className="terms-conditions-block">
                <h2>Refund</h2>

                <p>
                  Where applicable, a customer may be entitled to claim a refund
                  if Servepro is unable to provide the agreed service, subject
                  to the applicable service agreement and Cancellation &amp;
                  Refund Policy.
                </p>
              </div>

              {/* Force Majeure */}
              <div className="terms-conditions-block">
                <h2>Force Majeure</h2>

                <p>
                  Servepro shall not be liable for failure or delay in
                  performing its obligations where such performance is prevented
                  or delayed by circumstances beyond its reasonable control,
                  including events qualifying as force majeure.
                </p>

                <p>
                  This principle is also included in your provided Terms &amp;
                  Conditions draft.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="terms-conditions-block">
                <h2>Limitation of Liability</h2>

                <p>
                  Information published on our website is provided for general
                  informational purposes. While we make reasonable efforts to
                  keep the information accurate and updated, we do not guarantee
                  that all website information will always be complete, current
                  or error-free.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="terms-conditions-block">
                <h2>Intellectual Property</h2>

                <p>
                  The content, branding, text, graphics, design and other
                  materials available on our website are proprietary to Servepro
                  unless otherwise stated. Unauthorized copying, reproduction or
                  use may be subject to applicable laws.
                </p>
              </div>

              {/* Governing Law */}
              <div className="terms-conditions-block">
                <h2>Governing Law</h2>

                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India.
                </p>
              </div>

              {/* Jurisdiction */}
              <div className="terms-conditions-block">
                <h2>Jurisdiction</h2>

                <p>
                  Any dispute arising out of or relating to these Terms or the
                  services provided by Servepro shall be subject to the
                  jurisdiction of the courts at [Mumbai, Maharashtra], subject
                  to applicable law.
                </p>
              </div>

              {/* Contact */}
              <div className="terms-conditions-block terms-conditions-last-block">
                <h2>Contact</h2>

                <p>
                  For questions, concerns or communications relating to these
                  Terms, please contact Servepro using the contact details
                  provided on our website.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default TermsConditions;