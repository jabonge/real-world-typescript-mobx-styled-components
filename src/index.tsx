import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import App from './App';
import * as serviceWorker from './serviceWorker';

import StoreProvider from './Context';
import { HashRouter } from 'react-router-dom';

const Hot = hot(App);
ReactDOM.render(
  <StoreProvider>
    <HashRouter>
      <Hot />
    </HashRouter>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
