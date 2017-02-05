import { AppStrings } from './AppStrings';
import apiDashboardsRoutes from './server/routes/api/dashboards';
import { ensureIndex } from './server/lib/ensure_index';
import Promise from 'bluebird';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      app: {
        title: AppStrings.appName(),
        description: 'A Metrics UI',
        main: `plugins/${AppStrings.normalizedAppName()}/app`,
        injectVars: function (server) {
          const config = server.config();
          return {
            kbnIndex: config.get('kibana.index'),
            esShardTimeout: config.get('elasticsearch.shardTimeout'),
            esApiVersion: config.get('elasticsearch.apiVersion'),
            basePath: config.get('server.basePath')
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

      apiDashboardsRoutes(server);

      if (status) {
        status.on('green', () => {
          Promise.try(ensureIndex(server))
              .then(() => { });
        });
      }

    }

  });
}
