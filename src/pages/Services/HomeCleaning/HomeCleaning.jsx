import React from "react";
import "../../../style/HomeCleaning.css";

import banner from "../../../assets/images/1servepro/special-service/Home-Cleaning/banner.jpg";

import img1 from "../../../assets/images/1servepro/special-service/Home-Cleaning/1 Bedroom.jpg";
import img2 from "../../../assets/images/1servepro/special-service/Home-Cleaning/2 Kitchen.jpg";
import img3 from "../../../assets/images/1servepro/special-service/Home-Cleaning/3Washroom.jpg";
import img4 from "../../../assets/images/1servepro/special-service/Home-Cleaning/4Hall.jpg";

const HomeCleaning = () => {
  return (
    <div className="home-cleaning-page">

      <section
        className="home-cleaning-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="home-cleaning-banner-overlay"></div>
      </section>

      <section className="home-cleaning-section">
        <div className="home-cleaning-container">

          <div className="home-cleaning-intro">
            <h1>
              How do professional home deep cleaning services ensure a
              hygienic, fresh, and thoroughly sanitized living space for
              your home?
            </h1>

            <span className="home-cleaning-border"></span>

            <p>
              Home Deep Cleaning Services offer a comprehensive and detailed
              approach to maintaining a clean, healthy, and comfortable living
              environment. Using advanced equipment, eco-friendly cleaning
              solutions, and proven techniques, professionals thoroughly clean
              and sanitize every corner of your home, including hard-to-reach
              areas, high-touch surfaces, kitchens, bathrooms, and living
              spaces. These services effectively remove dust, dirt, allergens,
              grease, and harmful bacteria, ensuring a safe and hygienic space
              for you and your family. Ideal for apartments, villas, and
              residential properties, home deep cleaning enhances overall
              cleanliness, improves indoor air quality, and creates a fresh,
              welcoming atmosphere.
            </p>
          </div>

          <div className="home-cleaning-service-list">

            <div className="home-cleaning-card">
              <div className="home-cleaning-text">
                <h2>Bedroom</h2>

                <ul>
                  <li>Dry dusting of Walls and ceiling.</li>
                  <li>Windows &amp; Grills.</li>
                  <li>Furniture Dusting.</li>
                  <li>Lighting Fixtures, Fan/AC.</li>
                  <li>Cupboard Cleaning from outside.</li>
                  <li>Mattress Vacuuming.</li>
                  <li>Floor Scrubbing.</li>
                </ul>
              </div>

              <div className="home-cleaning-image">
                <img src={img1} alt="Bedroom" />
              </div>
            </div>

            <div className="home-cleaning-card reverse">
              <div className="home-cleaning-text">
                <h2>Kitchen</h2>

                <ul>
                  <li>Removal of Cobwebs.</li>
                  <li>Window &amp; Exhaust Fan.</li>
                  <li>Dry dusting of walls and ceiling.</li>
                  <li>Dusting of appliances from Outside.</li>
                  <li>Cabinets from outside.</li>
                  <li>Kitchen Platform.</li>
                  <li>Floor Cleaning.</li>
                </ul>
              </div>

              <div className="home-cleaning-image">
                <img src={img2} alt="Kitchen" />
              </div>
            </div>

            <div className="home-cleaning-card">
              <div className="home-cleaning-text">
                <h2>Washroom</h2>

                <ul>
                  <li>Removal of cobwebs.</li>
                  <li>Windows &amp; Exhaust Fan.</li>
                  <li>Cleaning of Shelf and cabinets.</li>
                  <li>Showers and Taps cleaning.</li>
                  <li>Mirror and Glass Cleaning.</li>
                  <li>Sinks cleaning.</li>
                  <li>Wash basin cleaning.</li>
                </ul>
              </div>

              <div className="home-cleaning-image">
                <img src={img3} alt="Washroom" />
              </div>
            </div>

            <div className="home-cleaning-card reverse">
              <div className="home-cleaning-text">
                <h2>Hall</h2>

                <ul>
                  <li>Removal of cobwebs.</li>
                  <li>Dry dusting of walls and ceiling.</li>
                  <li>Windows and Grills.</li>
                  <li>Lighting Fixtures.</li>
                  <li>All Doors &amp; Doors Handle cleaning.</li>
                  <li>Furniture Dusting.</li>
                  <li>Balcony Cleaning.</li>
                  <li>Cupboard Cleaning from outside.</li>
                  <li>Flooring with Machine.</li>
                </ul>
              </div>

              <div className="home-cleaning-image">
                <img src={img4} alt="Hall" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeCleaning;