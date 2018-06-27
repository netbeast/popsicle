import React from 'react'
import {View} from 'react-native'

import {Snackbar, Title} from '../components'
import * as theme from '../components/theme'

export function SnackbarSamples () {
  return (
    <View style={{padding: 20}}>
      <Title> Snackbar samples</Title>
      <View style={{padding: 5}} />
      <Snackbar message="This is a Snackbar" />
      <View style={{padding: 10}} />
      <Snackbar
        tintColor={theme.RED}
        message="It has a `tintColor` depending on the tone"
      />
      <View style={{padding: 10}} />
      <Snackbar
        action="Do it"
        onActionPressed={() => window.alert('Action pressed')}
        message="And may have an associated action"
      />
      <View style={{padding: 10}} />
      <Snackbar
        tintColor={theme.GREEN}
        message="They should disappear automatically, but that's up to the SnackbarProvider"
      />
    </View>
  )
}
