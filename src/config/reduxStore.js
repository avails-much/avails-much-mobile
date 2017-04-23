/* eslint global-require: "off" */
import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { createLogicMiddleware } from 'redux-logic';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers/index';

import { AppStateRecord } from '../reducers/AppReducer';

import logic from '../logic';

const deps = {
  httpClient: axios.create({ withCredentials: true })
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const persistConfig = {
  storage: AsyncStorage,
  transforms: [immutableTransform({
    records: [AppStateRecord]
  })],
};

/* Enable redux dev tools only in development.
  * Use the standalone React Native Debugger extension:
  * https://github.com/jhen0409/react-native-debugger
  */
/* eslint-disable no-undef */
const composeEnhancers = (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */

const createStoreWithMiddleware = composeEnhancers(
  autoRehydrate(),
  applyMiddleware(logicMiddleware),
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  persistStore(store, persistConfig);

  if (__DEV__ && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
