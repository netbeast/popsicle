import React from 'react'
import {
  Platform,
  Switch as NativeSwitch,
} from 'react-native'
import * as theme from './theme'

export function Switch (props) {
  const androidThumbColor = props.value ? theme.TEAL : theme.GREY_LIGHTER
  const tintColor = Platform.OS === 'android' ? theme.GREY : null
  let thumbTintColor
  let onTintColor

  if (Platform.Version >= 23) {
    thumbTintColor = Platform.OS === 'ios' ? undefined : androidThumbColor
  }

  if (Platform.Version >= 23 || Platform.OS === 'ios') {
    onTintColor = theme.TEAL_SEMI_TRANSPARENT
  }

  return (
    <NativeSwitch
      onTintColor={onTintColor}
      thumbTintColor={thumbTintColor}
      tintColor={props.tintColor || tintColor}
      {...props}
    />
  )
}
