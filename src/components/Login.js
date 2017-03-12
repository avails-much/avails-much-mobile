import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
  Text,
} from 'react-native-elements'

class Login extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text>
        Login
        </Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  }
});

export default Login;
