import React from 'react';
import ReactDom from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import createRoutes from './routes';

const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);

const routes = createRoutes(store);

const render = () =>
  ReactDom.render(
    <Provider store={store}>
      <AppContainer>
        <Router history={history}>
          {routes}
        </Router>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );

render();

if (module.hot) {
  module.hot.accept('./containers/App', () => render());
}
