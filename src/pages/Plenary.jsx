import React from 'react';

const Plenary = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header">
            <h1>Plenary Speakers</h1>
          </div>
          <div className="speakers-grid">
            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/shyam-s-pandey.jpeg"
                alt="Shyam S Pandey"
              />
              <h3>Shyam S Pandey</h3>
              <p>
                Professor at Graduate School of Life Science System Engineering,
                Kyushu Institute of Technology, Kitakyushu, Japan
              </p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/ghanshyam-singh.jpeg"
                alt="Ghanshyam Singh"
              />
              <h3>Ghanshyam Singh</h3>
              <p>
                Professor, Department of Electrical and Electronics Engineering
                University of Johannesburg, Johannesburg, South Africa
              </p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/pawan-tiwari.jpeg"
                alt="Pawan Tiwari"
              />
              <h3>Pawan Tiwari</h3>
              <p>
                Professional in Business Analytics, Data Science, Management
                Consulting and Technology Management
              </p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/ashwani-sharma.jpeg"
                alt="Ashwani Sharma"
              />
              <h3>Ashwani Sharma</h3>
              <p>
                Associate professor, Indian Institute of Technology, Ropar.<br />
                Phd. from University of Deusto, Bilbao, Spain
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Plenary;
