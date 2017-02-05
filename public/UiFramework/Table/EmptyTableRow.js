import React from 'react';

export class EmptyTableRow extends React.Component {

  render() {
    return (
        <tr key="emptyTableRow" className="dashboards_row">
          <td>
            No { this.props.itemName }
          </td>
        </tr>
    );
  }
}

EmptyTableRow.PropTypes = {
  itemName: React.PropTypes.string
};