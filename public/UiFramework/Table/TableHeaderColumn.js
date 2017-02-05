import React from 'react';
import { SortOrder } from '../../common/SortOrder';

export class TableHeaderColumn extends React.Component {
  getSortIcon() {
    const { isSortable, sortOrder } = this.props;
    const className = sortOrder === SortOrder.ASC ? 'fa fa-caret-up' : 'fa fa-caret-down';
    return isSortable ? <span className={className}/> : null;
  }

  onHeaderClicked() {
    const { isSortable, onToggleSort } = this.props;
    if (isSortable) {
      onToggleSort();
    }
  }

  render() {
    const { className } = this.props;
    const classNames = `kuiTableHeaderCell ${className || ''}`;
    return (
        <th className={classNames} onClick={() => this.onHeaderClicked()}>
          { this.props.children }
          { this.getSortIcon() }
        </th>
    );
  }
}

TableHeaderColumn.PropTypes = {
  isSortable: React.PropTypes.bool,
  sortOrder: React.PropTypes.string,
  onToggleSort: React.PropTypes.func,
  className: React.PropTypes.string
};