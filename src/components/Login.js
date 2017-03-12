import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
	Button,
  Text,
  SocialIcon
} from 'react-native-elements'

class Login extends Component {
  render () {
		const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <Image source={require('../images/login-bg.jpg')} style={styles.backgroundImage}>
          <Image source={require('../images/avail-logo.png')} style={styles.logo} />
          <SocialIcon 
            style={styles.SocialIcon}
            onPress={() => navigate('PrayerList', {})} 
            title="Sign In With Facebook" 
            button 
            type="facebook"
          />
        </Image>

      </View>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SocialIcon: {
    width: 220,
    marginTop: 20
  }
});

export default Login;
