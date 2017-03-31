import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Login from './components/Login';
import GroupList from './containers/GroupList';
import PrayerList from './containers/PrayerList';
import CreatePrayer from './components/CreatePrayer';

import appReducer from './reducers'

import reduxStore from './config/reduxStore';

const store = reduxStore();

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
	GroupList: {
		screen: GroupList,
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
        fontFamily: 'System'
      }
    })
  }
})

export default App
