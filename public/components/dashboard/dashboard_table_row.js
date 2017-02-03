import React from 'react';

export class DashboardTableRow extends React.Component {
  render() {
    const { dashboard } = this.props;
    const editLink = { pathname: `/dashboards/edit/${dashboard.id}` };
    const viewLink = { pathname: `/dashboards/view/${dashboard.id}` };
    const owner = 'Public';
    const title = dashboard.title;
    console.log('returning dashboard table row');
    return (
        <tr>
          <td className="dashboard_list__name">
            {title}
          </td>
          <td className="dashboard_list__owner">{ owner }</td>
          <td className="dashboard_list__controls">
          </td>
        </tr>
    );
  }
}

DashboardTableRow.PropTypes = {
  dashboard: React.PropTypes.any
};