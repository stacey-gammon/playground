import modules from 'ui/modules';

import { changeLocation } from './change_location';
import { AppActions } from '../AppActions';
import { appStore } from '../AppStore';

const app = modules.get('apps/rhythm');
app.service('$store', ($location, $rootScope, kbnVersion, basePath) => {
  appStore.changeLocation = (appState, action) => changeLocation(appState, action, $location, $rootScope);

  AppActions.setKbnVersion(kbnVersion);
  AppActions.setBasePath(basePath);
});
