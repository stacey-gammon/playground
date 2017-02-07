import React from 'react';

import 'ui/autoload/all';
import chrome from 'ui/chrome';

import './angular/history';
import './angular/store';
import './angular/global_state';
import './core_plugins/dashboard/less/main.less';
import './less/main.less';

import { render } from 'react-dom';
import { AppStrings } from '../AppStrings';
import { Routes } from './routes/Routes';

chrome
    .setRootTemplate('<div id="root"></div>')
    .setRootController((docTitle, $store, $history, $scope) => {
      docTitle.change(AppStrings.appName());

      // Mount the React app
      const el = document.getElementById('root');
      render(<Routes store={ $store } history={ $history }/>, el);

      // Initalized the loading spinner thingy
      $scope.loading = false;
    });
