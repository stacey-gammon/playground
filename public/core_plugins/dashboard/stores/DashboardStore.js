import { ReduceStore } from 'flux/utils';
import { dispatcher } from '../../../Dispatcher';
import { DashboardActionTypes } from '../actions/DashboardActionTypes';
import { DashboardState } from '../state/DashboardState';

class DashboardStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return new DashboardState();
  }

  reduce(dashboardState, action) {
    console.log('DashboardStore.reduce');
    console.log(action);
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