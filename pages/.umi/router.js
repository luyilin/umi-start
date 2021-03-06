import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../index.js').default
  },
  {
    "path": "/test",
    "exact": true,
    "component": require('../test/index.js').default
  },
  {
    "path": "/test/models",
    "exact": true,
    "component": require('../test/models/index.js').default
  },
  {
    "path": "/users",
    "exact": true,
    "component": require('../users/index.js').default
  },
  {
    "path": "/users/models",
    "exact": true,
    "component": require('../users/models/index.js').default
  },
  {
    "component": () => React.createElement(require('/usr/local/lib/node_modules/umi/node_modules/_umi-build-dev@1.3.5@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', hasRoutesInConfig: false })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
