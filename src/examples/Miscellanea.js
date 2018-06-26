import React from 'react'
import {Platform, View, StyleSheet} from 'react-native'
import { Toggle } from 'react-powerplug'

import {Bold, Card, CheckBox, ExpandableCard, TextSmall, Txt, Slider, Switch} from '../components/index'

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

      <Bold> The following is a {'<Card />'} component </Bold>
      <Card>
        <Txt>Some framed content here</Txt>
      </Card>
      <Bold> The following is a {'<ExpandableCard />'} component </Bold>
      <ExpandableCard expanded={false}>
        <Txt>Press on top of the box</Txt>
        <Txt>To see how the content is compressed</Txt>
        <Txt>... Some more content</Txt>
      </ExpandableCard>
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

