import React from 'react';
import { SortOrder } from '../../common/SortOrder';

export class TableHeaderColumn extends React.Component {
  getSortIcon() {
    const { isSortable, sortOrder } = this.props;
    const className = sortOrder === SortOrder.ASC ? 'fa fa-caret-up' : 'fa fa-caret-down';
    return isSortable ? <span className={className}/> : null;
  }

  onHeaderClicked() {
    const { isSortable, onSort } = this.props;
    if (isSortable) {
      onSort();
    }
  }

  render() {
    const { className, isSortable } = this.props;
    let classNames = `kuiTableHeaderCell ${className || ''}`;
    if (isSortable) {
      classNames += ' kuiTableHeaderCell__sortable';
    }
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
  onSort: React.PropTypes.func,
  className: React.PropTypes.string
};