import React from 'react'
import {View} from 'react-native'

import {Small, TxtInput, PasswordInput, EmailInput} from '../components/index'

export class Inputs extends React.Component {
  constructor () {
    super()
    this.state = { testInput: 'Filled text input' }
  }

  render () {
    return (
      <View style={{backgroundColor: 'white'}}>
        <Small style={{paddingTop: 15, paddingBottom: 5}}>
          TextInput - No backgroundColor Property
        </Small>
        <TxtInput
          placeholder="Some placeholder text"
          backgroundStyle={{backgroundColor: 'transparent'}} />
        <Small style={{paddingTop: 15, paddingBottom: 5}}>
          TextInput
        </Small>
        <TxtInput value={this.state.testInput} onChangeText={v => this.setState({testInput: v})} />
        <Small style={{paddingTop: 15, paddingBottom: 5}}>
          PasswordInput
        </Small>
        <PasswordInput />
        <Small style={{paddingTop: 15, paddingBottom: 5}}>
          EmailInput
        </Small>
        <EmailInput />
      </View>
    )
  }
}
