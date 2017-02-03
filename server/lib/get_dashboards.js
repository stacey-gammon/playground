import { AppStrings } from '../../app_strings';

import _ from 'lodash';
export default (req) => {
  const { server } = req;
  server.log('request: ');
  server.log(req);
  const { callWithRequest } = server.plugins.elasticsearch.getCluster('admin');
  const config = server.config();

  const params = {
    index: config.get(AppStrings.indexName()),
    type: 'dashboard',
    body: {
      sort: [
        //{ '@timestamp': { order: 'desc' } }
      ]
    }
  };

  return callWithRequest(req, 'search', params)
    .then(resp => {
      return _.get(resp, 'hits.hits', []).map((hit) => {
        const source = hit._source;
        source.id = hit._id;
        return source;
      });
    });

};
