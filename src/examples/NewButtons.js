import React from 'react'
import {View} from 'react-native'
import * as components from '../components/index'
import * as theme from '../components/theme'

export function NewButtons () {
  const {Button, Txt, NewButton} = components
  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <View
        style={{
          padding: 10,
          alignItems: 'center',
        }}>
        <NewButton> Next</NewButton>
      </View>
    </View>
  )
}
