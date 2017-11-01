import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { CardForm } from '../../components/card-form'

describe('CardForm Component', () => {
  it('renders w/out crashing: Enzyme', () => {
    shallow(<CardForm/>)
  })
  it ('renders w/out crashing: Snapshot', () => {
    const component = renderer.create(<CardForm/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
