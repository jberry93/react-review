import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Deck } from '../../components/deck'

describe('Deck Component', () => {
  const cards = [
    {
      question: 'Test question',
      answer: 'Test answer'
    }
  ]

  it('renders w/out crashing: Enzyme', () => {
    shallow(<Deck cards={cards}/>)
  })
  it('renders w/out crashing: Snapshot', () => {
    const component = renderer.create(<Deck cards={cards}/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
