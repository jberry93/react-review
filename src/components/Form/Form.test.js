import React from 'react'
import { shallow } from 'enzyme'
import { Form } from './Form'

describe('Form Component', () => {
  it('renders w/out crashing', () => {
    shallow(<Form/>)
  })
})
