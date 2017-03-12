import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
  Button,
  List,
  ListItem,
  Text,
  SearchBar
} from 'react-native-elements'

function mapStateToProps (state) {
  return {
    prayerList: state.app.get('prayerList').toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

const log = () => console.log('this is an example method')

class PrayerList extends Component {
	static navigationOptions = {
		title: 'Prayer List',
  }

  constructor () {
    super()
    /*const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})*/
    /*this.state = {*/
    /*dataSource: ds.cloneWithRows(this.props.prayerList)*/
    /*}*/
    this.renderRow = this.renderRow.bind(this)
  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.title}
        icon={{name: rowData.icon}}
      />
    )
  }

  render () {
		const {navigate} = this.props.navigation;

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = ds.cloneWithRows(this.props.prayerList)

    return (
			<View>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={dataSource}
            />
        </List>
      </ScrollView>
			<Button
				onPress={() => navigate('CreatePrayer', { })}
				title="Add Prayer"
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

export default connect(mapStateToProps, mapDispatchToProps)(PrayerList)
