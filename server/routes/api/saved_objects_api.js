import { getItemsOfType } from '../../lib/get_items_of_type';
import { allSavedObjectTypes } from '../../../common/SavedObjectTypes';
import { AppConsts } from '../../../common/AppConsts';

function createAllApi(server, type) {
  server.route({
    method: 'GET',
    path: `${AppConsts.BASE_API}/${type}`,
    handler: (req, reply) => {
      return getItemsOfType(req, type).then(reply).catch(reply);
    }
  });
}

export function savedObjectsApi(server) {
  allSavedObjectTypes().forEach((type) => {
    createAllApi(server, type);
  });
}
