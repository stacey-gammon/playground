import React from 'react';

import { LandingPageTable } from '../../UiFramework/Table/LandingPageTable';
import { VisualizationColumns } from './VisualizationColumns';

export class VisualizationTable extends React.Component {
  render() {
    return <LandingPageTable
        items={ this.props.visualizations }
        columns={ VisualizationColumns }>
    </LandingPageTable>;
  }
}

VisualizationTable.propTypes = {
  visualizations: React.PropTypes.array
};