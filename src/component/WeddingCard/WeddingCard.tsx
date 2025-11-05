import React from "react";

import weddingImage from "../../assets/images/WhatsApp Image 2025-11-04 at 11.55.34 PM.jpeg";
import weddingImage1 from "../../assets/images/WhatsApp Image 2025-11-04 at 11.59.56 PM.jpeg";
import weddingImage2 from "../../assets/images/WhatsApp Image 2025-11-05 at 12.06.59 AM.jpeg";


const WeddingCard = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Brush+Script+MT&family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Poppins:wght@400;600;700&display=swap');

        :root {
          --accent: #b22222;
          --muted: #333333;
          --bg: #fff8f0;
          --card-bg: rgba(255, 255, 255, 0.85);
        }

        .card {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg);
          padding: 24px;
        }

        .inner {
          width: 920px;
          max-width: 96%;
          background: var(--card-bg);
          padding: 34px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border: 6px solid rgba(178,34,34,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .inner::before,
        .inner::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 8px;
          background: repeating-linear-gradient(90deg, rgba(178,34,34,0.06) 0 8px, rgba(178,34,34,0.02) 8px 16px);
        }
        .inner::before { top: 0; }
        .inner::after { bottom: 0; }

        .ganesha {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          border: 6px solid rgba(255,255,255,0.6);
        }

        .seq {
          opacity: 0;
          transform: translateY(12px);
          animation: fadeUp 600ms ease forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .d-0 { animation-delay: 0s; }
        .d-1 { animation-delay: 0.25s; }
        .d-2 { animation-delay: 0.5s; }
        .d-3 { animation-delay: 0.85s; }
        .d-4 { animation-delay: 1.1s; }
        .d-5 { animation-delay: 1.35s; }
        .d-6 { animation-delay: 1.6s; }
        .d-7 { animation-delay: 1.85s; }
        .d-8 { animation-delay: 2.1s; }

        .sanskrit {
          font-family: 'Poppins', sans-serif;
          color: #0f172a;
          font-weight: 700;
        }

        .title {
          font-family: 'Great Vibes', cursive;
          color: var(--accent);
          font-size: 2.8rem;
          margin-top: 6px;
          text-align: center;
        }

        .save {
          font-family: 'Playfair Display', serif;
          color: var(--muted);
          font-size: 1.05rem;
          margin-top: 18px;
        }

        .date {
          font-family: 'Dancing Script', cursive;
          color: var(--accent);
          font-size: 2rem;
          margin-top: 6px;
        }

        .for-wedding {
          font-family: 'Poppins', sans-serif;
          color: #222;
          margin-top: 10px;
          font-weight: 600;
        }

        .names {
          display: flex;
          gap: 34px;
          margin-top: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .brideName {
          font-family: 'Playfair Display', serif;
          color: #8b1e3f;
          font-size: 1.6rem;
          font-weight: 700;
        }

        .groomName {
          font-family: 'Poppins', sans-serif;
          color: #194d33;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .invitation-text {
          margin-top: 20px;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          color: #2b2b2b;
          line-height: 1.5;
          font-size: 1rem;
        }

        iframe {
          border-radius: 12px;
          margin-top: 10px;
          width: 100%;
          height: 300px;
          border: 0;
        }

        .photos img {
          border-radius: 12px;
          margin: 10px 0;
          width: 100%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        @media (max-width:720px) {
          .title { font-size: 2rem; }
          iframe { height: 220px; }
        }
      `}</style>

      <div className="card">
        {/* 🕉️ Wedding Section */}
        <div className="inner">
          <img
            className="ganesha seq d-0"
            src="https://t4.ftcdn.net/jpg/03/70/80/85/360_F_370808510_NgyFtSO2Rw3RGvCLIM4YnGeVhON6jnzx.jpg"
            alt="Lord Ganesha"
          />
          <div className="sanskrit seq d-1">!!! Shree Ganeshaya Namaha !!!</div>
          <div className="title seq d-2">We Heartily Welcome You to Our Wedding</div>
          <div className="save seq d-3">Save The Date on your calendar</div>
          <div className="text seq d-4">Wednesday, 9:30 AM</div>
          <div className="date seq d-4">13 November 2025</div>
          <div className="for-wedding seq d-5">For the wedding of</div>

          <div className="names seq d-6">
            <div className="text-center">
              <div className="brideName">Bhavani</div>
              <div className="text-gray-700">
                D/o <strong>Shanmuka & Rekhabai</strong>
              </div>
            </div>

            <div className="text-center">
              <div className="groomName">Harisha</div>
              <div className="text-gray-700">
                S/o <strong>Nagarajappa  & Rathnamma</strong>
              </div>
            </div>
          </div>

          <div className="invitation-text seq d-7">
            With the blessings of God and our families, we joyfully invite you
            to join us for the marriage ceremony of Bhavani and Harisha. Please bless
            the couple and celebrate with us as we begin this beautiful journey together.
          </div>

          <div className="address-text seq d-8 text-center mt-4">
            <h4 className="font-medium">📍 Wedding Venue</h4>
            <h2 className="font-bold text-xl">
              Shree Yashaswini Convention Hall, Major G S Majjige Layout,
              Harihara-Harapanahalli, Near St. Mary’s Convent School, Harihar
            </h2>
          </div>

          <iframe
            title="Wedding Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.124952815198!2d75.8102317!3d14.5136719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9e4e982de3079%3A0x4c5f28f33c6c35a!2sShree%20Yashaswini%20Convention%20Hall%2C%20Harihara%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1730817800000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* 💐 Reception Section */}
        <div className="inner">
          <div className="title seq d-2">We Heartily Welcome You to the Reception</div>

          <div className="photos">
            <img src={weddingImage} alt="Wedding ceremony" />
            <img src={weddingImage1} alt="Wedding moment" />
            <img src={weddingImage2} alt="Couple photo" />
          </div>

          <div className="save seq d-3">Save The Date for Reception</div>
          <div className="font-bold text">Sunday, 12:00 PM</div>
          <div className="date seq d-4">16 November 2025</div>

         <div className="address-text seq d-8 text-center mt-4">
  <h4 className="font-medium">📍 Reception Venue</h4>
  <h2 className="font-bold text-xl">
    Chowdeshwari Temple, 1st Main 8th Cross Rd, K R Nagar, Vijayanagar Extension, Harihar, Karnataka 577601
  </h2>
</div>

<iframe
  title="Reception Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.1107290851974!2d75.80886067509254!3d14.514816585970845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb9e4dc1e47e57b%3A0x3b1c4b2b963d9d60!2sChowdeshwari%20Temple%2C%20K%20R%20Nagar%2C%20Vijayanagar%20Extension%2C%20Harihar%2C%20Karnataka%20577601!5e0!3m2!1sen!2sin!4v1730830000000!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: "12px", marginTop: "10px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        </div>
      </div>
    </>
  );
};

export default WeddingCard;
