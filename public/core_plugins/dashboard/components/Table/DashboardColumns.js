import React from 'react';
import '../../../../UiFramework/Table/ColumnDefinition';

function getTitleRow(dashboard) {
  return <div className="kuiTableRowCell__liner">
      <a className="kuiLink">
        { dashboard.title }
      </a>
    </div>;
}

/**
 *
 * @type {Array.<ColumnDefinition>}
 */
export const DashboardColumns = [
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
    getRow: (dashboard) => <div>{ dashboard.id }</div>
  }
];