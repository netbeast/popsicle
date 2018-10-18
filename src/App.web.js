import React, {Component} from 'react'

import {AppNavigator} from './AppNavigator'

export default class EntryPoint extends Component {
  componentDidMount () {
    global.WebFont.load({
      google: {families: ['Open+Sans:400,600,700']},
    })

    // Generate required css
    const iconFont = require('react-native-vector-icons/Fonts/Ionicons.ttf')

    const iconFontStyles = `@font-face {
        src: url(${iconFont});
        font-family: Ionicons;
      }`

    // Create stylesheet
    const style = document.createElement('style')
    style.type = 'text/css'
    if (style.styleSheet) {
      style.styleSheet.cssText = iconFontStyles
    } else {
      style.appendChild(document.createTextNode(iconFontStyles))
    }

    // Inject stylesheet
    document.head.appendChild(style)
  }

  render () {
    return <AppNavigator />
  }
}
