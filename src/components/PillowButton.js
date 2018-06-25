import React, {Component} from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Svg, G, Path} from 'react-native-svg'
import {Txt} from './'

import * as theme from './theme'

const pathStr = "M8.2131527,1.1780982 C33.4754351,0.392699401 58.7377176,8.68651249e-16 84,0 C109.262282,0 134.524564,0.392699392 159.786846,1.17809818 L159.786846,1.17809733 C163.914418,1.30642263 167.266049,4.55531362 167.522775,8.67689205 C167.840925,13.7845947 168,18.8922973 168,24 C168,29.1077024 167.840925,34.2154047 167.522775,39.3231071 L167.522776,39.3231072 C167.266049,43.4446855 163.914419,46.6935765 159.786847,46.8219018 C134.524565,47.6073006 109.262282,48 84,48 C58.7377179,48 33.4754357,47.6073006 8.21315362,46.8219018 L8.21315359,46.8219027 C4.08558171,46.6935774 0.733951354,43.4446864 0.477225216,39.323108 C0.159075072,34.2154053 1.09464805e-15,29.1077027 0,24 C0,18.8922976 0.159075055,13.7845953 0.477225164,8.67689288 L0.477224439,8.67689284 C0.733950559,4.55531446 4.08558087,1.3064235 8.2131527,1.1780982 Z"

export class PillowButton extends Component {
  static defaultProps = {
    tintColor: theme.TEAL,
  }

  render () {
    return (
      <TouchableOpacity>
        <Svg width="168px" height="48px" viewBox="0 0 168 48">
          <G xmlns="http://www.w3.org/2000/svg" id="Button/Medium/Primary">
              <Path fill={this.props.tintColor} d={pathStr} />
          </G>
        </Svg>
        <View style={{position: 'absolute', width: 168, height: 48, justifyContent: 'center', alignItems: 'center'}}>
          <Txt
            style={{color: 'white'}}>
            Action
          </Txt>
        </View>
      </TouchableOpacity>
    )
  }
}
