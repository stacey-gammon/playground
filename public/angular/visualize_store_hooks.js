import modules from 'ui/modules';

// Need this to have all the visualizations types register themselves.
import 'plugins/kbn_vislib_vis_types/kbn_vislib_vis_types';

import RegistryVisTypesProvider from 'ui/registry/vis_types';
import { visualizationStore } from '../stores/VisualizationStore';

const app = modules.get('apps/rhythm');
app.service('$visualizeStoreHooks', (Private) => {
  visualizationStore.getVisTypes = () => {
    return Private(RegistryVisTypesProvider);
  };
});
