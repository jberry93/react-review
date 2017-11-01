import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import App from '../pages/index'

describe('index', () => {
  it('renders w/out crashing: Enzyme', () => {
    shallow(<App/>)
  })
  it('renders w/out crashing: Snapshot', () => {
    const component = renderer.create(<App/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
