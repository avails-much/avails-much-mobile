import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
	Button,
  Text,
  FormLabel,
  FormInput,
} from 'react-native-elements'

class CreatePrayer extends Component {
	static navigationOptions = {
		title: 'Create Prayer',
  }
  componentDidMount () {
    //this.refs.prayerForm.refs.textInputRef.focus()
  }
  render () {
		const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor: 'white'}} keyboardShouldPersistTaps="always">

        <FormLabel containerStyle={styles.labelContainerStyle}>Pray for:</FormLabel>
        <FormInput 
          placeholder='Pray for...' 
          ref='prayerForm'
          textInputRef='prayFor'
        />

        <FormLabel containerStyle={styles.labelContainerStyle}>Description:</FormLabel>
        <FormInput ref='prayerForm' textInputRef='prayerDesc' />

        <Button
          onPress={() => navigate('PrayerList', {})}
          title="Save"
        />
        <Button
          onPress={() => navigate('PrayerList', {})}
          title="Cancel"
        />
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1'
  },
  labelContainerStyle: {
    marginTop: 8
  }
});

export default CreatePrayer;
