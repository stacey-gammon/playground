import React from 'react';

import { ContentTab } from './ContentTab';

export class ContentTabs extends React.Component {
  renderTab(title) {
    return <ContentTab
        key={ title }
        title={ title }
        onClick={() => this.props.onSelect(title) }
        isSelected={ this.props.selectedTitle === title }
        />;
  }

  render() {
    const contentTabs = this.props.titles.map((title) => this.renderTab(title));
    return <div className="kuiViewContentItem kuiVerticalRhythm">
        <div className="kuiTabs">
          { contentTabs }
        </div>
      </div>;
  }
}

ContentTabs.PropTypes = {
  titles: React.PropTypes.arrayOf(React.PropTypes.string),
  onSelect: React.PropTypes.func,
  selectedTitle: React.PropTypes.string
};