import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/**
 *  Will emit requestAnimationFrame error.
 *  Refer to: https://github.com/facebook/jest/issues/4545
 */

Enzyme.configure({ adapter: new Adapter() })

describe('Testing', () => {
  it('should equal 2', () => {
    const sum = (a, b) => {
      return a + b
    }
    expect(sum(1, 1)).toBe(2)
  })
})
