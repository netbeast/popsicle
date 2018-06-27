import React from 'react'
import {View} from 'react-native'
import {ColorWheel} from 'react-native-color-wheel'
import BigSlider from 'react-native-big-slider'
import {State} from 'react-powerplug'

import {Link, Button} from '../components/index'
import * as theme from '../components/theme'

export function Controls () {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View style={{width: 300, height: 300}}>
        <ColorWheel />
      </View>
      <View style={{width: 300, height: 300}}>
        <State initial={{loading: false, data: null}}>
          {({state, setState}) => (
            <BigSlider
              value={state.val}
              onValueChange={val => {
                setState({val})
              }}
            />
          )}
        </State>
      </View>
    </View>
  )
}
