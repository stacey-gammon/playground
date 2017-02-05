import fetch from 'isomorphic-fetch';
export const DASHBOARDS_REQUEST = 'DASHBOARDS_REQUEST';
export const DASHBOARDS_RESPONSE = 'DASHBOARDS_RESPONSE';
export const DASHBOARDS_ERROR = 'DASHBOARDS_ERROR';
import handleResponse from '../lib/handle_response';
import { dispatch } from '../dispatcher/dispatcher';
import { appStore } from '../stores/AppStore';
import { DashboardActionTypes } from '../actions/ActionTypes';

export class DashboardActions {
  static dashboardsRequest() {
    return { type: DASHBOARDS_REQUEST };
  }

  static dashboardsResponse(json) {
    return { type: DashboardActionTypes.DASHBOARDS_RESPONSE, json };
  }

  static dashboardsError(error) {
    return { type: DASHBOARDS_ERROR, error };
  }

  static fetchDashboards() {
    const params = {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'kbn-version': appStore.getState().kbnVersion
      }
    };
    dispatch(this.dashboardsRequest());
    return fetch(`../api/react-examples/dashboards`, params)
        .then(handleResponse)
        .then(json => dispatch(this.dashboardsResponse(json)));
  }
}