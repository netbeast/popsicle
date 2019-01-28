/**
 * @flow
 */

import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Animated } from 'react-native'

import { Txt, Bold } from './Text'
import { DropShadow } from './Miscellanea'
import * as theme from './theme'

type SnackbarProps = {
  message: string,
  action?: string,
  tintColor: string,
  onActionPressed?: () => void,
  onClose?: () => void,
  hideSnackbar: () => void,
}

export class Snackbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  animationValues = {
    fadeValue: new Animated.Value(1),
    heightValue: new Animated.Value(this.props.style && this.props.style.height ? this.props.style.height : 60)
  }

  static defaultProps = {
    message: '',
    tintColor: theme.TEAL,
    hideSnackbar() { },
  }

  toNarrow = () => {
    Animated.timing(
      this.animationValues.heightValue,
      {
        toValue: 0,
        duration: 300,
      }
    ).start( () => {
      this.props.onClose()
       this.setState({ visible: false 
      }
    )
    });
   
  }

  close = () => {
    Animated.timing(
      this.animationValues.fadeValue,
      {
        toValue: 0,
        duration: 400,
      }
    ).start(() => this.toNarrow() );
   
    
  }

  render() {
    let { fadeValue, heightValue } = this.animationValues;

    return (
      this.state.visible ? (
        <Animated.View
          style={{
            opacity: fadeValue,
            height: heightValue
          }}
        >
          <TouchableWithoutFeedback onPress={this.close} >
            <DropShadow style={this.props.style}>
              <View style={styles.snackbar}>
                <View
                  style={[styles.ribbon, { backgroundColor: this.props.tintColor }]}
                />
                <View style={{ flex: 1, padding: 10 }}>
                  <Txt style={this.props.textStyle}>{this.props.message}</Txt>
                </View>
                {this.props.action ? (
                  <TouchableOpacity onPress={this.props.onActionPressed}>
                    <View style={styles.action}>
                      <Bold style={{ color: theme.TEAL }}> {this.props.action} </Bold>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            </DropShadow>
          </TouchableWithoutFeedback>
        </Animated.View>) : null
    )
  }
}

export const SnackbarContext = React.createContext({
  isSnackbarVisible: false,
  showSnackbar() { },
  hideSnackbar() { },
})

export class SnackbarProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      isSnackbarVisible: false,
      snackbarProps: {},
    }

    this.sharedValues = {
      showSnackbar: this.showSnackbar.bind(this),
      hideSnackbar: this.hideSnackbar.bind(this),
    }
  }

  State: {
    isSnackbarVisible: boolean,
    snackbarProps: SnackbarProps,
  }

  showSnackbar(snackbarProps) {
    this.setState({
      isSnackbarVisible: true,
      snackbarProps,
    })
  }

  hideSnackbar() {
    this.setState({ isSnackbarVisible: false })
  }

  render() {
    const { isSnackbarVisible, snackbarProps } = this.state

    return (
      <SnackbarContext.Provider value={{ isSnackbarVisible, ...this.sharedValues }}>
        {this.props.children}
        {isSnackbarVisible ?
          <View style={{ flex: 1, position: 'absolute', top: 40, left: 10 }}>
            <Snackbar {...this.props} {...snackbarProps} />
          </View> : null}
      </SnackbarContext.Provider>
    )
  }
}

const styles = StyleSheet.create({
  ribbon: {
    position: 'absolute',
    width: 5,
    height: 100,
    left: 0,
    top: 0,
  },
  snackbar: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: theme.BORDER_RADIUS / 2,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  action: {
    padding: 10,
  },
})
