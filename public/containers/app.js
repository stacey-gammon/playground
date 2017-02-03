import * as React from 'react';
import { Container } from 'flux/utils';
import { appStore } from '../stores/app_store';
import { AppView } from '../views/app_view';

class App extends React.Component {
  static getStores() {
    return [ appStore ];
  }

  static calculateState() {
    return {
      showSpinner: appStore.getState().showSpinner,
    };
  }

  render() {
    return (
      <AppView showSpinner={this.state.showSpinner}>
        { this.props.children }
      </AppView>
    );
  }
}

export const AppContainer = Container.create(App);