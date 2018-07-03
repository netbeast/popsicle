import React from 'react'
import {View} from 'react-native'
// import {ColorWheel} from 'react-native-color-wheel'
// import BigSlider from 'react-native-big-slider'
import {State} from 'react-powerplug'

import {FloatingButton, FloatingButtonItem} from '../components/'
import * as theme from '../components/theme'

export function Controls () {
  return (
    <View
      style={{
        justifyContent: 'space-around',
        width: 300,
        height: 300
      }}>
      <FloatingButton
        active
        name="ios-add"
        style={{right: 50}}
        backgroundColor={theme.TEAL}
        tintColor="white">
        <FloatingButtonItem
          name="ios-more"
          label="First option"
          style={{right: 50}}
          backgroundColor={theme.GREEN}
          tintColor="white"
        />
        <FloatingButtonItem
          name="ios-settings"
          label="Second option"
          style={{right: 50}}
          backgroundColor={theme.ORANGE}
          tintColor="white"
        />
      </FloatingButton>
    </View>
  )
}
