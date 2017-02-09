import modules from 'ui/modules';

import { changeLocation } from './change_location';
import { AppActions } from '../Actions/AppActions';
import { appStore } from '../Stores/AppStore';

const app = modules.get('apps/rhythm');
app.service('$appStoreHooks', ($location, $rootScope, kbnVersion, basePath) => {
  appStore.changeLocation = (appState, action) => changeLocation(appState, action, $location, $rootScope);

  AppActions.setKbnVersion(kbnVersion);
  AppActions.setBasePath(basePath);
});
