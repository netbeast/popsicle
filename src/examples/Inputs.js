import React from 'react'
import {View} from 'react-native'

import * as components from '../components/index'

export function Inputs () {
  const {
    TxtInput, EmailInput, PasswordInput, Txt,
  } = components
  return (
    <View style={{backgroundColor: 'white'}}>
      <Txt> TextInput - No backgroundColor Property</Txt>
      <TxtInput backgroundStyle={{backgroundColor: 'transparent'}} />
      <Txt> TextInput</Txt>
      <TxtInput />
      <Txt> PasswordInput</Txt>
      <PasswordInput />
      <Txt> EmailInput</Txt>
      <EmailInput />
    </View>
  )
}
