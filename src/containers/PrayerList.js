import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
let styles

import {
  Button,
  List,
  ListItem,
  Text,
  SearchBar,
  SocialIcon,
  Icon
} from 'react-native-elements';

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
        hideChevron
        leftIcon={{name:"check-box-outline-blank"}}
        key={sectionID}
        onPress={log}
        title={rowData.title}
        subtitle={rowData.description}
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

        <View style={styles.addPrayer}>
          <Icon
          raised
          color='#6AAFE6'
          underlayColor='#6AAFE6'
          reverse
          name='add'
          onPress={() => navigate('CreatePrayer', { })} />
        </View>
			</View>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1',
    height: "100%"
  },
  addPrayer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrayerList)
