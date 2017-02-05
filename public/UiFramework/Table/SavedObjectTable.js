import React from 'react';
import _ from 'lodash';

import './ColumnDefinition';
import { TableHeaderColumn } from './TableHeaderColumn';
import { SavedObjectTableRow } from './SavedObjectTableRow';
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

  renderRow(savedObject) {
    return <SavedObjectTableRow
        key={savedObject.id}
        isSelected={ this.isItemChecked(savedObject) }
        onToggleItem={ () => this.toggleItem(savedObject) }
        savedObject={ savedObject }
        columnDefinitions={ this.props.columns }
    />;
  }

  renderRows() {
    const { sortOrder, sortedColumnId } = this.state;
    const { savedObjects, columns } = this.props;

    const columnToSort =
        _.find(columns, (column) => column.id === sortedColumnId) ||
        columns[0];

    const sortedObjects = sortOrder === SortOrder.ASC
        ? _.sortBy(savedObjects, columnToSort.sortBy)
        : _.sortBy(savedObjects, columnToSort.sortBy).reverse();

    return sortedObjects.map((row) => this.renderRow(row));
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
    return this.getSelectedItemsCount() === this.props.savedObjects.length;
  }

  toggleAll() {
    if (this.areAllItemsChecked()) {
      this.setState({ selectedItems: [] });
    } else {
      this.setState({ selectedItems: this.state.items.slice(0) });
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
  savedObjects: React.PropTypes.array,
  /**
   * A mapping of id to column elements for the header.
   * @param columns {Array.<ColumnDefinition>}
   */
  columns: React.PropTypes.any
};