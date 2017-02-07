import React from 'react';
import _ from 'lodash';

import './ColumnDefinition';
import { KuiTableRow } from './KuiTableRow';
import { CheckBoxTableColumn } from './CheckBoxTableColumn';

export class SelectableTableRow extends React.Component {
  renderColumn(columnDefinition) {
    const { savedObject } = this.props;
    const className = `kuiTableRowCell ${columnDefinition.className || ''}`;
    return <td key={columnDefinition.id} className={className}>
        { columnDefinition.getRow(savedObject) }
      </td>;
  }

  render() {
    console.log('SavedObjectTableRow');
    const columns = _.map(this.props.columnDefinitions, (column) => this.renderColumn(column));
    return (
        <KuiTableRow>
          <CheckBoxTableColumn isChecked={ this.props.isSelected } onClick={ this.props.onToggleItem } />
          { columns }
        </KuiTableRow>
    );
  }
}

SelectableTableRow.PropTypes = {
  savedObject: React.PropTypes.any,
  /**
   * @type {Array.<ColumnDefinition>}
   */
  columnDefinitions: React.PropTypes.array,
  onToggleItem: React.PropTypes.func,
  isSelected: React.PropTypes.bool
};