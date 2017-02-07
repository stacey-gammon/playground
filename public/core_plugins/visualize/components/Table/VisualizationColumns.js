import React from 'react';
import '../../../../UiFramework/Table/ColumnDefinition';

function getTitleRow(item) {
  return <div className="kuiTableRowCell__liner">
      <a className="kuiLink">
        { item.title }
      </a>
    </div>;
}

/**
 *
 * @type {Array.<ColumnDefinition>}
 */
export const VisualizationColumns = [
  {
    id: 'title',
    sortBy: 'title',
    title: 'Title',
    getRow: getTitleRow
  },
  {
    id: 'Id',
    sortBy: 'id',
    title: 'Id',
    getRow: (item) => <div>{ item.id }</div>
  }
];