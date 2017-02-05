import React from 'react';

export class KuiTableRow extends React.Component {
  render() {
    return (
        <tr className="kuiTableRow">
          { this.props.children }
        </tr>
    );
  }
}