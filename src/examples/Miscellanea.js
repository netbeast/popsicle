import React from 'react'
import {Dimensions, Platform, View, StyleSheet} from 'react-native'
import {TabNavigator} from 'react-navigation'
import { Toggle } from 'react-powerplug'

import {Bold, Card, CheckBox, ExpandableCard, TextSmall, Txt, TextPlaceholder, Screen, Slider, Switch, PagingDots} from '../components/index'
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

      <Bold> The following is a {'<Card />'} component </Bold>
      <CardSample />
      <Bold> The following is a {'<ExpandableCard />'} component </Bold>
      <ExpandableCard expanded={false}>
        <Txt>Press on top of the box</Txt>
        <Txt>To see how the content is compressed</Txt>
        <Txt>... Some more content</Txt>
      </ExpandableCard>

      <Txt>Here some possibly outdated {'<PagingDots />'}</Txt>
      <View style={{width: 300, height: 300, borderColor: theme.GREY_LIGHTER, borderRadius: 10, borderWidth: 1}}>
        <TabSample />
      </View>

      <Txt>This is mainly an empty view {'<Screen />'}</Txt>
      <Screen />
    </View>
  )
}

const CardSample = () => (
  <Card>
    <TextPlaceholder style={{width: Math.random() * 200, margin: 5}} />
    <TextPlaceholder style={{width: Math.random() * 200, margin: 5}} />
    <TextPlaceholder style={{width: Math.random() * 200, margin: 5}} />
  </Card>
)


const TabSample = TabNavigator(
  {
    one: {
      screen: CardSample,
    },
    two: {
      screen: CardSample,
    },
    three: {
      screen: CardSample,
    },
  },
  {
    tabBarPosition: 'bottom',
    lazy: false,
    initialRouteName: 'one',
    tabBarComponent: props => {
      const activeTab = props.navigation.state.index

      return (
        <PagingDots
          style={[props.style, {width: 300}]}
          tintColor={theme.TEAL}
          activeTab={activeTab}
          length={3}
        />
      )
    },
    tabBarOptions: {
      style: {
        position: 'absolute',
        backgroundColor: 'transparent',
        bottom: 0,
      },
    },
  }
)

const styles = StyleSheet.create({
  row: {
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
})

