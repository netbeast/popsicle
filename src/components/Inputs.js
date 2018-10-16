import React, {Component} from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import idx from 'idx'

import {Title} from './Text'
import * as theme from './theme'

export class TxtInput extends Component {
  static defaultProps = {
    onChangeText: () => {},
  }

  state = {filled: !!this.props.value}

  clearText = () => {
    this.props.onChangeText('')
    this.node.setNativeProps({text: ''})
    this.setState({filled: false})
  }

  render () {
    return (
      <View style={[styles.txtInputBackground, this.props.backgroundStyle]}>
        <TextInput
          ref={n => {
            this.node = n
          }}
          placeholderTextColor="#9BA3B0"
          style={[styles.txtInput, this.props.style]}
          underlineColorAndroid="transparent"
          {...this.props} // will override underlineColorAndroid
          onChangeText={value => {
            this.setState({filled: value.length > 0})
            this.props.onChangeText(value)
          }}
        />
        {this.state.filled ? (
          <View style={{
          	  borderRadius: 16,
    		  width: 28,
    		  height: 28,
    		  overflow: 'hidden'
    		}}>
            <Icon
              style={styles.txtInputIcon}
              color="white"
              onPress={() => this.clearText()}
              name="ios-close"
            />
          </View>
        ) : null}
      </View>
    )
  }
}

export const EmailInput = props => (
  <View>
    {props.hideLabel ? null : (
      <Title fontSize={20} color={idx(props, _ => _.style.color)}>
        {props.label}
      </Title>
    )}
    <TxtInput
       style={[styles.txtInput, props.style]}
      autoCorrect={!!props.autoCorrect}
      keyboardType="email-address"
      placeholder={props.placeholder}
      underlineColorAndroid="transparent"
      {...props}
    />
  </View>
)

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
      style, label, placeholder, hideLabel, ...props
    } = this.props
    const {secureTextEntry, focus} = this.state

    // eslint-disable-next-line no-unused-vars
    const {color: ignoredProp, ...viewStyle} = style || {}

    return (
      <View style={[styles.txtInputBackground, this.props.backgroundStyle]}>
        <TextInput
          ref={node => {
            this.input = node
          }}
          style={[styles.txtInput, style, {flex: 1}]}
          focus={focus}
          underlineColorAndroid="transparent"
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          {...props}
        />
        <Icon
          style={{
            fontSize: 22,
            marginRight: 12,
          }}
          color="#59CBE8"
          onPress={() => this.setState({secureTextEntry: !secureTextEntry})}
          name={secureTextEntry ? 'md-eye' : 'md-eye-off'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txtInput: {
    flex: 1,
    fontFamily: theme.REGULAR_FONT,
    fontSize: 16,
  },
  txtInputBackground: {
    backgroundColor: theme.GREY_LIGHTER,
    height: 52,
    padding: 10,
    paddingLeft: 20,
    paddingBottom: 12,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInputIcon: {
    fontSize: 26,
    backgroundColor: theme.GREY_LIGHT,
    borderRadius: 16,
    width: 28,
    height: 28,
    textAlign: 'center',
  },
})
