import "./ClientSlider.css";

import company1 from "../../assets/images/1servepro/home/Company-1.jpg";
import company2 from "../../assets/images/1servepro/home/Company-2.jpg";
import company3 from "../../assets/images/1servepro/home/Company-3.jpg";
import company4 from "../../assets/images/1servepro/home/Company-4.jpg";
import company5 from "../../assets/images/1servepro/home/Company-5.jpg";
import company6 from "../../assets/images/1servepro/home/Company-6.jpg";
import company7 from "../../assets/images/1servepro/home/Company-7.jpg";
import company8 from "../../assets/images/1servepro/home/Company-8.jpg";
import company9 from "../../assets/images/1servepro/home/Company-9.jpg";
import company10 from "../../assets/images/1servepro/home/Company-10.jpg";
import company11 from "../../assets/images/1servepro/home/Company-11.jpg";
import company12 from "../../assets/images/1servepro/home/Company-12.jpg";
import company13 from "../../assets/images/1servepro/home/Company-13.jpg";
import company14 from "../../assets/images/1servepro/home/Company-14.jpg";
import company15 from "../../assets/images/1servepro/home/Company-15.jpg";
import company16 from "../../assets/images/1servepro/home/Company-16.jpg";
import company17 from "../../assets/images/1servepro/home/Company-17.jpg";
import company18 from "../../assets/images/1servepro/home/Company-18.jpg";
import company19 from "../../assets/images/1servepro/home/Company-19.jpg";

const brandLogos = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
  company9,
  company10,
  company11,
  company12,
  company13,
  company14,
  company15,
  company16,
  company17,
  company18,
  company19,
];

export default function ClientSlider() {
  /*
   * IMPORTANT:
   * Same logo set is rendered twice.
   * When first set finishes, second identical set
   * is already underneath it, creating a seamless loop.
   */
  const sliderLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="brand-area">
      <div className="container">

        <div className="client-slider">
          <div className="client-slider-track">
            {sliderLogos.map((logo, index) => (
              <div
                className="client-slider-item"
                key={index}
              >
                <div className="brand-logo-holder">
                  <img
                    src={logo}
                    alt={`Client ${((index % brandLogos.length) + 1)}`}
                    width="180"
                    height="80"
                    loading={index < 8 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}