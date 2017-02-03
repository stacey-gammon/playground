import React from 'react';

import { DashboardTableRow } from './dashboard_table_row';
import { EmptyTableRow } from '../../ui_framework/empty_table_row';

export class DashboardTable extends React.Component {
  constructor() {
    super();
  }

  renderRow(dashboard) {
    return <DashboardTableRow key={dashboard.id} dashboard={dashboard}/>;
  }

  getEmptyRow() {
    return <EmptyTableRow key="emptyTableRow" itemName="dashboards"/>;
  }

  getRows() {
    const { dashboards } = this.props;
    return dashboards.length ? dashboards.map(this.renderRow) : this.getEmptyRow();
  }

  render() {
    const rows = this.getRows();
    return (
        <table className="table dashboard_list__table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Modified On</th>
            <th>Owner</th>
            <th>
              <a className="btn btn-default btn-xs">
                <i className="fa fa-plus"></i>
                Add New Dashboard
              </a>
            </th>
          </tr>
          </thead>
          <tbody>
          { rows }
          </tbody>
        </table>
    );
  }
}

DashboardTable.propTypes = {
  dashboards: React.PropTypes.array
};

