import React from 'react';

import { KuiCheckBox } from '../Inputs/KuiCheckBox';

export class CheckBoxTableColumn extends React.Component {
  render() {
    return <td className="kuiTableRowCell kuiTableRowCell--checkBox">
      <KuiCheckBox onClick={ this.props.onClick } isChecked={ this.props.isChecked } />
    </td>;
  }
}

CheckBoxTableColumn.PropTypes = {
  onClick: React.PropTypes.func,
  isChecked: React.PropTypes.bool
};