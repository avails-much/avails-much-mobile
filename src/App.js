import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'
import { StackNavigator } from 'react-navigation';
import axios from 'axios';
import { createLogicMiddleware } from 'redux-logic';

import { Iterable } from 'immutable';
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'

import Home from './home/HomeNav'
import About from './about/AboutRootContainer'
import Contact from './contact/ContactRootContainer'
import Pricing from './pricing/PricingRootContainer'
import More from './more/MoreRootContainer'

import Login from './components/Login';
import PrayerList from './containers/PrayerList';
import CreatePrayer from './components/CreatePrayer';

import appReducer from './reducers'

import createLogger from 'redux-logger';
import logic from './logic';

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

const deps = {
	httpClient: axios.create({ withCredentials: true })
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const store = createStore(
  appReducer,
  compose(
    applyMiddleware(logicMiddleware, logger),
  )
);
console.log('STATE IS: ', store.getState());


let styles = {}

const MainNavigator = StackNavigator({
	Login: {
		screen: Login,
	},
	PrayerList: {
		screen: PrayerList,
	},
	CreatePrayer: {
		screen: CreatePrayer,
	},
});

class App extends Component {
  render () {
    return (
      <Provider store={store}>
			  <MainNavigator />
      </Provider>
    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default App
