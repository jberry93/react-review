import React from 'react'
import { shallow } from 'enzyme'
import App from '../pages/index'

describe('index', () => {
  it('renders w/out crashing', () => {
    shallow(<App/>)
  })
})
