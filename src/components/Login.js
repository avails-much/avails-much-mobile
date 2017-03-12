import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
	Button,
  Text,
} from 'react-native-elements'

class Login extends Component {
  render () {
		const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Button
          onPress={() => navigate('PrayerList', {})}
          title="Go to PrayerList"
        />
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
