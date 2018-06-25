import React from 'react'
import {View} from 'react-native'

import {TextSmall, TextTiny, TextTitle} from '../components'
import * as theme from '../components/theme'


export function ColorSamples () {
  return (
    <View style={{padding: 20}}>
      <TextTitle>Other colors</TextTitle>
      <View style={{flexDirection: 'row'}}>
        <ColorSample name="GREY" color={theme.GREY} />
        <ColorSample name="GREY_LIGHTER" color={theme.GREY_LIGHTER} />
      </View>
      <TextTitle>Main colors</TextTitle>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <ColorSample name="TEAL" color={theme.TEAL} />
        <ColorSample name="BLUE_DARKER" color={theme.BLUE_DARKER} />
        <ColorSample color="white" />
        <ColorSample name="RED" color={theme.RED} />
        <ColorSample name="ORANGE" color={theme.ORANGE} />
        <ColorSample name="GREEN" color={theme.GREEN} />
        <ColorSample name="YELLOW" color={theme.YELLOW} />
        <ColorSample name="PURPLE" color={theme.PURPLE} />
      </View>
    </View>
  )
}


const ColorSample = props => (
  <View
      style={{
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 2},
        boxShadow: '0 0 1px rgba(0,0,0,.5)',
        borderRadius: 5,
        width: 120,
        padding: 10,
        height: 100,
        margin: 20,
        backgroundColor: props.color,
    }}>
      <TextSmall>{props.name}</TextSmall>
      <TextTiny>{props.color}</TextTiny>
  </View>
)
