import React from 'react'
import {View, StyleSheet} from 'react-native'

import {Img, TextTiny} from '../components'
import * as theme from '../components/theme'
import * as images from '../assets/img'

export function ImagesShowcase () {
  return (
    <View style={{padding: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      {Object.entries(images).map(([key, value]) => (
        <View style={styles.item} key={key}>
          <Img
            style={styles.img}
            source={value} />
          <TextTiny style={{flex: 1, textAlign: 'center'}}>
            {key}
          </TextTiny>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  item: {
    padding: 10,
  },
})
