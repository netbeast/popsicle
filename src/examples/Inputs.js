import {Ionicons as Icon} from '@expo/vector-icons'
import React from 'react'
import {View} from 'react-native'
import * as components from '../components/index'
import * as theme from '../components/theme'


export function Inputs () {
  const {
    Button, TxtInput, EmailInput, PasswordInput, Txt,
  } = components
  return (
    <View style={{backgroundColor: 'white'}}>
        <View>
            <Txt> TextInput - No backgroundColor Property</Txt>
        </View>
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 15,
                padding: 6,
                borderRadius: 25,
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TxtInput
                    style={{
                        height: 18,
                        fontSize: 16,
                        flex: 1,
                        marginLeft: 10,
                        color: 'rgb(53, 64, 82)',
                    }}
                />
            </View>
            <Button
                onPress={() => {
                    console.log('Delete text from input')
                }}
                style={{
                    flex: 0,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 0,
                    marginRight: 12,
                    padding: 6,
                    paddingLeft: 12,
                    paddingRight: 12,
                    borderRadius: 25,
                    borderWidth: 0,
                    borderColor: 'rgba(182, 182, 182,0.2)',
                    backgroundColor: '#172B4D70',
                }}>
                <Icon
style={{fontSize: 20}}
                      color="#F3F5F6"
                      name="ios-close-outline" />
            </Button>
        </View>
      <View>
        <Txt> TextInput</Txt>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 15,
          padding: 6,
          borderRadius: 25,
          backgroundColor: '#F3F5F6',
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TxtInput
            style={{
              height: 18,
              fontSize: 16,
              flex: 1,
              marginLeft: 10,
              color: 'rgb(53, 64, 82)',
            }}
          />
        </View>
        <Button
          onPress={() => {
            console.log('Delete text from input')
          }}
          style={{
            flex: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            marginRight: 12,
            padding: 6,
            paddingLeft: 12,
            paddingRight: 12,
            borderRadius: 25,
            borderWidth: 0,
            borderColor: 'rgba(182, 182, 182,0.2)',
            backgroundColor: '#172B4D70',
          }}>
            <Icon
style={{fontSize: 20}}
                  color="#F3F5F6"
                  name="ios-close-outline" />
        </Button>
      </View>
      <View>
        <Txt> PasswordInput</Txt>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 8,
          padding: 22,
          borderRadius: 25,
          backgroundColor: '#F3F5F6',
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <PasswordInput
            style={{
              flex: 1,

              fontSize: 16,
              marginLeft: 10,
            }}
          />
        </View>
      </View>
      <View>
        <Txt> EmailInput</Txt>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 15,
          padding: 6,
          borderRadius: 25,
          backgroundColor: '#F3F5F6',
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <EmailInput
            style={{
              height: 18,
              fontSize: 16,
              flex: 1,
              marginLeft: 10,
              color: 'rgb(54, 64, 82)',
            }}
          />
        </View>
        <Button
            onPress={() => {
                console.log('Delete text from input')
            }}
            style={{
                flex: 0,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                marginRight: 12,
                padding: 6,
                paddingLeft: 12,
                paddingRight: 12,
                borderRadius: 25,
                borderWidth: 0,
                borderColor: 'rgba(182, 182, 182,0.2)',
                backgroundColor: '#172B4D70',
            }}>
            <Icon
                style={{fontSize: 20}}
                color="#F3F5F6"
                name="ios-close-outline" />
        </Button>
      </View>
    </View>
  )
}
