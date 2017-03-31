/* eslint global-require: "off" */
import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import { createLogicMiddleware } from 'redux-logic';
import { AsyncStorage } from 'react-native';
import rootReducer from '../reducers/index';

import { AppStateRecord } from '../reducers/AppReducer';

import logic from '../logic';

const deps = {
  httpClient: axios.create({ withCredentials: true })
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const logger = createLogger({
  stateTransformer: (state) => {
    const newState = {};
    for (const i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }
    return newState;
  }
});

const persistConfig = {
  storage: AsyncStorage,
  transforms: [immutableTransform({
    records: [AppStateRecord]
  })],
};

const createStoreWithMiddleware = compose(
  autoRehydrate(),
  applyMiddleware(logicMiddleware, __DEV__ ? logger : undefined),
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
