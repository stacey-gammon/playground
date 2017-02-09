import React from 'react';

import { TableCellLink } from '../../UiFramework/Table/TableCellLink';
import { KuiTableCellLiner } from '../../UiFramework/Table/KuiTableCellLiner';

function TableCellIcon({ title, icon }) {
  const iconClassNames = `kuiStatusText__icon kuiIcon ${icon}`;
  return <KuiTableCellLiner>
      <span className="kuiStatusText">
        <span className={ iconClassNames }/>
        { title }
      </span>
    </KuiTableCellLiner>;
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
    getRow: (item) => <TableCellLink title={ item.title } />
  },
  {
    id: 'type',
    sortBy: 'type',
    title: 'Type',
    getRow: (item) => <TableCellIcon title={ item.type.title } icon={ item.icon }/>
  },
  {
    id: 'Id',
    sortBy: 'id',
    title: 'Id',
    getRow: (item) => <div>{ item.id }</div>
  }
];