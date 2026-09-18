import React from "react";
import "../../../style/ITSupport.css";

import bannerImg from "../../../assets/images/1servepro/it-support-service/banner.jpg";

import laptopDesktopImg from "../../../assets/images/1servepro/it-support-service/1 laptop and desktop sale.jpg";
import laptopRentalImg from "../../../assets/images/1servepro/it-support-service/2 Rental desktop and laptop.jpg";
import repairImg from "../../../assets/images/1servepro/it-support-service/3 Laptop and desktop repair & Maintance.jpg";
import printerImg from "../../../assets/images/1servepro/it-support-service/4 Printer Sales & services.jpg";
import cctvImg from "../../../assets/images/1servepro/it-support-service/5 CCTV Camera Installation.jpg";
import networkImg from "../../../assets/images/1servepro/it-support-service/6 Network set up & troubleshooting .jpg";
import softwareImg from "../../../assets/images/1servepro/it-support-service/7 Software Installation & Support.jpg";
import accessoriesImg from "../../../assets/images/1servepro/it-support-service/8 Computer Accesories sale .jpg";
import amcImg from "../../../assets/images/1servepro/it-support-service/9 AMC .jpg";
import backupImg from "../../../assets/images/1servepro/it-support-service/10 Data Backup.jpg";
import officeSupportImg from "../../../assets/images/1servepro/it-support-service/11 IT Support.jpg";

const itServices = [
  {
    title: "Laptop & Desktop Sales",
    image: laptopDesktopImg,
    items: [
      "Wide range of branded and custom-built systems",
      "High-performance devices for business & personal use",
      "Affordable pricing with genuine products",
      "Latest configurations for better productivity",
      "Expert consultation to choose the right system",
    ],
  },

  {
    title: "Laptop & Desktop Rental",
    image: laptopRentalImg,
    items: [
      "Flexible rental plans for short & long-term use",
      "Ideal for offices, events, and temporary projects",
      "Ready-to-use systems with quick deployment",
      "Cost-effective solution for business needs",
      "Technical support included",
    ],
  },

  {
    title: "Repair & Maintenance Services",
    image: repairImg,
    items: [
      "Fast diagnosis and troubleshooting",
      "Hardware and software repair solutions",
      "Upgrades (RAM, SSD, etc.) for better performance",
      "Preventive maintenance services",
      "On-site and remote support available",
    ],
  },

  {
    title: "Printer Sales & Services",
    image: printerImg,
    items: [
      "Supply of inkjet, laser & multifunction printers",
      "Installation and setup support",
      "Cartridge replacement and servicing",
      "Troubleshooting and repair services",
      "Annual maintenance support available",
    ],
  },

  {
    title: "CCTV Camera Installation",
    image: cctvImg,
    items: [
      "Advanced surveillance systems for home & office",
      "HD camera setup with remote monitoring",
      "Secure installation and configuration",
      "Maintenance and support services",
      "Improved safety and security",
    ],
  },

  {
    title: "Network Setup & Troubleshooting",
    image: networkImg,
    items: [
      "Complete network design and installation",
      "WiFi, LAN, and router configuration",
      "Secure and high-speed connectivity",
      "Network issue detection and resolution",
      "Ongoing monitoring and support",
    ],
  },

  {
    title: "Software Installation & Support",
    image: softwareImg,
    items: [
      "Genuine software installation and licensing",
      "Operating system setup and upgrades",
      "Antivirus and security solutions",
      "System updates and optimization",
      "Remote technical assistance",
    ],
  },

  {
    title: "Computer Accessories Sales",
    image: accessoriesImg,
    items: [
      "Keyboards, mouse, routers, cables & storage devices",
      "High-quality accessories at competitive prices",
      "Bulk supply for offices",
      "Compatibility and setup support",
      "Latest technology products available",
    ],
  },

  {
    title: "AMC (Annual Maintenance Contract)",
    image: amcImg,
    items: [
      "Regular system maintenance and monitoring",
      "Priority support for businesses",
      "Reduced downtime and better performance",
      "Cost-effective IT management",
      "Customized AMC plans",
    ],
  },

  {
    title: "Data Backup & Recovery",
    image: backupImg,
    items: [
      "Secure data backup solutions",
      "Cloud and local storage options",
      "Recovery of lost or corrupted data",
      "Protection against data loss",
      "Business-critical data security",
    ],
  },

  {
    title: "IT Support for Offices & Businesses",
    image: officeSupportImg,
    items: [
      "Complete IT infrastructure management",
      "Dedicated support for companies",
      "Server, network & system monitoring",
      "Quick issue resolution",
      "Scalable solutions for growing businesses",
    ],
  },
];

const ITSupport = () => {
  return (
    <div className="it-overview-page">

      {/* Banner */}
      <section
        className="it-overview-banner"
        style={{
          backgroundImage: `url("${bannerImg}")`,
        }}
        aria-label="IT Support Service"
      >
        <div className="it-overview-banner-overlay"></div>
      </section>

      {/* Main Section */}
      <section className="it-overview-section">
        <div className="it-overview-container">

          {/* Introduction */}
          <div className="it-overview-intro">
            <h1>
              How IT Support Services Help Businesses Run Smoothly?
            </h1>

            <span className="it-overview-border"></span>

            <p>
              IT Support Services play a crucial role in ensuring smooth,
              secure, and uninterrupted operations for businesses and
              individuals. From managing IT infrastructure and resolving
              technical issues to providing security, data protection, and
              system optimization, these services help organizations stay
              productive and efficient. Whether it’s laptop repairs, network
              setup, CCTV installation, or ongoing IT maintenance,
              professional IT support enhances performance, reduces downtime,
              and ensures business continuity across offices, homes, and
              commercial environments.
            </p>
          </div>

          {/* Service Cards */}
          <div className="it-overview-grid">
            {itServices.map((service, index) => (
              <article
                className="it-overview-card"
                key={service.title}
              >
                {/* Image */}
                <div className="it-overview-card-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Content */}
                <div className="it-overview-card-content">
                  <h2>{service.title}</h2>

                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ITSupport;