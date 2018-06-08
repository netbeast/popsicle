import * as React from "react"
import { Text } from "react-native"
import * as renderer from "react-test-renderer"
import "jest-snapshots-svg"

import * as examples from '../examples'

describe("Render All Examples", () => {
  Object.keys(examples)
    .filter(key => typeof examples[key] === 'function')
    .forEach(key => {
      it(`should render ${key} example`, () => {
        const Test = examples[key]
        const snapshot = renderer.create(<Test />).toJSON()
        expect(snapshot).toMatchSVGSnapshot(320, 480)
      })
    })
})
