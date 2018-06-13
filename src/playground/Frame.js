import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'

import * as examples from '../examples'

export class Frame extends React.Component {
  render () {
    return (
      <View style={styles.frame}>
        <View style={styles.container}>
          <ScrollView>
          {Object.keys(examples)
            .filter(key => typeof examples[key] === 'function')
            .map(key => {
              const Renderer = examples[key]
              return (
                <View key={key} style={{margin: 40, borderRadius: 10, backgroundColor: 'white', padding: 20}}>
                  <Renderer />
                </View>
              )
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    flex: 1,
  },
})
