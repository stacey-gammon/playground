import React from 'react';
import { TableCellLink } from '../../UiFramework/Table/TableCellLink';

/**
 *
 * @type {Array.<ColumnDefinition>}
 */
export const DashboardColumns = [
  {
    id: 'title',
    sortBy: 'title',
    title: 'Title',
    getRow: (item) => <TableCellLink title={ item.title } />
  },
  {
    id: 'Id',
    sortBy: 'id',
    title: 'Id',
    getRow: (dashboard) => <div>{ dashboard.id }</div>
  }
];