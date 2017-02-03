import React from 'react';

import { fetchDashboards } from './actions/dashboards';
import { AppContainer } from './containers/app';
import { DashboardListContainer } from './containers/dashboard_list';
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
            onEnter={ fetchDashboards }
            component={ DashboardListContainer }/>
        </Route>
      </Route>
    </Router>
  );
};