'use strict';
import React from 'react';

class Test extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>This is a simple Hello World application built on ReactJS (ES6) with Gulp</p>
      </div>
    );
  }
}

React.render(<Test/>, document.body);
