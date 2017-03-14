import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
let styles

import {
  Tabs, 
  Tab, 
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

class TabNavBar extends Component {
  
  constructor() {
    super()
    this.state = {
      selectedTab: 'profile',
    }
    // this.renderRow = this.renderRow.bind(this)
  }

  changeTab (selectedTab) {
    this.setState({selectedTab})
  }

  render () {
    const {navigate} = this.props.navigation;
    const { selectedTab } = this.state
    return (
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
  },
  addPrayer: {
    position: 'absolute',
    bottom: 55,
    right: 10,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabNavBar)
