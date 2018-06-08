import React, {Component} from 'react'
import {Platform} from 'react-native'
import {AppNavigator} from './AppNavigator'

export default class EntryPoint extends Component {
  componentDidMount () {
    if (Platform.os === 'web') {
      WebFont.load({
        google: {families: ['Open+Sans:400,600,700']},
      })
    }
  }

  render () {
    return <AppNavigator />
  }
}
