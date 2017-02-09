import React from 'react';
import { DashboardTable } from '../Components/Table/DashboardTable';
import { PromptForItems } from '../UiFramework/Table/PromptForItems';
import { DashboardActions } from '../actions/DashboardActions';

export class DashboardListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    DashboardActions.fetchDashboards();
  }

  render() {
    const { dashboards } = this.props;
    return (
        <div className="dashboard_list">

          <div className="dashboard_list__body">
            {
              dashboards.length > 0
                  ? <DashboardTable dashboards={dashboards}/>
                  : <PromptForItems title="dashboards" onAdd={() => {}}/>
            }
          </div>
        </div>
    );
  }
}

DashboardListView.propTypes = {
  dashboards: React.PropTypes.array
};