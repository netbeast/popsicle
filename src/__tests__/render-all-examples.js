import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-snapshots-svg'

import * as examples from '../examples'
import App from '../App'

describe('Render all examples', () => {
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

describe('Render Playground components', () => {
  it("should render App's entrypoint", () => {
    const snapshot = renderer.create(<App />).toJSON()
    expect(snapshot).toMatchSVGSnapshot(320, 480)
  })
})
