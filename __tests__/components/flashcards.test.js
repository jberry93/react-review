import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Flashcards } from '../../components/flashcards'

describe('Flashcards Component', () => {
  it('renders w/out crashing: Enzyme', () => {
    shallow(<Flashcards/>)
  })
  it('renders w/out crashing: Snapshot', () => {
    const component = renderer.create(<Flashcards/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
