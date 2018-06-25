
import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native'

import * as theme from './theme'

export const Bold = ({
  children, style, color, fontSize, ...props
}) => (
  <Text
    style={[
      styles.bold,
      {color, fontSize, backgroundColor: 'transparent'},
      style,
    ]}
    {...props}>
    {children}
  </Text>
)

export const Semibold = ({
  children, style, color, fontSize, ...props
}) => (
  <Text
    style={[
      styles.semibold,
      {color, fontSize, backgroundColor: 'transparent'},
      style,
    ]}
    {...props}>
    {children}
  </Text>
)

// Legacy component name
export const Small = ({children, style, ...props}) => (
  <Text style={[styles.smallText, style]} {...props}>
    {children}
  </Text>
)

// Legacy component name
export const Title = ({
  children, color, style, fontSize, ...props
}) => (
  <Text
    {...props}
    style={[
      {
        backgroundColor: 'transparent',
        color: color || theme.GREY,
        fontFamily: theme.BOLD_FONT,
        fontSize: fontSize || 36,
      },
      style,
    ]}>
    {children}
  </Text>
)

// Legacy component name
export const Txt = ({
  children, style, color, fontSize, ...props
}) => (
  <Text
    style={[
      styles.paragraph,
      {color, fontSize, backgroundColor: 'transparent'},
      style,
    ]}
    {...props}>
    {children}
  </Text>
)

export const TextTitle = ({
  children, style, color, ...props
}) => (
  <Text
    style={[
      {
        color,
        fontFamily: theme.REGULAR_FONT,
        fontSize: 20,
        lineHeight: 24,
        backgroundColor: 'transparent',
      },
      style,
    ]}
    {...props}>
    {children}
  </Text>
)

export const TextBody = ({
  children, style, color, ...props
}) => (
  <Text
    style={[
      {
        color,
        fontFamily: theme.REGULAR_FONT,
        fontSize: 16,
        lineHeight: 24,
        backgroundColor: 'transparent',
      },
      style,
    ]}
    {...props}>
    {children}
  </Text>
)

export const TextSmall = ({
  children, style, color, ...props
}) => (
  <Text
    style={[
      {
        color,
        fontFamily: theme.REGULAR_FONT,
        fontSize: 14,
        lineHeight: 16,
        backgroundColor: 'transparent',
      },
      style,
    ]}
    {...props}>
    {children}
  </Text>
)

export const TextTiny = ({
  children, style, color, ...props
}) => (
  <Text
    style={[
      {
        color,
        fontFamily: theme.REGULAR_FONT,
        fontSize: 12,
        lineHeight: 16,
        backgroundColor: 'transparent',
      },
      style,
    ]}
    {...props}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  semibold: {
    color: theme.GREY,
    fontWeight: '600',
    fontFamily: Platform.OS === 'web' ? theme.REGULAR_FONT : theme.SEMI_BOLD_FONT,
  },
  bold: {
    color: theme.GREY,
    fontWeight: '700',
    fontFamily: Platform.OS === 'web' ? theme.REGULAR_FONT : theme.BOLD_FONT,
  },
  paragraph: {
    color: theme.GREY,
    fontFamily: theme.REGULAR_FONT,
  },
  smallText: {
    fontSize: 10,
    fontWeight: '100',
    backgroundColor: 'transparent',
    fontFamily: theme.REGULAR_FONT,
  },
})
