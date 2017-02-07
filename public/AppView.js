import React from 'react';
import { Spinner } from './UiFramework/Spinner';
import { ContentTabs } from './UiFramework/Tabs/ContentTabs';
import { SavedObjectTypes } from '../common/SavedObjectTypes';
import { AppActions } from './AppActions';

export class AppView extends React.Component {
  constructor() {
    super();

    // TODO: This doesn't work correctly on a page refresh. Would have to determine default
    // selected tab based off URL since this does routing.
    this.state = {
      selectedTab: SavedObjectTypes.DASHBOARD
    };
  }

  onTabClick(title) {
    AppActions.changeLocation(`${title}`);
    this.setState({ selectedTab: title });
  }

  render() {
    return (
      <div className="page">
        { this.props.showSpinner ? <Spinner/> : null }
        <ContentTabs
            titles={ [SavedObjectTypes.DASHBOARD, SavedObjectTypes.VISUALIZATION] }
            selectedTitle={ this.state.selectedTab }
            onSelect={ (title) => this.onTabClick(title) }
        />
        { this.props.children }
      </div>
    );
  }
}

AppView.propTypes = {
  showSpinner: React.PropTypes.bool
};