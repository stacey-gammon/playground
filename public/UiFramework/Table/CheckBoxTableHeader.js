import React from 'react';

import { KuiCheckBox } from '../Inputs/KuiCheckBox';

export class CheckBoxTableHeader extends React.Component {
  render() {
    return <th key="checkbox" className="kuiTableHeaderCell kuiTableHeaderCell--checkBox">
      <KuiCheckBox onClick={ this.props.onClick } isChecked={ this.props.isChecked } />
    </th>;
  }
}

CheckBoxTableHeader.PropTypes = {
  onClick: React.PropTypes.func,
  isChecked: React.PropTypes.bool
};