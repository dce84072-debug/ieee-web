import React from 'react';

const Keynote = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header">
            <h1>Keynote Speakers</h1>
          </div>
          <div className="speakers-grid">
            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/yogesh-puri.jpeg"
                alt="Yogesh Puri"
              />
              <h3>Yogesh Puri</h3>
              <p>Sr. Architect - Tech (AIA - Data) / Data Modeler at Cognizant</p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/vandana-sharma.jpeg"
                alt="Vandana Sharma"
              />
              <h3>Vandana Sharma</h3>
              <p>Data & Analytics professional at Infosys</p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/Indraneel Roy.jpeg"
                alt="Indraneel Roy"
              />
              <h3>Indraneel Roy</h3>
              <p>Data Scientist at Ksolves India Ltd</p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/shivank-singh.jpeg"
                alt="Shivank Singh"
              />
              <h3>Shivank Singh</h3>
              <p>
                Backend Architect at Dutch IOT Solutions, Amsterdam, Netherlands
              </p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/harshit-raizada.jpeg"
                alt="Harshit Raizada"
              />
              <h3>Harshit Raizada</h3>
              <p>AI Engineer at Ascendion</p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/sejal-dhiman.jpeg"
                alt="Sejal Dhiman"
              />
              <h3>Sejal Dhiman</h3>
              <p>Data Scientist at Ezeiatech System private Ltd</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Keynote;
