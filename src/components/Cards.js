/**
 * @flow
 */

import React from 'react'
import {StyleSheet, View} from 'react-native'
import * as Animatable from 'react-native-animatable'

import {TouchableRipple} from './'
import * as theme from './theme'

export const Card = ({children, style}: Object) => (
  <View style={[styles.card, style]}>{children}</View>
)

export class ExpandableCard extends React.Component {
  static defaultProps = {
    maxHeight: 250,
    minHeight: 50,
    expanded: true,
  }

  constructor (props: Object) {
    super(props)
    this.state = {
      expanded: props.expanded,
    }
  }

  state: {expanded: boolean}

  open = () => {
    this.ref.transitionTo({maxHeight: this.props.maxHeight})
    this.setState({expanded: true})
  }

  close = () => {
    this.ref.transitionTo({maxHeight: this.props.minHeight})
    this.setState({expanded: false})
  }

  toggle = () => {
    if (!this.state.expanded) {
      this.open()
    } else {
      this.close()
    }
  }

  ref: any

  render () {
    const onPress =
      typeof this.props.onPress === 'function'
        ? this.props.onPress
        : this.toggle

    return (
      <Card style={this.props.style}>
        <TouchableRipple onPress={onPress}>
          <Animatable.View
            ref={node => {
              this.ref = node
            }}
            style={{
              overflow: 'hidden',
              maxHeight: this.props.maxHeight,
              minHeight: this.props.minHeight,
            }}>
            {this.props.children}
          </Animatable.View>
        </TouchableRipple>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: theme.GREY_LIGHT,
    borderRadius: theme.BORDER_RADIUS,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
})
