import React from 'react'
import {Platform, StyleSheet, View, ScrollView} from 'react-native'

import {SnackbarProvider} from '../components'
import * as examples from '../examples'

export class Frame extends React.Component {
  render () {
    return (
      <SnackbarProvider>
        <View style={styles.frame}>
            <ScrollView>
              {Object.keys(examples)
                .filter(key => typeof examples[key] === 'function')
                .map(key => {
                  const Renderer = examples[key]
                  return (
                    <View
                      key={key}
                      style={{
                        marginVertical: 40,
                        margin: Platform.OS === 'web' ? 40 : 10,
                        borderRadius: 10,
                        backgroundColor: 'white',
                        padding: 20,
                      }}>
                      <Renderer />
                    </View>
                  )
                })}
            </ScrollView>
        </View>
      </SnackbarProvider>
    )
  }
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
  },
})
