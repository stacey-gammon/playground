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
    title: 'title',
    getRow: getTitleRow
  },
  {
    id: 'Id',
    sortBy: 'id',
    title: 'id',
    getRow: (dashboard) => <div>{ dashboard.id } </div>
  }
];