import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Home from './home/HomeNav'
import About from './about/AboutRootContainer'
import Contact from './contact/ContactRootContainer'
import Pricing from './pricing/PricingRootContainer'
import More from './more/MoreRootContainer'

import Login from './components/Login';
import PrayerList from './containers/PrayerList';
import CreatePrayer from './components/CreatePrayer';

import appReducer from './reducers'

let store = createStore(appReducer)

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
