import React from 'react'
import {View} from 'react-native'
import {Link, Button} from '../components/index'
import * as theme from '../components/theme'

export function Legacy () {
  return (
    <View style={{padding: 20}}>
      <Link onPress={() => alert('Link pressed')}>
        This is an unstyled Link
      </Link>
      <Link onPress={() => alert('Link pressed')} underline>
        This is an underlined Link
      </Link>
      <Link underline style={{color: theme.__PROD_TEAL__}}>
        This is an underlined Link with styles
      </Link>
      <Button>Basic Legacy button</Button>
      <Button
        tintColor={theme.__PROD_TEAL__}
        borderColor={theme.__PROD_TEAL__}
        textStyle={{color: 'white'}}>
        Press me
      </Button>
    </View>
  )
}
