/**
 * @providesModule %layout
 */

import React, {Component} from 'react'
import idx from 'idx'
import {
  Animated,
  Dimensions,
  Image,
  Linking,
  Platform,
  Slider as NativeSlider,
  StyleSheet,
  Switch as NativeSwitch,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import * as Animatable from 'react-native-animatable'
import * as theme from './theme'

export * from './Screen'

export const AnimatableView = __DEV__ ? View : Animatable.View

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

export const CheckBox = ({size, value, ...props}) => {
  const activeTintColor = props.activeTintColor || theme.TEAL
  const inactiveTintColor = props.inactiveTintColor || 'white'
  const borderInactiveTintColor =
    props.inactiveTintColor || theme.GREY_LIGHT
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

export class DoubleTap extends Component {
  constructor (props) {
    super(props)
    this.state = {timesPressed: 0, lastPress: 0}
  }

  onDoubleTap () {
    this.setState({timesPressed: 0, lastPress: 0})
    this.props.onDoubleTap()
  }

  on6thTap () {
    this.setState({timesPressed: 0, lastPress: 0})
    this.props.on6thTap()
  }

  onPress () {
    const delta = new Date().getTime() - this.state.lastPress

    if (typeof this.props.onPress === 'function') this.props.onPress()

    if (delta < 200) {
      // eslint-disable-next-line
      console.log(6 - this.state.timesPressed, 'presses remaining')
      switch (this.state.timesPressed) {
        case 0:
          if (typeof this.props.onDoubleTap === 'function') this.onDoubleTap()
          break
        default:
          if (
            this.state.timesPressed >= 6 &&
            typeof this.props.on6thTap === 'function'
          ) {
            this.on6thTap()
          }
          break
      }
    }

    this.setState({
      timesPressed: this.state.timesPressed + 1,
      lastPress: new Date().getTime(),
    })
  }

  render () {
    return (
      <TouchableWithoutFeedback
        onPress={e => this.onPress(e)}
        {...this.props}
      />
    )
  }
}

export const EmailInput = props => (
  <View
    style={{
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    }}>
    {props.hideLabel ? null : (
      <Title fontSize={20} color={idx(props, _ => _.style.color)}>
        {props.label}
      </Title>
    )}
    <TxtInput
      autoCorrect={!!props.autoCorrect}
      keyboardType="email-address"
      placeholder={props.placeholder}
      underlineColorAndroid="transparent"
      {...props}
    />
  </View>
)

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

export const Link = props => (
  <Txt
    onPress={async () => {
      if (props.href && (await Linking.canOpenURL(props.href))) {
        return Linking.openURL(props.href)
      }
    }}
    {...props}
    style={[
      props.style,
      props.underline
        ? {
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
          }
        : {},
    ]}>
    {props.children}
  </Txt>
)

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

export class PasswordInput extends Component {
  constructor (props) {
    super(props)
    this.state = {secureTextEntry: true}
  }

  focus () {
    if (!this.input) return
    this.input.focus() // eslint-disable-line
  }

  render () {
    const {
      value, style, label, placeholder, hideLabel, ...props
    } = this.props
    const {secureTextEntry, focus} = this.state
    const {color: ignoredProp, ...viewStyle} = style || {}
    const color =
      props.color || idx(this.props, _ => _.style.color) || theme.GREY

    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
          }}>
          <TextInput
            ref={node => {
              this.input = node
            }}
            style={[styles.txtInput, style]}
            focus={focus}
            value={value}
            underlineColorAndroid="transparent"
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            {...props}
          />

          <TouchableOpacity
            style={{
              flex: 0.1,
              flexDirection: 'row',
            }}
            activeOpacity={0.8}
            onPress={() => this.setState({secureTextEntry: !secureTextEntry})}>
            <Icon
              style={{fontSize: 30}}
              color={'#59CBE8'}
              name={secureTextEntry ? 'ios-eye' : 'ios-eye-outline' }>
            </Icon>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
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

export function Switch (props) {
  const androidThumbColor = props.value ? theme.TEAL : theme.GREY_LIGHTER
  const tintColor = Platform.OS === 'android' ? theme.GREY : null
  let thumbTintColor
  let onTintColor

  if (Platform.Version >= 23) {
    thumbTintColor = Platform.OS === 'ios' ? undefined : androidThumbColor
  }

  if (Platform.Version >= 23 || Platform.OS === 'ios') {
    onTintColor = theme.TEAL_SEMI_TRANSPARENT
  }

  return (
    <NativeSwitch
      onTintColor={onTintColor}
      thumbTintColor={thumbTintColor}
      tintColor={props.tintColor || tintColor}
      {...props}
    />
  )
}

export class Slider extends React.Component {
  constructor () {
    super()
    this.state = {
      thumbImage: null,
    }
  }

  async componentWillMount () {
    // workaround to set an image for the slider
    const thumbTintColor = this.props.thumbTintColor || theme.GREY
    this.setState({
      thumbImage: await Icon.getImageSource(
        'ios-radio-button-on',
        20,
        thumbTintColor
      ),
    })
  }

  render () {
    let minimumTrackTintColor
    let maximumTrackTintColor

    if (Platform.OS === 'ios') {
      minimumTrackTintColor = theme.GREY
      maximumTrackTintColor = theme.GREY_LIGHT
    } else if (Platform.Version >= 23) {
      minimumTrackTintColor = theme.GREY_LIGHT
      maximumTrackTintColor = theme.GREY
    }

    return (
      <NativeSlider
        thumbTintColor={theme.GREY}
        thumbImage={this.state.thumbImage}
        minimumTrackTintColor={minimumTrackTintColor}
        maximumTrackTintColor={maximumTrackTintColor}
        {...this.props}
      />
    )
  }
}

export const Small = ({children, style, ...props}) => (
  <Text style={[styles.smallText, style]} {...props}>
    {children}
  </Text>
)

export const Title = ({
  children, color, style, fontSize, ...props
}) => (
  <Text
    {...props}
    style={[
      {
        backgroundColor: 'transparent',
        color: color || theme.GREY,
        // fontFamily: theme.BOLD_FONT,
        fontSize: fontSize || 36,
      },
      style,
    ]}>
    {children}
  </Text>
)

export const TouchableRipple = ({children, style, ...props}) => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
    useForeground={false}
    {...props}>
    <View style={style}>{children}</View>
  </TouchableNativeFeedback>
)

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

export class TxtInput extends Component {
  constructor (props) {
    super(props)
    this.state = { text: this.props.placeholderText || 'placeholder' };
  }

  render () {
    return (
        <TextInput
        placeholder={this.state.text}
        placeholderTextColor="#9BA3B0"
        style={[styles.txtInput, this.props.style]}
        underlineColorAndroid="transparent"
        {...this.props} // will override underlineColorAndroid
    />
    )
  }
}

export class NewButton extends Component {
  constructor (props) {
    super(props)
    this.state = {pressStatus: false}
  }

  render () {
    return (
      <TouchableOpacity
        activeOpacity={1}
        {...this.props}
        style={{padding: 10}}
        // onPress={this.setState({ pressStatus: true })}
        onPressIn={() => this.setState({pressStatus: true})}
        onPressOut={() => this.setState({pressStatus: false})}>
        {
          // Surround text with a view to avoid crash, check issue
          // https://github.com/facebook/react-native/issues/1693
        }
        <View style={styles.tvscreen}>
          <View
            style={
              this.state.pressStatus ? (
                styles.tvscreenMainPressed
              ) : (
                styles.tvscreenMain
              )
            }>
            <Txt style={styles.newButtonText}>{this.props.children}</Txt>
          </View>
          <View
            style={
              this.state.pressStatus ? (
                styles.tvscreenTopPressed
              ) : (
                styles.tvscreenTop
              )
            }
          />
          <View
            style={
              this.state.pressStatus ? (
                styles.tvscreenBottomPressed
              ) : (
                styles.tvscreenBottom
              )
            }
          />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  activeDot: {
    backgroundColor: 'transparent',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  bold: {
    color: theme.GREY,
    fontWeight: 'bold',
    fontFamily: theme.BOLD_FONT,
  },
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
  paragraph: {
    color: theme.GREY,
    fontFamily: theme.PARAGRAPH_FONT,
  },
  pill: {
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 12,
  },
  txtInput: {
    flex: 0.8,

    // fontFamily: theme.PARAGRAPH_FONT,
    height: 52,
    fontSize: 20,
  },
  smallText: {
    fontSize: 10,
    fontWeight: '100',
    backgroundColor: 'transparent',
  },
  tvscreen: {},
  tvscreenMain: {
    width: 300,
    height: 75,
    backgroundColor: theme.BLUE_DARKER,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tvscreenMainPressed: {
    width: 300,
    height: 75,
    backgroundColor: theme.BLUE_DARKER2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tvscreenTop: {
    width: 160,
    height: 64,
    backgroundColor: theme.BLUE_DARKER,
    position: 'absolute',
    top: -30,
    left: 70,
    borderRadius: 60,
    transform: [{scaleX: 1.75}, {scaleY: 0.2}],
  },
  tvscreenTopPressed: {
    width: 160,
    height: 64,
    backgroundColor: theme.BLUE_DARKER2,
    position: 'absolute',
    top: -30,
    left: 70,
    borderRadius: 60,
    transform: [{scaleX: 1.75}, {scaleY: 0.2}],
  },
  tvscreenBottom: {
    width: 160,
    height: 64,
    backgroundColor: theme.BLUE_DARKER,
    position: 'absolute',
    bottom: -30,
    left: 70,
    borderRadius: 60,
    transform: [{scaleX: 1.75}, {scaleY: 0.2}],
  },
  tvscreenBottomPressed: {
    width: 160,
    height: 64,
    backgroundColor: theme.BLUE_DARKER2,
    position: 'absolute',
    bottom: -30,
    left: 70,
    borderRadius: 60,
    transform: [{scaleX: 1.75}, {scaleY: 0.2}],
  },
  newButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
})
