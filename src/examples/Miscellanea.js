import React from 'react'
import {Platform, View, StyleSheet} from 'react-native'
import { Toggle } from 'react-powerplug'

import {CheckBox, TextSmall, Slider, Switch} from '../components/index'

import * as theme from '../components/theme'

export function Miscellanea () {
  return (
    <View>
      <View style={styles.row}>
        <TextSmall>{'<CheckBox /> '} </TextSmall>
        <Toggle initial>
          {({ on, toggle }) => (
            <CheckBox value={on} onValueChange={toggle} />
          )}
        </Toggle>
      </View>

      <View style={styles.row}>
      <TextSmall>{'<Switch />'} Customized with colors depending on mobile OS </TextSmall>
        <Toggle initial>
          {({ on, toggle }) => (
            <Switch value={on} onValueChange={toggle} />
          )}
        </Toggle>
      </View>

      {(() => {
        if (Platform.OS === 'web') {
          return null
        }

        return (
          <React.Fragment>
            <TextSmall> {'<Slider /> '} </TextSmall>
            <Slider />
          </React.Fragment>
        )
      })()}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
})

