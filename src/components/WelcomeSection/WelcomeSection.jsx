import "./WelcomeSection.css";

import card1 from "../../assets/images/1servepro/home/support1.png";
import card2 from "../../assets/images/1servepro/home/support2.png";
import card3 from "../../assets/images/1servepro/home/support3.png";
import card4 from "../../assets/images/1servepro/home/support4.png";
import card5 from "../../assets/images/1servepro/home/support5.png";

const supportCards = [
  {
    img: card1,
    label: "24/7 Support",
  },
  {
    img: card2,
    label: "Accountability",
  },
  {
    img: card3,
    label: "Quality Assured",
  },
  {
    img: card4,
    label: "Team Work",
  },
  {
    img: card5,
    label: "Commitment",
  },
];

export default function WelcomeSection() {
  return (
    <section className="welcome-area">
      <div className="container">

        {/* =====================================================
            SECTION TITLE
        ====================================================== */}

        <div className="sec-title text-center">

          <h1>
            Welcome to ServePro
          </h1>

          <h2>
            Your trusted partner for professional hospitality
            and facility management services.
          </h2>

          <span className="border"></span>

        </div>


        {/* =====================================================
            SUPPORT CARDS
        ====================================================== */}

        <div className="support">

          <div className="support-row">

            {supportCards.map((card) => (
              <div
                className="support-card text-center"
                key={card.label}
              >

                <div className="icon-wrapper">

                  <img
                    src={card.img}
                    alt={card.label}
                    width="70"
                    height="70"
                    loading="lazy"
                    decoding="async"
                  />

                </div>

                <div className="label">
                  {card.label}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}