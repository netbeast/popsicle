import React from 'react'
import {View} from 'react-native'
import * as components from '../components/index'
import * as theme from '../components/theme'

export function TextSamples (){
  const {Bold, TextTitle, TextBody, TextSmall, TextTiny} = components
  return (
    <View style={{padding: 20}}>
      <TextTitle>TextTitle sample</TextTitle>
      <TextBody>TextBody sample</TextBody>
      <TextSmall>TextSmall sample</TextSmall>
      <TextTiny>TextTiny sample</TextTiny>
    </View>
  )
}
