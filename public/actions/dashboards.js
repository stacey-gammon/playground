import fetch from 'isomorphic-fetch';
export const DASHBOARDS_REQUEST = 'DASHBOARDS_REQUEST';
export const DASHBOARDS_RESPONSE = 'DASHBOARDS_RESPONSE';
export const DASHBOARDS_ERROR = 'DASHBOARDS_ERROR';
import handleResponse from '../lib/handle_response';
import { dispatch } from '../dispatcher/dispatcher';
import { appStore } from '../stores/app_store';
import { DashboardActionTypes } from '../actions/action_types';

export function dashboardsRequest() {
  return { type: DASHBOARDS_REQUEST };
}

export function dashboardsResponse(json) {
  return { type: DashboardActionTypes.DASHBOARDS_RESPONSE, json };
}

export function dashboardsError(error) {
  return { type: DASHBOARDS_ERROR, error };
}

export function fetchDashboards() {
  const params = {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'kbn-version': appStore.getState().kbnVersion
    }
  };
  dispatch(dashboardsRequest());
  return fetch(`../api/react-examples/dashboards`, params)
    .then(handleResponse)
    .then(json => dispatch(dashboardsResponse(json)))
    .catch(e => dispatch(dashboardsError(e)));
}
