import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ChemicalDisease from './nlp/ChemicalDisease';
import DrugDrug from './nlp/DrugDrug';
import GeneDisease from './nlp/GeneDisease';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chemical-disease" exact component={ChemicalDisease} />
            <Route path="/drug-drug" exact component={DrugDrug} />
            <Route path="/gene-disease" exact component={GeneDisease} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer />
        </Router>
        <a href="/#" className="back-to-top">
          <i className="icofont-simple-up"></i>
        </a>
      </div>
    );
  }
}

export default App;
