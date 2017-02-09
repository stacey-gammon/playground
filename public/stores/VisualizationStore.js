import { ReduceStore } from 'flux/utils';
import { dispatcher } from '../Dispatcher';
import { VisualizationActionTypes } from '../actions/VisualizationActionTypes';
import { VisualizationState } from '../state/VisualizationState';
import { getVisualizationType } from '../lib/getVisualizationType';

class VisualizationStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return new VisualizationState();
  }

  getVisTypes() {
    throw 'I should be overridden by an angular store service!';
  }

  reduce(visualizationState, action) {
    console.log('VisualizationStore.reduce');
    console.log(action);
    console.log(visualizationState);

    switch (action.type) {
      case VisualizationActionTypes.VISUALIZATIONS_RESPONSE:
        action.json.forEach((visualization) => {
          visualization.type = getVisualizationType(visualization, this.getVisTypes());
        });
        return Object.assign({}, visualizationState, { visualizations: action.json });

      default:
        return visualizationState;
    }
  }
}

export const visualizationStore = new VisualizationStore();