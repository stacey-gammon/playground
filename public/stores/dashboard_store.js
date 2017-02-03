import { ReduceStore } from 'flux/utils';
import { dispatcher } from '../dispatcher/dispatcher';
import { DashboardActionTypes } from '../actions/action_types';
import { DashboardState } from '../state/dashboard_state';
import Immutable from 'immutable';

class DashboardStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    console.log('getting initial dashboard state');
    return { dashboards: [] };
  }

  reduce(dashboardState, action) {
    console.log('reducing dash state is');
    console.log(dashboardState);
    switch (action.type) {
      case DashboardActionTypes.DASHBOARDS_RESPONSE:
        return Object.assign({}, dashboardState, { dashboards: action.json });

      default:
        return dashboardState;
    }
  }
}

export const dashboardStore = new DashboardStore();