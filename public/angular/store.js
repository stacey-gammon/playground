import modules from 'ui/modules';
import { AppActions } from '../actions/app';

const app = modules.get('apps/rhythm');
app.service('$store', ($history, $rootScope, timefilter, kbnVersion, basePath) => {
  AppActions.setKbnVersion(kbnVersion);
  AppActions.setBasePath(basePath);
});
