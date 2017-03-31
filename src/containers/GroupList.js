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
  Tabs, 
  Tab, 
  Icon
} from 'react-native-elements';

function mapStateToProps (state) {
  return {
    groupList: state.app.get('groupList').toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

const log = () => console.log('this is an example method')

class GroupList extends Component {
	static navigationOptions = {
		title: 'My Groups',
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
        rightTitle={rowData.ppl_count}
        subtitle={rowData.created_at}
        icon={{name: rowData.icon}}
      />
    )
  }

  render () {
		const {navigate} = this.props.navigation;

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = ds.cloneWithRows(this.props.groupList)

    return (
			<View style={styles.wrapper}>
        <View>
          <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
            <List>
              <ListView
                renderRow={this.renderRow}
                dataSource={dataSource}
                />
            </List>
          </ScrollView>
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
            onPress={() => navigate('Groups', { }) }
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

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#ebedf1',
    height: "100%",
  },
  wrapper: {
    flex: 1,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList)
