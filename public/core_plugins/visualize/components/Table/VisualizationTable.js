import React from 'react';

import { SavedObjectTable } from '../../../../UiFramework/Table/SavedObjectTable';
import { VisualizationColumns } from './VisualizationColumns';

export class VisualizationTable extends React.Component {
  render() {
    return <SavedObjectTable
        items={this.props.visualizations}
        columns={ VisualizationColumns }>
    </SavedObjectTable>;
  }
}

VisualizationTable.propTypes = {
  visualizations: React.PropTypes.array
};