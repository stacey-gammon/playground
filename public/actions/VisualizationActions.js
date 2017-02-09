import fetch from 'isomorphic-fetch';

import { dispatch } from '../Dispatcher';
import { appStore } from '../Stores/AppStore';
import { VisualizationActionTypes } from './VisualizationActionTypes';
import { SavedObjectApi } from '../common/SavedObjectApi';
import { SavedObjectTypes } from '../../common/SavedObjectTypes';
import { handleApiResponse } from '../common/handleApiResponse';

export class VisualizationActions {
  static visualizationResponse(json) {
    dispatch({ type: VisualizationActionTypes.VISUALIZATIONS_RESPONSE, json });
  }

  static setVisualizationTypes(types) {
    dispatch({ type: VisualizationActionTypes.SET_VISUALIZATION_TYPES, types });
  }

  static fetchVisualizations() {
    const params = SavedObjectApi.getGetHeader(appStore.getState().kbnVersion);
    return fetch(SavedObjectApi.getPathForType(SavedObjectTypes.VISUALIZATION), params)
        .then(handleApiResponse)
        .then(json => this.visualizationResponse(json));
  }
}