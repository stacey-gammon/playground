import * as React from 'react';
import { Container } from 'flux/utils';

import { VisualizationListView } from '../views/VisualizationListView';
import { visualizationStore } from '../stores/VisualizationStore';

class VisualizationList extends React.Component {
  static getStores() {
    return [visualizationStore];
  }

  static calculateState() {
    return {
      visualizations: visualizationStore.getState().visualizations,
    };
  }

  render() {
    return <VisualizationListView visualizations={this.state.visualizations}/>;
  }
}

export const VisualizationListContainer = Container.create(VisualizationList);