import React from 'react'
import {View} from 'react-native'
import {PillowButton} from '../components/index'
import * as theme from '../components/theme'

export function PillowButtons () {
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
        <PillowButton> Next</PillowButton>
      </View>
    </View>
  )
}
