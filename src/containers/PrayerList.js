import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import { Button, List, ListItem, Text, SearchBar, SocialIcon, Tabs, Tab, Icon } from 'react-native-elements';

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

  constructor (props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1.name !== r2.name;

		// DataSource configured
		const ds = new ListView.DataSource({ rowHasChanged });

		// Datasource is always in state
		this.state = {
			dataSource: ds.cloneWithRows(this.props.prayerList)
		};

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
		const { navigate } = this.props.navigation;

    return (
			<View style={styles.wrapper}>
        <View>
          <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
            <List>
              <ListView
                renderRow={this.renderRow}
                dataSource={this.state.dataSource}
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

      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1',
    height: "100%",
  },
  wrapper: {
    flex: 1,
  },
  addPrayer: {
    position: 'absolute',
    bottom: 55,
    right: 10,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PrayerList)
