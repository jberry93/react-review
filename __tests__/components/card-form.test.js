import React from 'react'
import { shallow } from 'enzyme'
import { CardForm } from '../../components/card-form'

describe('CardForm Component', () => {
  it('renders w/out crashing', () => {
    shallow(<CardForm/>)
  })
})
