import React from 'react';
import _ from 'lodash';

import './ColumnDefinition';
import { TableHeaderColumn } from './TableHeaderColumn';
import { SelectableTableRow } from './SelectableTableRow';
import { SortOrder } from '../../common/SortOrder';
import { KuiTable } from './KuiTable';
import { CheckBoxTableHeader } from './CheckBoxTableHeader';

export class SavedObjectTable extends React.Component {
  constructor() {
    super();

    this.state = {
      sortOrder: SortOrder.DEFAULT,
      sortedColumnId: undefined,
      selectedItems: []
    };
  }

  toggleItem(item) {
    const newSelectedItems = _.clone(this.state.selectedItems);
    if (this.isItemChecked(item)) {
      const index = newSelectedItems.indexOf(item);
      newSelectedItems.splice(index, 1);
    } else {
      newSelectedItems.push(item);
    }
    this.setState({ selectedItems: newSelectedItems });
  }

  isItemChecked(item) {
    return this.state.selectedItems.indexOf(item) !== -1;
  }

  /**
   *
   * @param item {SavedObject}
   * @returns {XML}
   */
  renderRow(item) {
    return <SelectableTableRow
        key={item.id}
        isSelected={ this.isItemChecked(item) }
        onToggleItem={ () => this.toggleItem(item) }
        savedObject={ item }
        columnDefinitions={ this.props.columns }
    />;
  }

  renderRows() {
    const { sortOrder, sortedColumnId } = this.state;
    const { items, columns } = this.props;

    const columnToSort =
        _.find(columns, (column) => column.id === sortedColumnId) ||
        columns[0];

    const sortedItems = sortOrder === SortOrder.ASC
        ? _.sortBy(items, columnToSort.sortBy)
        : _.sortBy(items, columnToSort.sortBy).reverse();

    return sortedItems.map((row) => this.renderRow(row));
  }

  getFlippedSortOrder() {
    return this.state.sortOrder === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC;
  }

  sortColumn(columnId) {
    const { sortedColumnId } = this.state;
    const sortOrder = columnId === sortedColumnId
        ? this.getFlippedSortOrder()
        : SortOrder.DEFAULT;

    this.setState({ sortOrder, sortedColumnId: columnId });
  }

  renderColumns() {
    return _.map(this.props.columns, (column) => {
      const sortOrder = column.id === this.state.sortedColumnId ? this.state.sortOrder : undefined;
      return <TableHeaderColumn
          key={column.id}
          isSortable={true}
          onSort={() => this.sortColumn(column.id)}
          sortOrder={sortOrder}>
        { column.title }
      </TableHeaderColumn>;
    });
  }

  getSelectedItemsCount() {
    return this.state.selectedItems.length;
  }

  areAllItemsChecked() {
    return this.getSelectedItemsCount() === this.props.items.length;
  }

  toggleAll() {
    if (this.areAllItemsChecked()) {
      this.setState({ selectedItems: [] });
    } else {
      this.setState({ selectedItems: this.props.items.slice(0) });
    }
  }

  render() {
    return (
        <KuiTable>
          <thead>
          <tr>
            <CheckBoxTableHeader isChecked={ this.areAllItemsChecked() } onClick={() => this.toggleAll() }/>
            { this.renderColumns() }
          </tr>
          </thead>

          <tbody>
          { this.renderRows() }
          </tbody>
        </KuiTable>
    );
  }
}

SavedObjectTable.PropTypes = {
  items: React.PropTypes.array,
  /**
   * A mapping of id to column elements for the header.
   * @param columns {Array.<ColumnDefinition>}
   */
  columns: React.PropTypes.any
};