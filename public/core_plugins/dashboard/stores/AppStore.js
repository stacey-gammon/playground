import { ReduceStore } from 'flux/utils';
import { dispatcher } from '../dispatcher/dispatcher';
import { AppActionTypes } from '../actions/ActionTypes';
import { AppState } from '../state/AppState';

class AppStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return new AppState();
  }

  reduce(appState, action) {
    switch (action.type) {
      case AppActionTypes.SET_KBN_VERSION:
        return Object.assign(appState, { kbnVersion: action.kbnVersion });

      case AppActionTypes.SET_BASE_PATH:
        return Object.assign(appState, { basePath: action.basePath });

      default:
        return appState;
    }
  }
}

export const appStore = new AppStore();