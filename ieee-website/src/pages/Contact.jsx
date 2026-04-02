import React from 'react';

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="contact-layout">
            <div className="card-box card-box-contact">
              <p>
                For all queries related to paper submission, registration,
                publication, and general information about DICON 2027, please
                contact:
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:dicon.dce@gmail.com">dicon.dce@gmail.com</a
                >,<br />
                <a href="mailto:dicon2027@ggnindia.dronacharya.info"
                  >dicon2027@ggnindia.dronacharya.info</a
                >
              </p>
              <p>
                 Dronacharya College of Engineering, Gurugram, Haryana, India
              </p>
              <p>
                📞 <strong>Phone:</strong>
                <a href="tel:+919541158333">+91-9541158333</a> (Dr. Ritu Pahwa),
                <a href="tel:+919899156795">+91-9899156795</a> (Prof. Tamanna
                Sehgal)<br />
                🕒 <strong>Office Hours:</strong> Monday–Friday | 9:00 AM – 4:00
                PM (IST)<br />
                🌐 <strong>Website:</strong>
                <a href="https://www.dicon2027.com">www.dicon2027.com</a>
              </p>
            </div>

            <div className="card-box card-box-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.6910163395314!2d76.86666717552619!3d28.42857879331307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6ad5abdad98b%3A0xeb13a7d0eb14cc49!2sDronacharya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1767934130814!5m2!1sen!2sin"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                title="Dronacharya College of Engineering Location"
              ></iframe>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
