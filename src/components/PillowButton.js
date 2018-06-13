import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import {Txt} from './'
import * as theme from './theme'

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
                this.state.pressStatus
                  ? styles.tvscreenMainPressed
                  : styles.tvscreenMain
              }>
              <Txt style={styles.newButtonText}>{this.props.children}</Txt>
            </View>
            <View
              style={
                this.state.pressStatus
                  ? styles.tvscreenTopPressed
                  : styles.tvscreenTop
              }
            />
            <View
              style={
                this.state.pressStatus
                  ? styles.tvscreenBottomPressed
                  : styles.tvscreenBottom
              }
            />
          </View>
        </TouchableOpacity>
      )
    }
  }

const styles = StyleSheet.create({
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
})