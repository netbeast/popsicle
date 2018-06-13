import React, {Component} from 'react'
import {Platform} from 'react-native'

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf'

import {AppNavigator} from './AppNavigator'

const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: Ionicons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);

export default class EntryPoint extends Component {
  componentDidMount () {
    if (Platform.OS === 'web') {
      global.WebFont.load({
        google: {families: ['Open+Sans:400,600,700']},
      })
    }
  }

  render () {
    return <AppNavigator />
  }
}
