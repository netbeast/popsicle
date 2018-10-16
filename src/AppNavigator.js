/**
 * @flow
 */
import React from 'react'
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import {kebabCase} from 'lodash'

import * as examples from './examples'
import {NavbarIcon} from './components'
import {Frame} from './playground'

const DrawerPopsicle = props => {
  return (
    <NavbarIcon
      onPress={() => {
        props.navigation.navigate({
          routeName: 'DrawerToggle',
        })
      }}
      source={require('./assets/img/popsicle.png')}
    />
  )
}

const routes = Object.entries(examples).reduce((acc, [key, screen]) => {
  if (typeof screen !== 'function') {
    return acc // Don't create views from other than React Component
  }

  const result = {...acc, [key]: {screen, key, path: kebabCase(key)}}
  return result
}, {})

export const AppNavigator = StackNavigator(
  {
    main: {
      screen: DrawerNavigator({
        ...routes,
        main: {screen: Frame},
      }),
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: props => ({
      title: 'Popsicle',
      headerLeft: <DrawerPopsicle {...props} />,
      headerTitleStyle: {
        color: 'black',
        alignSelf: 'center',
      },
    }),
  }
)
