import React from 'react'
import {View} from 'react-native'
import {
  Bold,
  Hr,
  TextTitle,
  TextBody,
  TextSmall,
  TextTiny,
} from '../components/index'

export function TextSamples () {
  return (
    <View style={{padding: 20}}>
      <TextTitle>TextTitle sample</TextTitle>
      <TextTitle>The quick brown fox jumps over the lazy dog</TextTitle>
      <Hr style={{margin: 10}} />
      <TextBody>TextBody sample</TextBody>
      <TextBody>The quick brown fox jumps over the lazy dog</TextBody>
      <Hr style={{margin: 10}} />
      <TextSmall>TextSmall sample</TextSmall>
      <TextSmall>The quick brown fox jumps over the lazy dog</TextSmall>
      <Hr style={{margin: 10}} />
      <TextTiny>TextTiny sample</TextTiny>
      <TextTiny>The quick brown fox jumps over the lazy dog</TextTiny>
      <Hr style={{margin: 10}} />
      <Bold>Bold text sample</Bold>
      <Bold>The quick brown fox jumps over the lazy dog</Bold>
    </View>
  )
}
