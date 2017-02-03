import * as React from 'react';
import { Container } from 'flux/utils';

import { DashboardListView } from '../views/dashboard_list';
import { dashboardStore } from '../stores/dashboard_store';

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
    return <DashboardListView dashboardState={this.state.dashboardState} />;
  }
}

export const DashboardListContainer = Container.create(DashboardList);