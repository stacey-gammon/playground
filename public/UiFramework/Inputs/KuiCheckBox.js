import React from 'react';

export class KuiCheckBox extends React.Component {
  render() {
    return <input
        type="checkbox"
        className="kuiCheckBox"
        onClick={ this.props.onClick }
        checked={ this.props.isChecked }
    />;
  }
}

KuiCheckBox.PropTypes = {
  onClick: React.PropTypes.func,
  isChecked: React.PropTypes.bool
};