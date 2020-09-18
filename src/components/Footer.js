import './Footer.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-info">
                <h3>Medical AI Lab @ EWHA</h3>
                <strong>Phone:</strong> +82 2 3277 6945
                <br />
                <strong>Email:</strong> choij@ewha.ac.kr
                <br />
              </div>
            </Col>
            <Col lg={3} md={6} className="footer-links">
              <div className="footer-menu">
                <h4>Menu</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} />{' '}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} />{' '}
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} className="footer-links">
              <div className="footer-menu">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} />{' '}
                    <Link to="/chemical-disease">Chemical-Disease</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} />{' '}
                    <Link to="/drug-drug">Drug-Drug</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faChevronRight} />{' '}
                    <Link to="/gene-disease">Gene-Disease</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="copyright">
            &copy; Copyright{' '}
            <strong>
              <span>EWHA Medical AI Lab</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
