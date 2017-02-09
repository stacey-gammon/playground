import React from 'react';

export function TableCellLink({ title }) {
  return <div className="kuiTableRowCell__liner">
    <a className="kuiLink">
      { title }
    </a>
  </div>;
}