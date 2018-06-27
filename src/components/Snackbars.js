
/**
 * @flow
 */

import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import {Txt, Bold} from './Text'
import {DropShadow} from './Miscellanea'
import * as theme from './theme'

export class Snackbar extends React.Component {
  static defaultProps = {
    tintColor: theme.TEAL,
    onActionPressed () {},
  }

  render () {
    return (
      <DropShadow>
        <View style={styles.snackbar}>
          <View style={[styles.ribbon, {backgroundColor: this.props.tintColor}]} />
          <View style={{flex: 1, padding: 10}}>
            <Txt> {this.props.message} </Txt>
          </View>

          {this.props.action
            ? <TouchableOpacity onPress={this.props.onActionPressed}>
                <View style={styles.action}>
                  <Bold style={{color: theme.TEAL}}> {this.props.action} </Bold>
                </View>
              </TouchableOpacity>
            : null}
        </View>
      </DropShadow>
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
