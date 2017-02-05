import React from 'react';
import { Spinner } from '../../../UiFramework/Spinner';

export class AppView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page">
        { this.props.showSpinner ? <Spinner/> : null }
        { this.props.children }
      </div>
    );
  }
}

AppView.propTypes = {
  showSpinner: React.PropTypes.bool
};