import { ReduceStore } from 'flux/utils';
import { dispatcher } from '../Dispatcher';
import { AppActionTypes } from '../Actions/AppActionTypes';
import { AppState } from '../State/AppState';

class AppStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return new AppState();
  }

  changeLocation(appState, action) {
    throw 'I should be overridden by an angular store service!';
  }

  reduce(appState, action) {
    console.log('AppStore.reduce');
    console.log(action);
    console.log(appState);
    if (!action) {
      return;
    }
    switch (action.type) {
      case AppActionTypes.SET_KBN_VERSION:
        return Object.assign(appState, { kbnVersion: action.kbnVersion });

      case AppActionTypes.SET_BASE_PATH:
        return Object.assign(appState, { basePath: action.basePath });

      case AppActionTypes.CHANGE_LOCATION:
        return this.changeLocation(appState, action);

      default:
        return appState;
    }
  }
}

export const appStore = new AppStore();