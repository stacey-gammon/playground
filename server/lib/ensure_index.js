import settings from './settings.json';
import { AppStrings } from '../../app_strings';

export function ensureIndex(server) {
  return () => {
    const { client } = server.plugins.elasticsearch;
    if (!client) {
      return null;
    }
    const config = server.config();
    return client.indices.create({
      index: config.get(AppStrings.indexName()),
      body: settings,
      ignore: [400]
    });
  };
}
