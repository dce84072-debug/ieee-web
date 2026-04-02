import React, { useState, useEffect } from 'react';

const Institute = () => {
  const images = [
    "/images/dce-1.jpg",
    "/images/dce-2.jpg",
    "/images/dce-3.jpg",
    "/images/dce-4.jpg",
    "/images/dce-5.jpg",
    "/images/dce-6.jpg",
    "/images/dce-7.jpg",
    "/images/dce-8.jpg",
    "/images/dce-9.jpg",
    "/images/dce-10.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="gallery-container">
            <button className="nav-btn left" onClick={prevImage}>
              &#10094;
            </button>

            <img
              id="galleryImage"
              src={images[currentIndex]}
              alt="Gallery Image"
            />

            <button className="nav-btn right" onClick={nextImage}>
              &#10095;
            </button>
          </div>
          <div className="page-header">
            <p>
              <a
                href="https://ggnindia.dronacharya.info/"
                style={{ color: '#2c6e7e' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Dronacharya College of Engineering, Gurugram
              </a>
            </p>
          </div>

          <div className="card-box">
            <p>
              Dronacharya College of Engineering (DCE), Gurugram, established in
              1998, has been shaping future-ready engineers and technologists
              through a strong emphasis on academic excellence, experiential
              learning, cutting-edge research, and industry collaboration.
            </p>

            <p>
              We feel pride privilege to introduce ourselves as one of the
              leading Technical Institutes in the State of Haryana, which has
              evolved itself into an education centre of repute since its
              inception in 1998. The college is approved by All India Council
              for Technical Education (AICTE), Affiliated to Gurugram
              University, Gurgaon, Accredited by NBA & NAAC, ISO 10001-2018 &
              21001-2018 Certified and winner of Outstanding Institution Award
              (Engineering College Category) for the year 2022-23 by National
              Institute of Technical Teachers Training and Research (NITTTR
              Chandigarh, Ministry of Education, Government of India). We offer
              B.Tech. degree in nine Branches – Computer Science and
              Engineering, Electronics & Communication Engineering, Mechanical
              Engineering, Electronics & Computer Engineering, Electrical &
              Electronics Engineering and Computer Science & Information
              Technology¸ CSE-Artificial Intelligence & Machine Learning
              Engineering, CSE-Internet of Things & Cyber Security Engineering,
              Robotics and Automation Engineering and also Postgraduate
              Programme (M.Tech.) in Mechanical Engineering, Electronics &
              Communication Engineering, Computer Science and Engineering and
              Information Technology. The College has excellent infrastructure,
              well-equipped Labs and Library, all the desired amenities, sundry
              facilities and equipments, highly qualified and experienced Staff,
              excellent University results with myriad merits and peerless
              performance on social & cultural front.
            </p>

            <p>
              The institute offers comprehensive engineering programs across
              eight departments, including CSE, CSIT, CSE (IoT), CSE (AI & ML),
              ECE, ECS, Mechanical Engineering, and Robotics & Automation. It
              maintains a vibrant and progressive research ecosystem that
              actively promotes advanced research, innovation, and
              interdisciplinary collaboration.
            </p>

            <p>
              DCE maintains a vibrant research ecosystem promoting advanced
              research, innovation, and interdisciplinary collaboration. The
              institute also maintains strong academic and industry
              collaborations with leading organizations and universities,
              including e-Yantra IIT Bombay, IIT Delhi Virtual Labs, Infosys
              Springboard, Kyushu Institute of Technology, Japan, and Daegu
              Catholic University, South Korea. These collaborations facilitate
              joint research initiatives, faculty and student exchange,
              internships, and collaborative technology development programs.
              The institute provides well-established research infrastructure
              including:
            </p>
            <ul>
              <li>iMac LAB</li>
              <li>CCNA Lab</li>
              <li>e-Yantra Lab</li>
              <li>FESTO Lab</li>
              <li>Robotics Lab</li>
              <li>AutoDesk Lab</li>
              <li>3D Printing Lab</li>
            </ul>
            <p>
              Licensed software such as Turnitin, Drillbit for Plagiarism check
              High-speed internet, digital library access (DELNET, ENLIST), and
              research incubation facilities are available to support
              researchers. Overall, the institute offers a rich and productive
              research atmosphere that ensures successful organization of
              high-quality international conferences and promotes meaningful
              academic contributions.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Institute;
