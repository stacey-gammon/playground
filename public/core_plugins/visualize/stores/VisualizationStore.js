import { ReduceStore } from 'flux/utils';
import { dispatcher } from '../../../Dispatcher';
import { VisualizationActionTypes } from '../actions/VisualizationActionTypes';
import { VisualizationState } from '../state/VisualizationState';

class VisualizationStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return { visualizations: [] };
  }

  reduce(visualizationState, action) {
    console.log('VisualizationStore.reduce');
    console.log(action);
    console.log(visualizationState);
    switch (action.type) {
      case VisualizationActionTypes.VISUALIZATIONS_RESPONSE:
        return Object.assign({}, visualizationState, { visualizations: action.json });

      default:
        return visualizationState;
    }
  }
}

export const visualizationStore = new VisualizationStore();