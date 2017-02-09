import { AppStrings } from './AppStrings';
import { savedObjectsApi } from './server/routes/api/saved_objects_api';
import { ensureIndex } from './server/lib/ensure_index';
import Promise from 'bluebird';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      app: {
        title: AppStrings.appName(),
        description: 'A Kibana React Example',
        main: `plugins/${AppStrings.normalizedAppName()}/app`,
        injectVars: function (server) {
          const config = server.config();

          //DEPRECATED SETTINGS
          //if the url is set, the old settings must be used.
          //keeping this logic for backward compatibilty.
          const configuredUrl = server.config().get('tilemap.url');
          const isOverridden = typeof configuredUrl === 'string' && configuredUrl !== '';
          const tilemapConfig = config.get('tilemap');

          return {
            kbnIndex: config.get('kibana.index'),
            esShardTimeout: config.get('elasticsearch.shardTimeout'),
            esApiVersion: config.get('elasticsearch.apiVersion'),
            basePath: config.get('server.basePath'),
            tilemapsConfig: {
              deprecated: {
                isOverridden: isOverridden,
                config: tilemapConfig,
              },
              manifestServiceUrl: config.get('tilemap.manifestServiceUrl')
            },
          };
        }
      }
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
        index: Joi.string().default(`.${AppStrings.lowercaseAppName()}`),
        chartResolution: Joi.number().default(150),
        minimumBucketSize: Joi.number().default(10)
      }).default();
    },

    init(server) {
      server.log(['info'], 'initializing server');
      const { status } = server.plugins.elasticsearch;

      savedObjectsApi(server);

      if (status) {
        status.on('green', () => {
          Promise.try(ensureIndex(server))
              .then(() => { });
        });
      }

    }

  });
}
