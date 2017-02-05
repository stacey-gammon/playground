import modules from 'ui/modules';
import { AppActions } from '../core_plugins/dashboard/actions/AppActions';

const app = modules.get('apps/rhythm');
app.service('$store', ($history, $rootScope, timefilter, kbnVersion, basePath) => {
  AppActions.setKbnVersion(kbnVersion);
  AppActions.setBasePath(basePath);
});
