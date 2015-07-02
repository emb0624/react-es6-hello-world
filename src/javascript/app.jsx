'use strict';
import React from 'react';
import {
  run,
  Route,
  HashLocation,
  DefaultRoute
} from 'react-router';
import App from './components/App.jsx';

class Placeholder extends React.Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Placeholder}/>
  </Route>
);

run(routes, HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});
