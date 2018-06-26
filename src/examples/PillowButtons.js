import React from 'react'
import {View} from 'react-native'
import {PillowButton} from '../components/index'
import * as theme from '../components/theme'

export function PillowButtons () {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flexDirection: 'row',
      }}>
      <View style={{padding: 10}}>
        <PillowButton> Next Time </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton size="large"> A large button </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton size="small"> Small </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton size="mini"> Mini </PillowButton>
      </View>
      <View style={{padding: 10}}>
        <PillowButton
          wrapperStyle={{justifyContent: 'flex-start'}}
          iconSrc={require('../assets/img/facebook-light.png')}
          size="large"
          tintColor={theme.BLUE_DARK}>
          Login with Facebook
        </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton
          wrapperStyle={{justifyContent: 'flex-start'}}
          size="large"
          iconSrc={require('../assets/img/google-light.png')}
          tintColor={theme.RED}>
            Login with Google
        </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton> Text overflow that should not happen in the app </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton size="large"> Text overflow that should not happen in the app  </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton size="small"> Small </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton size="mini" />
      </View>
      <View style={{padding: 10}}>
        <PillowButton
          disabled
          size="large"
          iconSrc={require('../assets/img/favicon-white.png')}
          tintColor={theme.GREY_LIGHT}>
            Disabled with icon
        </PillowButton>
        <View style={{padding: 5}} />
        <PillowButton
          disabled
          tintColor={theme.GREY_LIGHT}>
          Disabled
        </PillowButton>
      </View>
    </View>
  )
}
