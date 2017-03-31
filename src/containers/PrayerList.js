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
        
        <Tabs>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            // selected={selectedTab === 'list'}
            // title={selectedTab === 'list' ? 'LIST' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='list' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='list' size={30} />}
            onPress={() => navigate('PrayerList', { }) }>
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            // selected={selectedTab === 'groups'}
            // title={selectedTab === 'groups' ? 'GROUPS' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='people' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='people' size={30} />}
            onPress={() => navigate('GroupList', { }) }
            >
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            // selected={selectedTab === 'profile'}
            // title={selectedTab === 'profile' ? 'PROFILE' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='description' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='description' size={30} />}
            // onPress={() => navigate('Journal', { }) }
            >
          </Tab>
        </Tabs>
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
