import React from 'react';
import { DashboardTable } from '../components/dashboard/dashboard_table';

export class DashboardListView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="dashboard_list">

        <div className="dashboard_list__body">
          <DashboardTable dashboards={this.props.dashboardState.dashboards}/>
        </div>
      </div>
    );
  }
}

DashboardListView.propTypes = {
  dashboardState: React.PropTypes.any
};