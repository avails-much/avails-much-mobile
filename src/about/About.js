import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Card,
  SocialIcon,
  Divider,
  ButtonGroup,
  Slider,
  Tile,
  Grid,
  Col,
  Row,
} from 'react-native-elements'

import * as RNElements from 'react-native-elements'

let styles = {}

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
  {
    name: 'thot leader',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'
  },
  {
    name: 'jsa',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
  },
  {
    name: 'talhaconcepts',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/talhaconcepts/128.jpg'
  },
  {
    name: 'andy vitale',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'
  },
  {
    name: 'katy friedson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
  }
]

class About extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0,
      value: 0.5
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  render () {
    const buttons = ['Button1', 'Button2']
    const { selectedIndex } = this.state
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.headerContainer}>
          <Icon color='white' name='invert-colors' size={62} />
          <Text style={styles.heading}>Components</Text>
        </View>
        <View style={{marginTop: 20}}>
          <ButtonGroup
            textStyle={{fontSize: 13}}
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons} />
        </View>
        <View style={styles.container}>
          <Card
            title='CARD WITH DIVIDER'>
            {
              users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode='cover'
                      source={{uri: u.avatar}} />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                )
              })
            }
          </Card>
          <Card containerStyle={{marginTop: 15}} title='FONTS'>
            <Text style={styles.fonts} h1>h1 Heading</Text>
            <Text style={styles.fonts} h2>h2 Heading</Text>
            <Text style={styles.fonts} h3>h3 Heading</Text>
            <Text style={styles.fonts} h4>h4 Heading</Text>
            <Text style={styles.fonts} >Normal Text</Text>
          </Card>
          <Card
            title='ICONS'
            containerStyle={{marginTop: 15}}>
            <View style={[styles.social, {marginTop: 15, marginBottom: 15, justifyContent: 'space-around'}]}>
              <RNElements.Icon
                onPress={() => console.log('hello')}
                type='font-awesome'
                color='#e14329'
                name='hashtag' />
              <RNElements.Icon
                onPress={() => console.log('hello')}
                type='font-awesome'
                color='#02b875'
                name='rocket' />
              <RNElements.Icon
                onPress={() => console.log('hello')}
                color='#000000'
                name='snapchat-ghost'
                type='font-awesome' />
              <RNElements.Icon
                color='#6441A5'
                name='btc'
                type='font-awesome'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                color='#f50'
                name='heartbeat'
                type='font-awesome'
                onPress={() => console.log('hello')} />
            </View>
             <View style={[styles.social,{marginTop: 15, marginBottom: 15, justifyContent: 'space-around'}]}>
              <RNElements.Icon
                name='rowing'
                color='#673AB7'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                name='g-translate'
                color='#03A9F4'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                color='#009688'
                name='sc-telegram'
                type='evilicon'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                color='#8BC34A'
                name='social-apple'
                type='foundation'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                color='#FFC107'
                name='ios-american-football'
                type='ionicon'
                onPress={() => console.log('hello')} />
             </View>

             <View>
              <View style={[styles.social,{ justifyContent: 'space-around'}]}>
                <RNElements.Icon
                  raised
                  name='vpn-key'
                  color='#E91E63'
                  onPress={() => console.log('hello')} />
                <RNElements.Icon
                  raised
                  name='ring-volume'
                  color='#3F51B5'
                  onPress={() => console.log('hello')} />
                <RNElements.Icon
                  raised
                  color='#00BCD4'
                  name='weekend'
                  onPress={() => console.log('hello')} />
                <RNElements.Icon
                  raised
                  color='#CDDC39'
                  name='bubble-chart'
                  onPress={() => console.log('hello')} />
                <RNElements.Icon
                  raised
                  color='#FF5722'
                  name='burst-mode'
                  onPress={() => console.log('hello')} />
              </View>
             </View>

             <View style={[styles.social,{ justifyContent: 'space-around'}]}>
              <RNElements.Icon
                reverse
                raised
                name='account-balance'
                color='#673AB7'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                raised
                name='android'
                color='#03A9F4'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                raised
                color='#009688'
                name='code'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                raised
                color='#8BC34A'
                name='card-travel'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                raised
                color='#FF9800'
                name='extension'
                onPress={() => console.log('hello')} />
            </View>

            <View style={[styles.social,{ justifyContent: 'space-around'}]}>
              <RNElements.Icon
                reverse
                name='group-work'
                color='#E91E63'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                name='lightbulb-outline'
                color='#3F51B5'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                color='#00BCD4'
                name='pets'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                color='#CDDC39'
                name='polymer'
                onPress={() => console.log('hello')} />
              <RNElements.Icon
                reverse
                color='#FF5722'
                name='touch-app'
                onPress={() => console.log('hello')} />
            </View>
          </Card>
          <Card
            title='SOCIAL ICONS'
            containerStyle={{marginTop: 15}}>
            <View style={[styles.social, { marginTop: 13, justifyContent: 'space-around'}]}>
              <SocialIcon
                raised={false}
                type='gitlab'
                onPress={() => console.log('hi!')}
              />
              <SocialIcon
                type='medium'
                onPress={() => console.log('hi2!')}
              />
              <SocialIcon
                type='github-alt'
                onPress={() => console.log('hi3!')}
              />
              <SocialIcon
                type='twitch'
              />
              <SocialIcon
                type='soundcloud'
              />
            </View>
            <View style={[styles.social, { marginTop: 13, justifyContent: 'space-around'}]}>
              <SocialIcon
                raised={false}
                type='facebook'
                onPress={() => console.log('hi!')}
              />
              <SocialIcon
                type='twitter'
                onPress={() => console.log('hi2!')}
              />
              <SocialIcon
                type='instagram'
                onPress={() => console.log('hi3!')}
              />
              <SocialIcon
                raised={false}
                type='codepen'
              />
              <SocialIcon
                raised={false}
                type='youtube'
              />
            </View>
          </Card>
          <Card
            title='LIGHT SOCIAL ICONS'
            containerStyle={{marginTop: 15}}>
            <View style={[styles.social, {justifyContent: 'space-around'}]}>
              <SocialIcon
                light
                raised={false}
                type='gitlab'
                onPress={() => console.log('hi!')}
              />
              <SocialIcon
                light
                type='medium'
                onPress={() => console.log('hi2!')}
              />
              <SocialIcon
                light
                type='github-alt'
                onPress={() => console.log('hi3!')}
              />
              <SocialIcon
                light
                type='twitch'
              />
              <SocialIcon
                light
                type='soundcloud'
              />
            </View>
          </Card>
          <Card
            containerStyle={{marginTop: 15, marginBottom: 15}}
            title='SOCIAL BUTTONS'>
            <View style={styles.socialButtons}>
              <SocialIcon
                button
                type='medium'
              />
              <SocialIcon
                button
                type='twitch'
              />
              <SocialIcon
                title='Sign In With Facebook'
                button
                fontWeight='400'
                type='facebook'
              />
              <SocialIcon
                title='Some Twitter Message'
                button
                type='twitter'
              />
              <SocialIcon
                light
                button
                title='Some Instagram Message'
                type='instagram'
              />
            </View>
          </Card>
          <Card
            containerStyle={{marginTop: 15, marginBottom: 15}}
            title='GRID LAYOUT'>
            <Grid style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', padding: 10}}>
              <Col size={0.25}>
                <TouchableHighlight onPress={() => console.log("hello")}>
                  <Image source={require('../images/avatar1.jpg')} style={{height: 50, width: 50, borderRadius: 25,}}/>
                </TouchableHighlight>
              </Col>
              <Col>
                <Row size={0.75}>
                  <Text style={{fontSize: 22}}>Adam McArther</Text>
                </Row>
                <Row>
                  <Text style={{color: 'grey'}}>Freelance developer</Text>
                </Row>
              </Col>
            </Grid>
          </Card>
          <Card
            containerStyle={{marginTop: 15, marginBottom: 15}}
            title='SLIDERS'>
            <View>
              <Slider
                value={this.state.value}
                onValueChange={(value) => this.setState({value})} />
              <Text>Value: {this.state.value}</Text>
            </View>
          </Card>
          <Card
            containerStyle={{marginTop: 15, marginBottom: 15}}
            title='TILES'>
            <View>
              <Tile
                 imageSrc={{uri: 'http://www.drodd.com/images15/sunset21.jpg'}}
                 title="When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator."
                 titleStyle={{fontSize: 20}}
                 featured
                 caption="Mahatma Gandhi"
                 activeOpacity={1}
                 width={310}
              />
            </View>
            <View style={{paddingTop: 20}}>
              <Tile
                imageSrc={{uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg'}}
                icon={{name: 'heart', type: 'font-awesome', size: 60, color: 'red'}}
                featured
                activeOpacity={0.8}
                onPress={() => { "Tile pressed" }}
                width={310}
              />
            </View>
            <View style={{paddingTop: 20}}>
              <Tile
                imageSrc={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Half_Dome_from_Glacier_Point,_Yosemite_NP_-_Diliff.jpg'}}
                title="Half Dome, Yosemite"
                titleStyle={{fontSize: 20}}
                activeOpacity={1}
                width={310}
                contentContainerStyle={{height: 70}}
              >
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{color: 'green'}}>Visit</Text>
                  <Text style={{color: 'blue'}}>Find out More</Text>
                </View>
              </Tile>
            </View>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.secondary
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default About
