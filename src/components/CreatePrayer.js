import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles
import { createPrayer } from '../actions';

import {
	Button,
  Text,
  FormLabel,
  FormInput,
} from 'react-native-elements'

function mapStateToProps (state) {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    onCreatePrayer: (prayerReq) => dispatch(createPrayer(prayerReq))
  }
}

class CreatePrayer extends Component {
	static navigationOptions = {
		title: 'Create Prayer',
  }
  constructor () {
    super()
    this.onSave = this.onSave.bind(this)
  }
  onSave () {
    const { onCreatePrayer } = this.props;
    console.log('props: ', this.props);
    console.log('state: ', this.state);
    onCreatePrayer({ title: 'YAY!!!!' });
  }
  render () {
		const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor: 'white'}} keyboardShouldPersistTaps="always">

        <FormLabel containerStyle={styles.labelContainerStyle}>Pray for:</FormLabel>
        <FormInput 
          onChangeText={(text) => this.setState({ prayFor: text })}
          placeholder='Pray for...' 
        />

        <FormLabel containerStyle={styles.labelContainerStyle}>Description:</FormLabel>
        <FormInput onChangeText={(text) => this.setState({ prayerDesc: text })} />

        <Button
          onPress={() => { this.onSave(); navigate('PrayerList', {}) }}
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

export default connect(mapStateToProps, mapDispatchToProps)(CreatePrayer)
