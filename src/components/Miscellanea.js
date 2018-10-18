import React, {Component} from 'react'
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import TouchableNativeFeedback from 'react-native-touchable-native-feedback-safe'
import * as Animatable from 'react-native-animatable'
import * as colorsys from 'colorsys'

import * as theme from './theme'

export const AnimatableView = __DEV__ ? View : Animatable.View

export const CheckBox = ({size, value, ...props}) => {
  const activeTintColor = props.activeTintColor || theme.TEAL
  const inactiveTintColor = props.inactiveTintColor || 'white'
  const borderInactiveTintColor = props.inactiveTintColor || theme.GREY_LIGHT
  return (
    <TouchableWithoutFeedback onPress={props.onValueChange}>
      <View
        style={{
          width: size || 25,
          height: size || 25,
          backgroundColor: value ? activeTintColor : inactiveTintColor,
          borderColor: value ? activeTintColor : borderInactiveTintColor,
          borderWidth: 1,
          borderRadius: 5,
          ...props.style,
        }}
      />
    </TouchableWithoutFeedback>
  )
}

export const Hr = ({tintColor, style, ...props}) => (
  <View
    style={[
      {
        height: 1,
        alignSelf: 'stretch',
        marginHorizontal: 10,
        backgroundColor: tintColor || theme.GREY_LIGHT,
        opacity: 0.7,
      },
      style,
    ]}
    {...props}
  />
)

/* -----
* Improved and enhanced Image loader with placeholder to use instead of Image
* ---- */

export class Img extends Component {
  constructor (props) {
    super(props)
    this.state = {placeholderOpacity: new Animated.Value(1)}
  }

  onLoad () {
    Animated.timing(this.state.placeholderOpacity, {
      toValue: 0,
      duration: 250,
    }).start()
  }

  render () {
    const {style} = this.props
    const {placeholderOpacity} = this.state

    return (
      <View style={[{backgroundColor: '#ccc'}, style]}>
        <Animated.Image
          key="placeholder"
          resizeMode="contain"
          style={[{position: 'absolute', opacity: placeholderOpacity}, style]}
          source={this.props.placeholder}
        />
        <Animated.Image
          key="image"
          resizeMode="contain"
          style={[{position: 'absolute'}, style]}
          source={this.props.source}
          onLoad={() => this.onLoad()}
        />
      </View>
    )
  }
}

export const NavbarIcon = ({style, source, ...props}) => (
  <TouchableOpacity
    {...props}
    activeOpacity={0.8}
    style={[{padding: theme.NAVBAR_HEIGHT * 0.2}, style]}>
    <Image
      source={source}
      style={{
        height: theme.NAVBAR_HEIGHT * 0.5,
        width: theme.NAVBAR_HEIGHT * 0.5,
      }}
    />
  </TouchableOpacity>
)

export const PagingDots = ({tintColor = theme.TEAL, ...props}) => {
  const active =
    props.customActiveTab !== undefined
      ? props.customActiveTab
      : props.activeTab
  const {width} = Dimensions.get('window')

  return (
    <View style={[{width}, styles.pagingDotsBar, props.style]}>
      {Array.apply(null, {length: props.length}).map((item, i) => {
        return (
          <View
            key={i} // eslint-disable-line react/no-array-index-key
            style={[
              styles.dot,
              {
                backgroundColor: tintColor,
                borderColor: tintColor,
              },
              active === i ? styles.activeDot : {},
            ]}
          />
        )
      })}
    </View>
  )
}

export const TextPlaceholder = ({style, ...props}) => (
  <Hr
    style={[{height: 14, alignSelf: 'flex-start', borderRadius: 3}, style]}
    {...props}
  />
)

export const Setting = ({
  children,
  style,
  width,
  img,
  icon,
  imgSize,
  iconSize,
  iconColor,
  ...props
}) => (
  <View>
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      disabled={typeof props.onPress !== 'function'}
      style={{
        flex: 1,
        paddingVertical: 10,
        ...theme.simpleNavbar,
        ...style,
      }}>
      {icon !== undefined ? (
        <Icon
          size={iconSize || 26}
          style={{paddingHorizontal: 12}}
          color={iconColor || 'white'}
          name={icon}
        />
      ) : null}
      {children}
    </TouchableOpacity>
    {!props.hideSeparator ? (
      <Hr tintColor={theme.TEAL_SEMI_TRANSPARENT} />
    ) : null}
  </View>
)

export const TouchableRipple = ({children, style, ...props}) => {
  if (process.env.NODE_ENV === 'test' || Platform.OS === 'web') {
    return (
      <TouchableWithoutFeedback {...props}>
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
      useForeground={false}
      {...props}>
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  )
}

function shadow ({
  color,
  opacity,
  radius,
  offsetWidth,
  offsetHeight,
  elevation,
}) {
  // Opacity and alpha should be 1 by default
  // Multiplying values is the algorithm for mixing opacity and alpha
  // But it's not working as expected on iOS, so we do it by hand
  const {a, ...colorWithoutAlpha} = colorsys.parseCss(color)
  const alpha = (opacity || 1) * (a || 1)

  return Platform.select({
    ios: {
      shadowColor: colorsys.stringify(colorWithoutAlpha),
      shadowOpacity: alpha,
      shadowRadius: radius,
      shadowOffset: {
        width: offsetWidth,
        height: offsetHeight,
      },
    },
    android: {
      elevation,
    },
    web: {
      boxShadow: `${offsetWidth}px ${offsetHeight}px ${radius}px ${color}`,
    },
  })
}

export const DropShadow = ({style, ...props}) => (
  <View style={[styles.dishShadow, style]} {...props} />
)

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: 'transparent',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  dishShadow: {
    borderRadius: 3,
    ...shadow({
      elevation: 3,
      color: 'rgb(115, 115, 115)',
      radius: 4,
      offsetWidth: 0,
      offsetHeight: 2,
    }),
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    marginBottom: 25,
  },
  pagingDotsBar: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
})
