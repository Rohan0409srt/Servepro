import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import "../../../style/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
     
      <main className="privacy-policy-main">
        <section className="privacy-policy-section">
          <div className="privacy-policy-container">

            {/* Page Heading */}
            <div className="privacy-policy-header">
              <h1>PRIVACY POLICY</h1>
              <p className="privacy-policy-updated">
                Last Updated: 03/09/2026
              </p>
            </div>

            {/* Introduction */}
            <div className="privacy-policy-content">

              <p>
                This Privacy Policy explains how Servepro Hospitality and
                Facility Private Limited. collects, uses, handles and protects
                information provided by users, customers, prospective customers
                and visitors to our website.
              </p>

              <p>
                By using our website or contacting us for our services, you
                agree to the terms of this Privacy Policy.
              </p>

              {/* What Information We Collect */}
              <div className="privacy-policy-block">
                <h2>What Information We Collect</h2>

                <p>We may collect the following information:</p>

                <ul>
                  <li>Name</li>
                  <li>Company / Organization Name</li>
                  <li>Contact Number</li>
                  <li>Email Address</li>
                  <li>Address / Location</li>
                  <li>Service requirements and enquiry details</li>
                  <li>
                    Other information required for providing our services
                  </li>
                  <li>
                    Any information voluntarily provided by you through our
                    enquiry/contact forms
                  </li>
                </ul>

                <p>
                  We will collect and process personal information in accordance
                  with applicable Indian laws. We do not store credit card, debit
                  card or similar card information through our website.
                </p>
              </div>

              {/* How We Use the Information */}
              <div className="privacy-policy-block">
                <h2>How We Use the Information</h2>

                <p>We may use the information collected for:</p>

                <ul>
                  <li>Responding to service enquiries</li>
                  <li>Understanding your service requirements</li>
                  <li>Providing and managing our services</li>
                  <li>Preparing quotations and proposals</li>
                  <li>
                    Communicating with you regarding our services
                  </li>
                  <li>Internal record keeping</li>
                  <li>
                    Improving our services and customer experience
                  </li>
                  <li>Internal training and quality assurance</li>
                  <li>
                    Sending relevant information regarding our services
                  </li>
                </ul>

                <p>
                  These purposes are based on the service-related uses listed in
                  your PDF.
                </p>
              </div>

              {/* Sharing of Information */}
              <div className="privacy-policy-block">
                <h2>Sharing of Information</h2>

                <p>
                  We may share information where reasonably required with:
                </p>

                <ul>
                  <li>
                    Service providers assisting us in providing our services
                  </li>
                  <li>Our group companies, where relevant</li>
                  <li>Auditors, consultants or professional advisors</li>
                  <li>
                    Government authorities, regulatory authorities or
                    law-enforcement authorities where legally required
                  </li>
                </ul>

                <p>
                  We do not sell or rent your personal information.
                </p>
              </div>

              {/* Cookies */}
              <div className="privacy-policy-block">
                <h2>Cookies</h2>

                <p>
                  Our website may use cookies and similar technologies to
                  understand website usage and improve our website and services.
                </p>

                <p>
                  Third-party service providers, including analytics providers,
                  may have their own privacy policies regarding their use of
                  information.
                </p>
              </div>

              {/* Your Rights */}
              <div className="privacy-policy-block">
                <h2>Your Rights</h2>

                <p>
                  You may request us to review, correct or amend the personal
                  information provided by you, subject to applicable law.
                </p>

                <p>
                  You may also withdraw consent where applicable by contacting us
                  through our official email address.
                </p>

                <p>
                  Please note that if certain information is necessary for
                  providing our services, withdrawal or non-provision of such
                  information may affect our ability to provide those services.
                </p>
              </div>

              {/* Data Retention */}
              <div className="privacy-policy-block">
                <h2>Data Retention</h2>

                <p>
                  We may retain your information for as long as required to
                  provide our services and as permitted or required under
                  applicable law.
                </p>
              </div>

              {/* Data Security */}
              <div className="privacy-policy-block">
                <h2>Data Security</h2>

                <p>
                  We take reasonable precautions to protect the security and
                  integrity of your personal information.
                </p>
              </div>

              {/* Contact / Grievance */}
              <div className="privacy-policy-block privacy-policy-last-block">
                <h2>Contact / Grievance</h2>

                <p>
                  For any questions, concerns or grievances regarding this
                  Privacy Policy, you may contact us using the contact
                  information provided on our website.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

   
    </div>
  );
};

export default PrivacyPolicy;