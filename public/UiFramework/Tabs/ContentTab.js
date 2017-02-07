import React from 'react';

export class ContentTab extends React.Component {
  render() {
    const { title, isSelected, onClick } = this.props;
    let className = 'kuiTab kbn-management-tab';
    if (isSelected) {
      className += ' kuiTab-isSelected';
    }
    return (
        <button
            className={ className }
            title={ title }
            onClick={ onClick }
        >
          { title }
        </button>
    );
  }
}

ContentTab.PropTypes = {
  title: React.PropTypes.string,
  isSelected: React.PropTypes.bool,
  onClick: React.PropTypes.func
};