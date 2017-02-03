import getDashboards from '../../lib/get_dashboards';

export default (server) => {
  server.route({
    method: 'GET',
    path: '/api/react-examples/dashboards',
    handler: (req, reply) => {
      server.log('getting dashboards');
      const dash = getDashboards(req).then(reply).catch(reply);
      server.log('got dashboards' + dash);
      return dash;
    }
  });
};
