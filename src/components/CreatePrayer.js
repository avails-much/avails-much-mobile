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
    onCreatePrayer({ title: this.state.prayFor, description: this.state.prayerDesc });
  }
  render () {
		const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{backgroundColor: 'white'}} keyboardShouldPersistTaps="always">

        <FormLabel containerStyle={styles.labelContainerStyle}>Pray for:</FormLabel>
        <FormInput 
          onChangeText={(text) => this.setState({ prayFor: text })}
          placeholder='What do you want to pray for?' 
        />

        <FormLabel containerStyle={styles.labelContainerStyle}>Details:</FormLabel>
        <FormInput onChangeText={(text) => this.setState({ prayerDesc: text })} placeholder='Any further details?'/>

        <View style={styles.buttonActions}>
          <Button
            onPress={() => { this.onSave(); navigate('PrayerList', {}) }}
            title="Save"
            backgroundColor="#95BF74"
            style={styles.button}
          />
          <Button
            onPress={() => navigate('PrayerList', {})}
            title="Cancel"
            backgroundColor="#E94F37"
            buttonStyle={styles.button}
          />
        </View>
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
  },
  button: {
    marginTop: 10
  },
  buttonActions: {
    marginTop: 50
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePrayer)
