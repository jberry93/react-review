import React from 'react'
import { shallow } from 'enzyme'
import { FlashCards } from './App'

/**
 *  May emit requestAnimationFrame error.
 *  Refer to: https://github.com/facebook/jest/issues/4545
 */

describe('App Component', () => {
  it('renders w/out crashing', () => {
    shallow(<FlashCards/>)
  })
})
