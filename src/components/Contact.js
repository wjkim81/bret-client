import './Contact.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Container>
        <div>
          <iframe
            title="google_map"
            style={{ border: '0', width: '100%', height: '450px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.683311801495!2d126.94394029483567!3d37.562524391687255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c988459902d69%3A0xf2536b3850f9d80d!2z7J207ZmU7Jes7J6Q64yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1599533926153!5m2!1sko!2skr"
          ></iframe>
        </div>

        <Row className="mt-5">
          <Col sm={3}>
            <div className="info">
              <div className="logo">
                <div className="lab-logo">
                  <a href="http://jchoi315.cafe24.com/">
                    <img
                      alt="AIBI Lab"
                      src="static/img/team/AIBILAB_LOGO1.png"
                    ></img>
                  </a>
                </div>
                <div className="school-logo">
                  <a href="http://www.ewha.ac.kr/ewha/index.do">
                    <div className="school-imgs">
                      <img
                        alt="Ewha Womans University1"
                        src="static/img/team/EWHA_LOGO2.png"
                      ></img>
                      <br />
                      <img
                        alt="Ewha Womans University2"
                        src="static/img/team/EWHA_LOGO1.png"
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div className="info">
              <div className="address">
                {/* <FontAwesomeIcon icon={faMapMarkerAlt} mask={['circle']} /> */}
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>
                  Collaborative Research Building
                  <br />
                  52, Ewhayeodae-gil, Seodaemun-gu, Seoul
                  <br />
                  Republic of Korea 03760
                </p>
              </div>
            </div>
          </Col>

          <Col sm={3}>
            <div className="info">
              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>choij@ewha.ac.kr</p>
              </div>
            </div>
          </Col>

          <Col sm={3}>
            <div className="info">
              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+82 2 3277 6945</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
