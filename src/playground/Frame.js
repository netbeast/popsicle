import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export class Frame extends React.Component {
  render () {
    return (
      <View style={styles.frame}>
        <View style={styles.container}>
          <View style={{backgroundColor: 'white'}}>
            <Text>You can see the changes in real time</Text>
            <Text>Open up src/App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
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
