import 'ui/autoload/all';
import chrome from 'ui/chrome';

import './angular/history';
import './angular/store';
import './angular/global_state';
import './less/main.less';

import _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';
import { AppStrings } from '../app_strings';
import Routes from './routes';

chrome
    .setRootTemplate('<div id="root"></div>')
    .setRootController((docTitle, $store, $history, $scope) => {
      docTitle.change(AppStrings.appName());

      // Mount the React app
      const el = document.getElementById('root');
      render(<Routes store={ $store } history={ $history }/>, el);

      // Initalized the loading spinner thingy
      $scope.loading = false;
      // // Subscribe to changes to the $store. If the server or servers objects
      // // are fetching then we need to set the loading indicator to display.
      // $store.subscribe(() => {
      //   const state = $store.getState();
      //   const loading =
      //       _.get(state, 'dashboard.request.isFetching', false) ||
      //       _.get(state, 'fields.request.isFetching', false) ||
      //       _.get(state, 'visData.request.isFetching', false);
      //
      //   $scope.$evalAsync(() => {
      //     // Change loading to the current value
      //     $scope.loading = loading;
      //   });
      // });
    });
