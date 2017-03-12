import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import Home from './home/HomeNav'
import About from './about/AboutRootContainer'
import Contact from './contact/ContactRootContainer'
import Pricing from './pricing/PricingRootContainer'
import More from './more/MoreRootContainer'

import Login from './components/Login';
import PrayerList from './containers/PrayerList';

let styles = {}

class App extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <View>
        <Login />
        <PrayerList />
      </View>
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
