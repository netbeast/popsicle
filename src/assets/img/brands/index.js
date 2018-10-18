/**
 * @providesModule %brandImages
 */

import {i18n} from '%i18n'

export const PhilipsHue = {
  cloud: true,
  name: 'Philips Hue',
  logoBlack: require('./philips-hue-black.png'),
  logoWhite: require('./philips-hue-white.png'),
  devices: [
    {
      name: 'Color Light Bulb',
      logo: require('../real-devices/philips-hue-bulb.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01KJYSOHM/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01KJYSOHM&linkId=e4fa0a53d5127e78828267c82acb6dbe',
    },
    {
      name: 'White Ambience Light Bulb',
      logo: require('../real-devices/philips-hue-bulb.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01ESW34RQ/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01ESW34RQ&linkId=af3dc1b4e6e0834c206b3ed3b3b6e0cf',
    },
    {
      name: 'Hue Go',
      logo: require('../real-devices/philips-hue-go.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00UVHAC1O/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00UVHAC1O&linkId=0b49c07ca53963ce674a540d59057696',
    },
    {
      name: 'Smart Bridge',
      logo: require('../real-devices/philips-hue-bridge.jpg'),
      link:
        'https://www.amazon.com/gp/product/B014H2P42K/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B014H2P42K&linkId=92070d43623ea715251bed73ae56538f',
    },
    {
      name: 'Color Light Stripe',
      logo: require('../real-devices/yeelight-stripe.jpg'),
      link:
        'https://www.amazon.com/gp/product/B014H2OXYU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B014H2OXYU&linkId=d0fe26aa00be8c8bbc1375e7072bfac3',
    },
    {
      name: 'Bloom Dimable',
      logo: require('../real-devices/philips-hue-bloom.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00I811PG6/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00I811PG6&linkId=1700eda3f180ac93e6c4caeacca353e8',
    },
    {
      name: 'Hue Beyond',
      logo: require('../real-devices/philips-hue-beyond.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00OZLWRGU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00OZLWRGU&linkId=01dc5262c3282daf3df75fb30633a57b',
    },
  ],
  background: require('./philips-hue-background.jpeg'),
  info:
    'Philips Hue is your personal wireless lighting system that lets you easily control your light and create the right ambiance for every moment. Bring your smart home to life with the most connected light in the world.',
}

export const Nest = {
  cloud: true,
  name: 'Nest',
  logoBlack: require('./nest-black.png'),
  logoWhite: require('./nest-white.png'),
  devices: [
    {
      name: 'Thermostat 3rd Generation ',
      logo: require('../real-devices/nest-thermostat.jpg'),
      link:
        'https://www.amazon.com/gp/product/B0131RG6VK/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B0131RG6VK&linkCode=as2&tag=yeti0b-20&linkId=bd8884dc0fc788edd554dc2093ea34b5',
    },
  ],
  background: require('./nest-background.jpeg'),
  info:
    'We love home. It’s the best place in the world. But not everything inside our homes is lovable. There are things that beep at us; fail without warning; keep us in the dark. There are things we’ve learned to ignore. We think they should do more. Nest is focused on making simple, human, delightful things. That’s how we’re creating the thoughtful home: A home that takes care of the people inside it and the world around it.',
}

export const Nuki = {
  tag: 'NEW',
  name: 'Nuki',
  logoBlack: require('./nuki-black.png'),
  logoWhite: require('./nuki-white.png'),
  devices: [
    {
      name: 'Nuki Smart Lock',
      logo: require('../real-devices/nuki-smart-lock.jpg'),
      link:
        'https://www.amazon.com/gp/product/B06X6HPGC3/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B06X6HPGC3&linkId=4d0a635854b7c26ee42668e20c398353',
    },
    {
      name: 'Nuki bridge',
      logo: require('../real-devices/nuki-bridge.jpg'),
      link:
        'https://www.amazon.com/gp/product/B06WD4TDY6/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B06WD4TDY6&linkId=bf08721c5d4bb940db35f6e0c05d820e',
    },
  ],
  background: require('./nuki-background.jpg'),
  info:
    'A small extension for your door lock, a great relief in everyday life. With Nuki and your smartphone you can easily benefit from the countless advantages of a smart door lock!',
}

export const Sonos = {
  name: 'Sonos',
  logoBlack: require('./sonos-black.png'),
  logoWhite: require('./sonos-white.png'),
  devices: [
    {
      name: 'One',
      logo: require('../real-devices/sonos-one.jpg'),
      link:
        'https://www.amazon.com/gp/product/B074XLMYY5/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B074XLMYY5&linkCode=as2&tag=yeti0b-20&linkId=9d2294a4ef8d6bc5d7a67513fe13d756',
    },
    {
      name: 'Play:1',
      logo: require('../real-devices/sonos-play1.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00EWCUK1Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00EWCUK1Q&linkCode=as2&tag=yeti0b-20&linkId=744a05ad80d2651d1b9b90bba3fa0983',
    },
    {
      name: 'Play:3',
      logo: require('../real-devices/sonos-play3.jpg'),
      link:
        'https://www.amazon.com/gp/product/B005441AJC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B005441AJC&linkId=38e1a7a8f4ddb196f3603907a192c275',
    },
    {
      name: 'Play:5',
      logo: require('../real-devices/sonos-play5.jpg'),
      link:
        'https://www.amazon.com/gp/product/B014LFINIA/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B014LFINIA&linkId=550385ec943ee4832169ddc7213c90ab',
    },
  ],
  background: require('./sonos-background.jpeg'),
  info:
    'Sonos is the wireless Home Sound System that sets up quickly and makes listening easy. Use the free app to connect directly to your home WiFi network and send different songs to different rooms at the same time. Or enjoy your favourite tune in perfect sync all through your house. Sonos plays all the most popular music services, internet radio, audiobooks, podcasts, music downloads—you can even set it up to play your vinyl collection. With Sonos, you can enjoy whatever you love to listen to, in any and every room in your home.',
}

export const Wemo = {
  name: 'Wemo',
  logoBlack: require('./wemo-black.png'),
  logoWhite: require('./wemo-white.png'),
  devices: [
    {
      name: i18n.lights,
      logo: require('../real-devices/wemo-bulb.jpg'),
      link:
        'https://www.amazon.com/WeMo-Enabled-Required-Discontinued-Manufacturer/dp/B00MMLTUII/ref=sr_1_1?ie=UTF8&qid=1510831588&sr=8-1&keywords=wemo+bulb&dpID=31MzrLAfi5L&preST=_SY300_QL70_&dpSrc=srch', // No referral
    },
    {
      name: 'Switch',
      logo: require('../real-devices/wemo-switch.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00BB2MMNE/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00BB2MMNE&linkId=22421510099670453c348087bdd0b732',
    },
    {
      name: 'Insight',
      logo: require('../real-devices/wemo-insight.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01DBXNYCS/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01DBXNYCS&linkId=f1e8e97fb674d48e80bb3630d5459570',
    },
    {
      name: 'Mini smart plug',
      logo: require('../real-devices/wemo-mini-switch.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01NBI0A6R/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01NBI0A6R&linkId=65e1bafdba0ed2503497333ae7265250',
    },
    {
      name: 'Light Switch',
      logo: require('../real-devices/wemo-light-switch.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00DGEGJ02/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00DGEGJ02&linkId=f230b5848c6defe9f38e1d28133f9ed7',
    },
  ],
  background: require('./wemo-background.jpeg'),
  info:
    'Wemo is the simple way to a smarter home. Control your lights appliances, or a whole room from your couch, coffee shop, or the Caribbean.',
}

// decomment when keys are available
export const Netatmo = {
  cloud: true,
  name: 'Netatmo',
  logoBlack: require('./netatmo-black.png'),
  logoWhite: require('./netatmo-white.png'),
  devices: [
    {
      name: 'Welcome',
      logo: require('../real-devices/netatmo-welcome.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00X5X1XPU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00X5X1XPU&linkId=05b8db161ee5472b71271a666a6fcc6f',
    },
    {
      name: 'Outdoor',
      logo: require('../real-devices/netatmo-outdoor.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01L25GOGA/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01L25GOGA&linkId=8c4b377fc5edead5d864aadd3fd3465a',
    },
    {
      name: 'Thermostat',
      logo: require('../real-devices/netatmo-thermostat.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00PHE0YSC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00PHE0YSC&linkId=1b6eddda114e46d7545352ee206ba01d',
    },
  ],
  background: require('./netatmo-background.jpeg'),
  info:
    "Use your Netatmo Thermostat to change your home's temperature, from your bed or from the other side of the world. Schedule your heating for your return from a holiday",
}

export const Lifx = {
  cloud: true,
  name: 'LIFX',
  logoBlack: require('./lifx-black.png'),
  logoWhite: require('./lifx-white.png'),
  devices: [
    {
      name: 'Color 1000 A19',
      logo: require('../real-devices/lifx-a19.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01KY02MS8/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01KY02MS8&linkId=f3b69707116bca770750e1848b43e292',
    },
    {
      name: 'White 800 A19',
      logo: require('../real-devices/lifx-a19.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00XUW0ZFU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00XUW0ZFU&linkId=fce4df8105ef10432e693240ed493b92',
    },
    {
      name: 'Color 1000 BR30',
      logo: require('../real-devices/lifx-br30.jpg'),
      link:
        'https://www.amazon.com/gp/product/B0161IJ55U/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0161IJ55U&linkId=9a1bf38d692992a43de64a8cc673eb8d',
    },
    {
      name: 'White 900 BR30',
      logo: require('../real-devices/lifx-br30.jpg'),
      link:
        'https://www.amazon.com/gp/product/B0161IJ5S2/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0161IJ5S2&linkId=640946fdd6b003b77e7c444147d413dd',
    },
    {
      name: 'LIFX mini A19',
      logo: require('../real-devices/lifx-mini.jpg'),
      link:
        'https://www.amazon.com/gp/product/B072Y5QNKJ/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B072Y5QNKJ&linkId=3406254902682466b20ff3888910208a',
    },
    {
      name: 'LIFX Z - Light Stripe',
      logo: require('../real-devices/yeelight-stripe.jpg'),
      link:
        'https://www.amazon.com/gp/product/B073168F4Y/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073168F4Y&linkId=031358f0c2bbe45ba38bb93b48cd49c5',
    },
  ],
  background: require('./lifx-background.jpeg'),
  info:
    'Express yourself with the vivid colour of LIFX and flip back to the perfect shade of white in an instant. Using your home wifi and smart phone, control your lighting to suit the mood or automate your home with schedules that suit your lifestyle.',
}

export const Ecobee = {
  cloud: true,
  name: 'Ecobee',
  logoBlack: require('./ecobee-black.png'),
  logoWhite: require('./ecobee-white.png'),
  devices: [
    {
      name: 'Ecobee4',
      logo: require('../real-devices/ecobee4.jpg'),
      link:
        'https://www.amazon.com/gp/product/B06W2LQY6L/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B06W2LQY6L&linkId=cd43b8a3b57555d5e84a3324c792b504',
    },
    {
      name: 'Ecobee3 lite',
      logo: require('../real-devices/ecobee3-lite.jpg'),
      link:
        'https://www.amazon.com/gp/product/B06W56TBLN/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B06W56TBLN&linkId=229709c0a3d7ab2de3a56226d51c5404',
    },
    {
      name: 'Ecobee3',
      logo: require('../real-devices/ecobee3.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00ZIRV39M/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00ZIRV39M&linkId=1731b404194b3890ac546cd4dcfdb35e',
    },
  ],
  background: require('./ecobee-background.jpeg'),
  info:
    'With a room sensor and built-in Amazon Alexa Voice Service, ecobee is the smart wi-fi thermostat that can listen to your voice commands and respond.',
}

export const Yeelight = {
  cloud: true,
  name: 'Yeelight',
  logoBlack: require('./yeelight-black.png'),
  logoWhite: require('./yeelight-white.png'),
  devices: [
    {
      name: 'Color Rgb bulb',
      logo: require('../real-devices/yeelight-bulb.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01LRTWQJ0/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01LRTWQJ0&linkId=399ddefd48ae1bfe3d3801b915da28ea',
    },
    {
      name: 'Dimable Light',
      logo: require('../real-devices/yeelight-bulb-white.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01LRTWQNG/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01LRTWQNG&linkId=15d119fabc3ec5e8e876e7848d48aeae',
    },
    {
      name: 'Color Light Stripe',
      logo: require('../real-devices/yeelight-stripe.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01LRT0B56/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01LRT0B56&linkId=e3a84f3f4ff8cc5a044f8e6fe6daad7e',
    },
    {
      name: 'Bedside Color Lamp',
      logo: require('../real-devices/yeelight-bedside-lamp.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01J9H0V30/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01J9H0V30&linkId=a8a85e079fa77d67bb54466538fd937d',
    },
  ],
  background: require('./yeelight-background.jpeg'),
  info:
    'Play with light and choose from 16 million colors to match the light to your mood. Use a favorite photo and relive that special moment with splashes of light. Save your favorite light settings and recall them whenever you want with the tap of a finger.',
}

export const Tplink = {
  name: 'TP-Link',
  logoBlack: require('./tplink-black.png'),
  logoWhite: require('./tplink-white.png'),
  devices: [
    {
      name: 'Smart Plug HS100',
      logo: require('../real-devices/tplink-hs100.jpg'),
      link:
        'https://www.amazon.com/gp/product/B0178IC734/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0178IC734&linkId=e4d32ef5f41426740e7ea9c608a04f69',
    },
    {
      name: 'Smart Plug HS105',
      logo: require('../real-devices/tplink-hs105.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01K1JVZOE/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01K1JVZOE&linkId=3283a3ebedfcb2b97659d847b604fe94',
    },
    {
      name: 'Smart Plug HS110',
      logo: require('../real-devices/tplink-hs100.jpg'),
      link:
        'https://www.amazon.com/gp/product/B0178IC5ZY/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0178IC5ZY&linkId=9a84cc048b6cbee7f391b6512d466103',
    },
    {
      name: 'Light Switch HS200',
      logo: require('../real-devices/tplink-hs200.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01EZV35QU/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01EZV35QU&linkId=241f61e1bfe3baf8c2363b8a27fd1dd5',
    },
    {
      name: 'Dimable Light',
      logo: require('../real-devices/tplink-bulb.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01HXM8XF6/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01HXM8XF6&linkId=25bf5cec209555fe68f557b1df48c523',
    },
    {
      name: 'Dimable Light (11W)',
      logo: require('../real-devices/tplink-bulb-11w.jpg'),
      link:
        'https://www.amazon.com/gp/product/B075KW9GPB/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B075KW9GPB&linkId=a3a40ac43867142468e015d854c9923f',
    },
    {
      name: 'Dimable Light (60W)',
      logo: require('../real-devices/tplink-bulb-60w.jpg'),
      link:
        'https://www.amazon.com/gp/product/B075GZZ4SQ/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B075GZZ4SQ&linkId=0ff2cfac9a97b0808a2fd077417bfd47',
    },
    {
      name: 'Color Light',
      logo: require('../real-devices/tplink-bulb-color.jpg'),
      link:
        'https://www.amazon.com/gp/product/B075KXSM3B/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B075KXSM3B&linkId=00f2448e451a669a011b7c7478de5c17',
    },
  ],
  background: require('./tplink-background.jpeg'),
  info:
    'From the time you wake up to the time you hit the hay‚ smart home products make your day easier and more comfortable.',
}

export const SmartThings = {
  cloud: true,
  hide: !global.__SMARTTHINGS_FEATURE_ON__,
  tag: 'PREVIEW',
  name: 'SmartThings',
  logoBlack: require('./smartthings-black.png'),
  logoWhite: require('./smartthings-white.png'),
  devices: [
    {
      name: 'Smart Things Hub',
      logo: require('../real-devices/smart-things-hub.jpg'),
      link:
        'https://www.amazon.com/gp/product/B010NZV0GE/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B010NZV0GE&linkId=29423288c602e58d7cfaddb4e8eba13d',
    },
    {
      name: 'Multipurpose Sensors',
      logo: require('../real-devices/smart-things-multipurpose.jpg'),
      link:
        'https://www.amazon.com/gp/product/B0118RQW3W/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0118RQW3W&linkId=4f194ce51bafd1544de12ab1212eba69',
    },
    {
      name: 'Motion Sensors',
      logo: require('../real-devices/smart-things-motion.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01IE35PCC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01IE35PCC&linkId=5b4ebb5e7550418a9da6eebb26c4f8c1',
    },
    {
      name: 'Water Leak Sensors',
      logo: require('../real-devices/smart-things-waterleak.jpg'),
      link:
        'https://www.amazon.com/gp/product/B00MOIYIN6/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00MOIYIN6&linkId=1c88834102eade30c83eb61716190fe4',
    },
    {
      name: 'Outlet White',
      logo: require('../real-devices/smart-things-outlet.jpg'),
      link:
        'https://www.amazon.com/gp/product/B073GV2PQY/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073GV2PQY&linkId=69454b3b8a3c63310899ee71bb639a3d',
    },
  ],
  background: require('./smartthings-background.jpg'),
  info:
    'SmartThings is the easy way to turn your home into a smart home. Monitor, control and secure your home from anywhere',
}

export const Honeywell = {
  tag: 'PREVIEW',
  hide: !global.__HONEYWELL_FEATURE_ON__,
  cloud: true,
  name: 'Honeywell',
  logoBlack: require('./honeywell-black.png'),
  logoWhite: require('./honeywell-white.png'),
  devices: [
    {
      name: 'Water Leak Detector',
      logo: require('../real-devices/honewell-water-leak-detector.jpg'),
      link:
        'https://www.amazon.com/gp/product/B01HBZQYYC/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&tag=yeti0b-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01HBZQYYC&linkId=9f0639d8ec3db19b85465c748186734d',
    },
  ],
  background: require('./honeywell-background.jpeg'),
  info:
    'Control your Honeywell devices using Yeti. Set the temperature of your thermostat when you leave home or when you wake up in the morning and receive notifications when you leak detector alarm goes off',
}

export const Sonoff = {
  tag: 'BETA',
  name: 'Sonoff',
  logoBlack: require('./sonoff-black.png'),
  logoWhite: require('./sonoff-white.png'),
  devices: [
    {
      name: 'Sonoff Basic',
      logo: require('../real-devices/sonoff-basic.jpg'),
      link:
        'https://www.amazon.com/gp/product/B074N22WFT/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=yeti0b-20&creative=9325&linkCode=as2&creativeASIN=B074N22WFT&linkId=cc5fbdfa5051997d1ecc6247f19a7bad',
    },
  ],
  background: require('./honeywell-background.jpeg'),
  info:
    'Sonoff Basic is a cost effective WiFi wireless smart switch that lets you automate or remotely control lighting and appliances',
}

export const Bigfoot = {
  name: 'Bigfoot',
  logoBlack: require('./yeti-black.png'),
}
