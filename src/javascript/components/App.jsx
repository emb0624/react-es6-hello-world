import React from 'react';
import BaseComponent from './common/BaseComponent.jsx';
import { RouteHandler } from 'react-router';

class App extends BaseComponent {
  render() {
    return (
      <div id="app">
        <div id="wrapper">
          <div id="page-content-wrapper">
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
