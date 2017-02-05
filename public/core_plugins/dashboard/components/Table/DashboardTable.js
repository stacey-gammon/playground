import React from 'react';

import { SavedObjectTable } from '../../../../UiFramework/Table/SavedObjectTable';
import { DashboardActions } from '../../actions/DashboardActions';
import { DashboardColumns } from './DashboardColumns';

export class DashboardTable extends React.Component {
  render() {
    return <SavedObjectTable
        savedObjects={this.props.dashboards}
        columns={ DashboardColumns }>
    </SavedObjectTable>;
  }
}

DashboardTable.propTypes = {
  dashboards: React.PropTypes.array
};