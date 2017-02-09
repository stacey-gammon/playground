import * as React from 'react';
import { Container } from 'flux/utils';

import { DashboardListView } from '../views/DashboardListView';
import { dashboardStore } from '../stores/DashboardStore';

class DashboardList extends React.Component {
  static getStores() {
    return [dashboardStore];
  }

  static calculateState() {
    return {
      dashboardState: dashboardStore.getState(),
    };
  }

  render() {
    return <DashboardListView dashboards={this.state.dashboardState.dashboards}/>;
  }
}

export const DashboardListContainer = Container.create(DashboardList);