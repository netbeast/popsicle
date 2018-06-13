import React from 'react'
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
} from 'react-native'

export function Screen (props) {
  return (
    <KeyboardAvoidingView
      testID={props.testID}
      style={[{flex: 1}, props.style]}
      behavior="padding">
      {props.backgroundImage ? (
        <View
          style={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image resizeMode="cover" source={props.backgroundImage} />
        </View>
      ) : null}
      {Platform.OS === 'android' && Platform.Version >= 23 ? (
        <StatusBar
          hidden={!!props.statusBarHidden}
          translucent={!!props.statusBarTranslucent}
          backgroundColor={props.barColor || 'white'}
          barStyle={props.content || 'dark-content'}
        />
      ) : (
        <StatusBar
          hidden={!!props.statusBarHidden}
          translucent={!!props.statusBarTranslucent}
          barStyle={props.content || 'dark-content'}
        />
      )}
      {props.children}
    </KeyboardAvoidingView>
  )
}
