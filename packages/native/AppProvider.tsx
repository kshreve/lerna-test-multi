import React from 'react';
// @ts-ignore
import { Provider } from 'react-redux';
// @ts-ignore
import configureStore from 'lerna-test-multi-redux'

import App from './App'

const { store } = configureStore()

const AppProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppProvider;
