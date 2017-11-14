import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/header';
import Home from './Home';
import About from './About';

class Site extends Component {
  render() {
    return (
      <div className="app">
        { Header() }
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default Site;
