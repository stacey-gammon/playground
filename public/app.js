import React from 'react';

import chrome from 'ui/chrome';

import 'ui/autoload/all';
import 'plugins/kbn_vislib_vis_types/kbn_vislib_vis_types';

import './angular/history';
import './angular/app_store_hooks';
import './angular/global_state';
import './less/main.less';

import './angular/visualize_store_hooks';

import { render } from 'react-dom';
import { AppStrings } from '../AppStrings';
import { Routes } from './routes/Routes';

chrome
    .setRootTemplate('<div id="root"></div>')
    .setRootController((docTitle, $history, $scope, $appStoreHooks, $visualizeStoreHooks) => {
      docTitle.change(AppStrings.appName());

      // Mount the React app
      const el = document.getElementById('root');
      render(<Routes history={ $history }/>, el);

      // Initialized the loading spinner thingy
      $scope.loading = false;
    });
