import React from 'react';

export class KuiTable extends React.Component {
  render() {
    return (
    <table className="kuiTable">
      { this.props.children }
    </table>
    );
  }
}