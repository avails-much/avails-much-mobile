import React, { Component } from 'react';
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

const log = () => console.log('this is an example method')

class PrayerList extends Component {
	static navigationOptions = {
		title: 'Prayer List',
  }

  constructor () {
    super()

    this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount () {
		const { onPrayerListSuccess, onPrayerListError } = this.props;

    this.props.onPrayerListPending();

    /*axios.get(PRAYER_LIST_URL)
      .then(resp => { console.log('resp.data', resp.data); return resp.data })
      .then(data => { console.log('data', data); return data })
      .then(data => onPrayerListSuccess(data))
      .catch(err => {
             console.log('ERROR12334q23423423452345: ', err); // log since could be render err
             onPrayerListError(err);
      })*/
  }

  renderRow (rowData, sectionID) {
    return (
      <ListItem
        key={sectionID}
        onPress={log}
        title={rowData.description}
        icon={{name: rowData.icon}}
      />
    )
  }

  render () {
		const {navigate} = this.props.navigation;

    return (
			<View>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
        <List>
          <ListView
            renderRow={this.renderRow}
            dataSource={this.dataSource.cloneWithRows(this.props.prayerList)}
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

export default PrayerList;
