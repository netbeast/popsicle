import React from 'react'
import {View} from 'react-native'
import * as components from '../components/index'
import * as theme from '../components/theme'

export function OldButtons (){
  const {Button, Txt} = components
  return (
    <View>
      <View>
        <Txt>Sstandard button with console.log onPress</Txt>
        <Button
          onPress={() => {
            console.log('Pressed Standard Button')
          }}>
          Touch me motherfucker
        </Button>
      </View>
      <View>
        <Txt>You can create colored buttons</Txt>
        <Button
          borderColor={theme.PINK}
          tintColor={theme.PINK}
          onPress={() => {
            console.log('Pressed PINK Button')
          }}>
          I am a PINK button
        </Button>
        <Button
          borderColor={theme.BLUE_LIGHT}
          tintColor={theme.BLUE_LIGHT}
          onPress={() => {
            console.log('Pressed BLUE Button')
          }}>
          I am a BLUE button
        </Button>
        <Button
          textColor={theme.GREEN_DARK}
          borderColor={theme.GREEN_DARK}
          style={{borderWidth: 3}}
          onPress={() => {
            console.log('Pressed GREEN_DARK Button')
          }}>
          I am a GREEN_DARK button
        </Button>
        <Button
          textColor={theme.RED}
          borderColor={theme.RED}
          style={{borderWidth: 3}}
          onPress={() => {
            console.log('Pressed RED Button')
          }}>
          I am a RED button
        </Button>
      </View>
      <View>
        <Txt>Or create buttons with diferent sizes</Txt>
        <Txt style={{textAlign: 'center'}}>
          <Button
            style={{
              height: 90,
              width: 160,
            }}
            onPress={() => {
              console.log('Pressed Standard Button')
            }}>
            Centered button height: 90 and width:190
          </Button>
        </Txt>
        <Button
          textStyle={{fontSize: 32}}
          onPress={() => {
            console.log('Pressed Standard Button')
          }}>
          fontSize: 32
        </Button>
      </View>
    </View>
  )
}
