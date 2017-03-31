import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Login from './components/Login';
import GroupList from './containers/GroupList';
import PrayerList from './containers/PrayerList';
import CreatePrayer from './components/CreatePrayer';

import appReducer from './reducers'

import reduxStore from './config/reduxStore';

const store = reduxStore();

let styles = {}

const PrayerTabs = TabNavigator({
	PrayerList: {
		screen: PrayerList,
		navigationOptions: {
			tabBar: {
				label: 'Prayer List',
				icon: ({ tintColor }) => (
          <Icon
						containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
						color={'#5e6977'}
						name='list'
						size={33}
					/>
				),
			},
		}
	},
	GroupList: {
		screen: GroupList,
		navigationOptions: {
			tabBar: {
				label: 'Group List',
				icon: ({ tintColor }) => (
          <Icon
						containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
						color={'#5e6977'}
						name='people'
						size={33}
					/>
				),
			},
		}
	},
});
const MainNavigator = StackNavigator({
	Login: {
		screen: Login,
	},
	PrayerList: {
		screen: PrayerTabs,
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
        fontFamily: 'System'
      }
    })
  }
})

export default App
