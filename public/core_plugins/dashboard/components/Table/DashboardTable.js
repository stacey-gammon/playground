import React from 'react';

import { SavedObjectTable } from '../../../../UiFramework/Table/SavedObjectTable';
import { DashboardColumns } from './DashboardColumns';

export class DashboardTable extends React.Component {
  render() {
    return <SavedObjectTable
        items={this.props.dashboards}
        columns={ DashboardColumns }>
    </SavedObjectTable>;
  }
}

DashboardTable.propTypes = {
  dashboards: React.PropTypes.array
};