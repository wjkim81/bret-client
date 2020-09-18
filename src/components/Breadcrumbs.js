import './Breadcrumbs.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Breadcrumbs extends React.Component {
  state = { task: null };

  componentDidMount() {
    this.setState({ task: this.props.task });
  }

  renderTask() {
    if (!this.state) {
      return <div>Loading...</div>;
    }

    if (this.state.task === 'chemical-disease') {
      return <h2>Chemical-Disease Relation Extraction</h2>;
    } else if (this.state.task === 'drug-drug') {
      return <h2>Drug-Drug Relation Extraction</h2>;
    } else if (this.state.task === 'gene-disease') {
      return <h2>Gene-Disease Relation Extraction</h2>;
    }
  }

  render() {
    return (
      <section id="breadcrumbs" className="breadcrumbs">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            {this.renderTask()}
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{this.state.task}</li>
            </ol>
          </div>
        </Container>
      </section>
      // <div>
      //   <Breadcrumb id="breadcrumbs">
      //     <Container classNameName="d-flex justify-content-between align-items-center">
      //       {this.renderTask()}
      //       <Breadcrumb.Item>
      //         <Link to="/">Home</Link>
      //       </Breadcrumb.Item>
      //       <Breadcrumb.Item>{this.state.task}</Breadcrumb.Item>
      //     </Container>
      //   </Breadcrumb>
      // </div>
    );
  }
}

export default Breadcrumbs;
