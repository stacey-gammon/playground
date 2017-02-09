import React from 'react';

export class KuiTableCellLiner extends React.Component {
  render() {
    return (
        <div className="kuiTableRowCell__liner">
          { this.props.children }
        </div>
    );
  }
}