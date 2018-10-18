import React, {Component} from 'react'
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'

import * as theme from './theme'
import {AnimatableView, TouchableRipple, Txt} from './'

export class FloatingButton extends Component {
  static defaultProps = {
    active: false,
  }

  constructor (props) {
    super(props)
    this.state = {active: this.props.active}
    this.main = null

    let k = 0
    this.children = React.Children.map(props.children, child =>
      React.cloneElement(child, {
        idx: k++,
        onPress: e => {
          this.onPress(e)
          child.props.onPress(e)
        },
      }))
  }

  onPress () {
    if (!this.props.children) {
      return typeof this.props.onPress === 'function' && this.props.onPress()
    }

    if (this.state.active) {
      this.setState({active: !this.state.active})
      this.main.transition({rotate: '45deg'}, {rotate: '0deg'})
    } else {
      this.main.transition({rotate: '0deg'}, {rotate: '45deg'})
      this.setState({active: !this.state.active})
    }
  }

  render () {
    const {
      backgroundColor, tintColor, style, left,
    } = this.props
    const {height, width} = Dimensions.get('window')
    return (
      <AnimatableView
        transition="paddingBottom"
        pointerEvents="box-none"
        style={[{width, height}, styles.floatingFrame]}>
        <View pointerEvents="box-none">
          {this.state.active ? (
            <AnimatableView animation="fadeInUp" duration={300}>
              {this.children}
            </AnimatableView>
          ) : null}
          <View
            pointerEvents="box-none"
            style={[
              {width, paddingBottom: 10},
              left
                ? {paddingLeft: 32, alignItems: 'flex-start'}
                : {paddingRight: 32, alignItems: 'flex-end'},
            ]}>
            <TouchableRipple
              onPress={() => this.onPress()}
              style={styles.floatingMainWrapper}>
              <Animatable.View
                style={[styles.floatingButton, style, {backgroundColor}]}
                ref={node => {
                  this.main = node
                }}>
                {typeof this.props.renderIcon !== 'function' ? (
                  <Icon
                    name={this.props.name}
                    size={ICON_SIZE}
                    color={tintColor || 'white'}
                  />
                ) : (
                  this.props.renderIcon()
                )}
              </Animatable.View>
            </TouchableRipple>
          </View>
        </View>
      </AnimatableView>
    )
  }
}

export const FloatingButtonItem = props => (
  <TouchableWithoutFeedback
    style={{position: 'absolute'}}
    onPress={props.onPress}>
    <View
      style={[
        styles.floatingButtonItemWrapper,
        {
          paddingBottom: 6 * (props.idx + 1),
          width: Dimensions.get('window').width,
        },
        props.style,
      ]}>
      <Label text={props.label} />
      <View
        style={[
          styles.floatinButtonItem,
          {
            backgroundColor: props.backgroundColor || theme.BLUE,
          },
        ]}>
        {typeof props.renderIcon !== 'function' ? (
          <Icon
            name={props.name}
            size={ICON_ITEM_SIZE}
            color={props.tintColor || 'white'}
          />
        ) : (
          props.renderIcon()
        )}
      </View>
    </View>
  </TouchableWithoutFeedback>
)

export const FloatingSimpleButton = props => (
  <View
    style={[
      styles.floatingSimpleButton,
      props.style,
      {backgroundColor: props.backgroundColor},
      props.left ? {left: 32} : {right: 32},
    ]}>
    {props.tag}
    <TouchableRipple
      testID={props.testID}
      activeOpacity={0.8}
      onPress={props.onPress}
      style={{
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {typeof props.renderIcon !== 'function' ? (
        <Icon
          name={props.name}
          size={ICON_SIZE}
          color={props.tintColor || 'white'}
        />
      ) : (
        props.renderIcon()
      )}
    </TouchableRipple>
  </View>
)

const Label = ({text}) => {
  if (!text) return null
  return (
    <View style={styles.floatingLabel}>
      <Txt numberOfLines={1}>{text}</Txt>
    </View>
  )
}

const BUTTON_SIZE = 56
const ICON_SIZE = 32
const ICON_ITEM_SIZE = 24
const BUTTON_ITEM_SIZE = 42

const styles = StyleSheet.create({
  floatingFrame: {
    paddingBottom: 9,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  floatingButton: {
    ...theme.SHADOW_BOX,
    borderRadius: BUTTON_SIZE / 2,
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingMainWrapper: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE + 10,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatinButtonItem: {
    ...theme.SHADOW_BOX,
    borderRadius: BUTTON_ITEM_SIZE / 2,
    height: BUTTON_ITEM_SIZE,
    width: BUTTON_ITEM_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingLabel: {
    ...theme.SHADOW_BOX,
    elevation: 2,
    padding: 8,
    paddingHorizontal: 12,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: 'white',
  },
  floatingButtonItemWrapper: {
    padding: 6,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  floatingSimpleButton: {
    ...theme.SHADOW_BOX,
    borderRadius: BUTTON_SIZE / 2,
    position: 'absolute',
    bottom: 24,
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
