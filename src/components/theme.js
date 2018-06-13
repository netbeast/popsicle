import {Dimensions, Platform, StyleSheet} from 'react-native'

const {width, height} = Dimensions.get('window')

export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height

export const ASPECT_RATIO =
  SCREEN_HEIGHT > SCREEN_WIDTH
    ? SCREEN_HEIGHT / SCREEN_WIDTH // portrait
    : SCREEN_WIDTH / SCREEN_HEIGHT // landscape
export const NAVBAR_HEIGHT = Platform.OS === 'ios' ? 54 : 64
export const COLUMN_SIZE = 360

// Color palette by color name
export const GREY = 'rgb(46, 48, 58)'
export const GREY_SEMI_TRANSPARENT = 'rgba(46, 48, 58, 0.4)'
export const GREY_DARK = 'rgb(34, 34, 34)'
export const GREY_SEMI_LIGHT = 'rgb(115, 115, 115)'
export const GREY_LIGHT = 'rgb(194, 195, 200)'
export const GREY_LIGHTER = 'rgb(241, 242, 247)'

export const TEAL = __DEV__ ? 'rgb(140, 61, 255)' : 'rgb(1, 160, 188)' // apparently the name of a f** color
export const TEAL_SEMI_TRANSPARENT = __DEV__
  ? 'rgba(140, 61, 255, 0.5)'
  : 'rgba(1, 160, 188, 0.5)'

export const BLUE = TEAL
export const BLUE_DARK = 'rgb(68, 120, 250)'
export const BLUE_DARKER = 'rgb(28, 35, 105)'
export const BLUE_DARKER2 = 'rgb(48, 55, 125)'

export const BLUE_DARKEST = 'rgb(14, 2, 41)'
export const BLUE_LIGHT = 'rgb(143, 255, 255)'
export const BLUE_LIGHTER = 'rgb(68, 120, 250)' // Un azul que me gustaba pero que no
export const BLUE_BRIGHT = 'rgb(0, 222, 229)' // Button Explore FoundDevices
export const FACEBOOK_BUTTON = 'rgb(44, 68, 144)'

export const GREEN = 'rgb(143, 255, 160)'
export const GREEN_DARK = 'rgb(76,175,80)'
export const ORANGE = 'rgb(255, 166, 102)'
export const PINK = 'rgb(255, 63, 213)'
export const PURPLE = __DEV__ ? 'rgb(1, 160, 188)' : 'rgb(140, 61, 255)'
export const PURPLE_DARK = 'rgb(124, 63, 255)'
export const RED = 'rgb(194, 61, 85)'
export const YELLOW = 'rgb(232, 255, 124)'
export const YELLOW_DARK = 'rgb(232, 211, 124)'

export const PARAGRAPH_FONT =
  Platform.OS === 'ios' ? 'Proxima Nova Alt' : 'proxima_nova_alt_regular'
export const BOLD_FONT =
  Platform.OS === 'android' ? 'proxima_nova_bold' : 'Open Sans Bold'
export const REGULAR_FONT =
  Platform.OS === 'android' ? 'proxima_nova_alt_regular' : 'Open Sans'
export const SEMI_BOLD_FONT =
  Platform.OS === 'android' ? 'proxima_nova_alt_regular' : 'Open Sans Semibold'

export const BORDER_RADIUS = 10

export const BRIGHT_OVERLAY = {
  backgroundColor: 'white',
  opacity: 0.5,
  position: 'absolute',
  width: Math.max(height, width),
  height: Math.max(height, width),
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
}

export const DARK_OVERLAY = {
  ...BRIGHT_OVERLAY,
  backgroundColor: GREY,
}

export const SHADOW_BOX = {
  elevation: 3,
  shadowColor: GREY,
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.8,
  shadowRadius: 2,
}

export const SHADOW_BOX_LONG = {
  ...SHADOW_BOX,
  elevation: 8,
  shadowRadius: 4,
}

export const SHADOW_CARD = {
  elevation: 2,
  shadowColor: GREY,
  shadowOffset: {width: 0, height: 3},
  shadowRadius: 3,
  shadowOpacity: 0.2,
}

export const simpleNavbar = {
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
}

export const WIDGET_SIZE = 70
// takes padding in account
export const WIDGET_ROOM =
  SCREEN_WIDTH > 350 ? 110 : (SCREEN_WIDTH / 3 - 10) | 0

export const widget = StyleSheet.create({
  icon: {
    height: WIDGET_SIZE,
    width: WIDGET_SIZE,
    borderRadius: WIDGET_SIZE / 2,
  },
  cover: {
    height: WIDGET_SIZE - 7.5,
    width: WIDGET_SIZE - 7.5,
    borderRadius: WIDGET_SIZE / 2,
  },
  ripple: {
    ...SHADOW_BOX,
    shadowColor: 'rgba(0,0,0,.5)',
    height: WIDGET_SIZE,
    width: WIDGET_SIZE,
    borderRadius: WIDGET_SIZE / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 3,
  },
})
