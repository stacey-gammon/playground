import React from 'react';

import { AppContainer } from '../Components/AppContainer';
import { VisualizationListContainer } from '../components/VisualizationListContainer';
import { DashboardListContainer } from '../components/DashboardListContainer';
import { Router, Route, IndexRedirect } from 'react-router';
import { SavedObjectTypes } from '../../common/SavedObjectTypes';

function getBaseRouteForType(type) {
  return `/${type}`;
}

function getListRouteForType(type) {
  return `${getBaseRouteForType(type)}/list`;
}

export function Routes(props) {
  // Setup an event listener on the hashchange to catch global state changes
  const { history } = props;

  const dashboardListRoute = getListRouteForType(SavedObjectTypes.DASHBOARD);

  return (
      <Router history={ history }>
        <Route path="/" component={ AppContainer }>
          <IndexRedirect to={dashboardListRoute} />
          <Route path={ getBaseRouteForType(SavedObjectTypes.DASHBOARD) }>
            <IndexRedirect to="list"/>
            <Route path="list" component={ DashboardListContainer }/>
          </Route>
          <Route path={ getBaseRouteForType(SavedObjectTypes.VISUALIZATION) }>
            <IndexRedirect to="list"/>
            <Route path="list" component={ VisualizationListContainer }/>
          </Route>
        </Route>
      </Router>
  );
}