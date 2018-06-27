import React from 'react'
import {Platform, Slider as NativeSlider} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import * as theme from './theme'

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
