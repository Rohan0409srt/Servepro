import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "../../../style/CancellationRefundPolicy.css";

const CancellationRefundPolicy = () => {
  return (
    <div className="cancellation-policy-page">
    
      <main className="cancellation-policy-main">
        <section className="cancellation-policy-section">
          <div className="cancellation-policy-container">

            {/* Page Header */}
            <div className="cancellation-policy-header">
              <h1>CANCELLATION &amp; REFUND POLICY</h1>
              <p className="cancellation-policy-updated">
                Last Updated: 03/09/2026
              </p>
            </div>

            {/* Policy Content */}
            <div className="cancellation-policy-content">

              <p>
                Servepro Hospitality and Facility Private Limited. provides
                professional hospitality, housekeeping, facility management and
                related services. Cancellation and refund requests for services
                will be handled according to the agreed service terms,
                quotation, work order, service agreement or contract.
              </p>

              {/* Cancellation of Services */}
              <div className="cancellation-policy-block">
                <h2>Cancellation of Services</h2>

                <ul>
                  <li>
                    Cancellation requests must be communicated to Servepro in
                    writing through the official contact details provided on our
                    website.
                  </li>

                  <li>
                    Cancellation of a service may be accepted depending on the
                    nature of the service, service commencement status and the
                    terms agreed with the customer.
                  </li>

                  <li>
                    Once manpower, resources, equipment or other arrangements
                    have been deployed for the service, cancellation may be
                    subject to applicable charges as agreed in the quotation,
                    work order or service agreement.
                  </li>

                  <li>
                    For recurring or contract-based services, the applicable
                    notice period for cancellation will be as specified in the
                    respective service agreement or contract.
                  </li>
                </ul>
              </div>

              {/* Refunds */}
              <div className="cancellation-policy-block">
                <h2>Refunds</h2>

                <ul>
                  <li>
                    If a service has not been provided due to reasons
                    attributable to Servepro, the customer may be eligible for a
                    refund, subject to the terms agreed for that particular
                    service.
                  </li>

                  <li>
                    Where a service has already been provided, completed or
                    partially provided, refund eligibility will be determined
                    based on the service agreement and the actual services
                    delivered.
                  </li>

                  <li>
                    Any approved refund will be processed within the applicable
                    period communicated by Servepro.
                  </li>

                  <li>
                    Refunds, where applicable, will normally be made through the
                    original payment method or another mutually agreed method.
                  </li>
                </ul>
              </div>

              {/* Service Complaints */}
              <div className="cancellation-policy-block cancellation-policy-last-block">
                <h2>Service Complaints</h2>

                <p>
                  If you have any concern regarding the quality or delivery of a
                  service, please contact our customer support/service team with
                  details of the issue. We will review the matter and take
                  appropriate action based on the applicable service agreement.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default CancellationRefundPolicy;