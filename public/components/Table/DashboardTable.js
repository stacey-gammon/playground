import React from 'react';

import { LandingPageTable } from '../../UiFramework/Table/LandingPageTable';
import { DashboardColumns } from './DashboardColumns';

export class DashboardTable extends React.Component {
  render() {
    return <LandingPageTable
        items={this.props.dashboards}
        columns={ DashboardColumns }>
    </LandingPageTable>;
  }
}

DashboardTable.propTypes = {
  dashboards: React.PropTypes.array
};