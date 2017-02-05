import React from 'react';

import { AppContainer } from './components/AppContainer';
import { DashboardListContainer } from './components/DashboardListContainer';
import { Router, Route, IndexRedirect } from 'react-router';

export default (props) => {
  // Setup an event listener on the hashchange to catch global state changes
  const { history } = props;

  return (
    <Router history={ history }>
      <Route
        path="/"
        component={ AppContainer }>
        <IndexRedirect to="/dashboards/list"/>
        <Route
          path="/dashboards">
          <IndexRedirect to="list"/>
          <Route
            path="list"
            component={ DashboardListContainer }/>
        </Route>
      </Route>
    </Router>
  );
};