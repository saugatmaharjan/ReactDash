import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './components/global-styles';
import Site from './screens/Site';
import StyleGuide from './screens/StyleGuide';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Site} />
            <Route exact path="/guide" component={StyleGuide} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
