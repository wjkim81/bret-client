import './Home.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  renderCarousel = () => {
    return (
      <section id="hero">
        <div className="carousel-container">
          <Container>
            <h2 className="animate__animated animate__fadeInDown">
              A Relation Extraction Tool for Biomedical Text Mining
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Sohyeun Bae, Suhyune Son, Seonjeong Hwang, Soo Jun Park, and
              Jang-Hwan Choi
            </p>
            <p className="animate__animated animate__fadeInUp">
              We propose a relation extraction tool for biomedical text mining.
              This tool extracts relations between entities tagged on biomedical
              texts and also provides the result files you can download.
            </p>
          </Container>
        </div>
      </section>
    );
  };

  renderMain() {
    return (
      <main id="main">
        <section id="about" className="about">
          <Container>
            <Row className="content">
              <Col lg={6}>
                <img
                  alt="slide"
                  className="archi-img"
                  src="static/img/slide/architecture.png"
                />
              </Col>
              <Col lg={6} className="pt-4 pt-lg-0">
                <p>
                  We applied weighting method{' '}
                  <a
                    href="https://arxiv.org/abs/1912.07167"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (Multi-Task Deep Neural Networks for Natural Language
                    Understanding)
                  </a>{' '}
                  to MTDNN
                  <a
                    href="https://arxiv.org/abs/1901.11504"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    (Internal-transfer Weighting of Multi-task Learning for Lung
                    Cancer Detection)
                  </a>{' '}
                  model to improve the performance of relation extraction task.
                  Auxiliary tasks such as Named Entity Recognition, Question
                  Answering, Multi-label classification, were used to train our
                  model with main task:RE.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    );
  }

  // render() {
  //   return (
  //     // {this.renderCarousel()}
  //     // {this.renderMain()}
  //   );
  // }
  render() {
    return (
      <div>
        {this.renderCarousel()}
        {this.renderMain()}
      </div>
    );
  }
}

export default Home;
