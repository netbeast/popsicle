
import React from 'react'
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {Bold} from './Text'
import * as theme from './theme'

export const Button = ({style, ...props}) => (
  <TouchableOpacity activeOpacity={0.8} {...props}>
    {
      // Surround text with a view to avoid crash, check issue
      // https://github.com/facebook/react-native/issues/1693
    }
    <View
      style={[
        styles.button,
        {
          borderColor: props.borderColor,
          backgroundColor: props.tintColor,
        },
        style,
      ]}>
      <Bold
        color={props.textColor || theme.GREY}
        fontSize={props.textSize || 17}
        style={[{textAlign: 'center'}, props.textStyle]}>
        {props.children}
      </Bold>
      {typeof props.renderIcon === 'function' ? props.renderIcon() : null}
    </View>
  </TouchableOpacity>
)

export const SocialButton = ({
  onPress,
  style,
  icon,
  imgStyle,
  buttonText,
  tintColor,
}) => (
  <TouchableOpacity
    style={[
      theme.button,
      {
        height: 50,
        borderColor: tintColor,
        backgroundColor: tintColor,
        borderRadius: 25,
        margin: 7,
      },
      style,
    ]}
    onPress={() => onPress()}>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Image
        source={icon}
        style={[
          {
            opacity: 0.9,
            marginLeft: 15,
            width: 25,
            height: 25,
          },
          imgStyle,
        ]}
      />
      <Bold style={{color: 'white', fontSize: 17}}>{buttonText}</Bold>
      <View style={{width: 28, height: 28}} />
    </View>
  </TouchableOpacity>
)


const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: theme.GREY,
  },
})
