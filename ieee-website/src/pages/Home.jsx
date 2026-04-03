import React from 'react';

const Home = () => {
  return (
    <>
      <div className="hero-image">
        <img
           src="/images/college.jpg"
          alt="Dronacharya College of Engineering"
        />
      </div>
      <div className="page-layout">
        <main className="content">
          <div className="card-box">
            <h1 style={{ color: '#1f6f84' }}>Welcome to DICON 2027</h1>
            <h3 style={{ color: '#1f6f84' }}>
              Empowering the Future through Intelligent and Sustainable Computing
            </h3>
            <p>
              1<sup>st</sup> Dronacharya International Conference on Intelligent
              Computing and Emerging Technologies (DICON 2027) is a premier
              international conference dedicated to advancing intelligent,
              sustainable, and future-ready digital technologies. With the
              inspiring tagline "Intelligence for a Smarter Planet," DICON 2027
              provides a global platform for researchers, academicians, industry
              professionals, and young innovators to come together and share
              pioneering ideas that shape the technological landscape of tomorrow.
            </p>

            <p>
              Focusing on key domains such as artificial intelligence, Internet of
              Things, cybersecurity, smart electronics, data science, cloud and
              edge computing, and sustainable computing paradigms, the conference
              promotes interdisciplinary dialogue, ethical research practices, and
              impactful collaborations. DICON 2027 offers authors the opportunity
              to publish their accepted and presented papers in IEEE Xplore, in
              accordance with IEEE standards, thereby ensuring global visibility
              and academic excellence.
            </p>

            <p>
              Organized by Dronacharya College of Engineering, Gurugram (Haryana,
              India), an institution renowned for its strong research culture and
              industry collaborations, DICON 2027 is supported by state-of-the-art
              infrastructure, international academic partnerships, and an active
              innovation ecosystem. The conference also places special emphasis on
              engaging students and young professionals, nurturing the next
              generation of researchers and technologists committed to building a
              smarter and more sustainable digital future.
            </p>
          </div>
        </main>

        <aside className="important-dates">
          <h3>Important Dates</h3>
          <ul>
            <li>
              <span className="date-title">Paper Submission Deadline</span>
              <span className="date-value">November 30, 2026 (IST)</span>
            </li>
            <li>
              <span className="date-title">Notification of Acceptance</span>
              <span className="date-value">January 15, 2027 (IST)</span>
            </li>
            <li>
              <span className="date-title">
                Camera-ready Paper Submission & Author Registration
                Deadline
              </span>
              <span className="date-value">February 10, 2027 (IST)</span>
            </li>
            <li>
              <span className="date-title">Conference Dates</span>
              <span className="date-value">April 23-24, 2027 (IST)</span>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Home;
