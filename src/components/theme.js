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
export const GREY_LIGHT = 'rgb(182, 182, 182)'
export const GREY_LIGHTER = 'rgb(241, 242, 247)'

// Apparently the name of a f** color
export const TEAL = 'rgb(89, 203, 232)'
export const PURPLE = 'rgb(116, 116, 193)'

export const TEAL_SEMI_TRANSPARENT = 'rgba(89, 203, 232, 0.5)'

export const BLUE = TEAL
export const BLUE_DARK = 'rgb(23, 43, 77)'
export const BLUE_DARKER = 'rgb(53, 64, 82)'
export const BLUE_DARKEST = 'rgb(14, 2, 41)'

export const BLUE_LIGHT = 'rgb(143, 255, 255)'
export const BLUE_LIGHTER = 'rgb(68, 120, 250)' // Un azul que me gustaba pero que no
export const BLUE_BRIGHT = 'rgb(0, 222, 229)' // Button Explore FoundDevices
export const FACEBOOK_BUTTON = 'rgb(44, 68, 144)'

export const GREEN = 'rgb(126, 221, 211)'
export const GREEN_DARK = 'rgb(76,175,80)'
export const ORANGE = 'rgb(255, 170, 99)'
export const PINK = 'rgb(255, 63, 213)'

export const PURPLE_DARK = 'rgb(124, 63, 255)'
export const RED = 'rgb(255, 114, 118)'
export const YELLOW = 'rgb(251, 216, 114)'
export const YELLOW_DARK = 'rgb(232, 211, 124)'

export const PARAGRAPH_FONT = Platform.select({
  web: 'Open Sans',
  ios: 'OpenSans-Regular',
  android: 'OpenSans'
})
export const BOLD_FONT = Platform.select({
  web: 'Open Sans',
  ios: 'OpenSans-Bold',
  android: 'OpenSans'
})
export const REGULAR_FONT = Platform.select({
  web: 'Open Sans',
  ios: 'OpenSans-Regular',
  android: 'OpenSans'
})
export const SEMI_BOLD_FONT = Platform.select({
  web: 'Open Sans',
  ios: 'OpenSans-SemiBold',
  android: 'OpenSans'
})

export const BORDER_RADIUS = 8

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
