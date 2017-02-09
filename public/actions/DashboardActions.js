import fetch from 'isomorphic-fetch';

import { dispatch } from '../Dispatcher';
import { appStore } from '../Stores/AppStore';
import { DashboardActionTypes } from './DashboardActionTypes';
import { SavedObjectApi } from '../common/SavedObjectApi';
import { SavedObjectTypes } from '../../common/SavedObjectTypes';
import { handleApiResponse } from '../common/handleApiResponse';

export class DashboardActions {
  static dashboardsResponse(json) {
    dispatch({ type: DashboardActionTypes.DASHBOARDS_RESPONSE, json });
  }

  static fetchDashboards() {
    const params = SavedObjectApi.getGetHeader(appStore.getState().kbnVersion);
    return fetch(SavedObjectApi.getPathForType(SavedObjectTypes.DASHBOARD), params)
        .then(handleApiResponse)
        .then(json => this.dashboardsResponse(json));
  }
}