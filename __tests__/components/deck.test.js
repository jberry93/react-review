import React from 'react'
import { shallow } from 'enzyme'
import { Deck } from '../../components/deck'

describe('Deck Component', () => {
  const cards = [
    {
      question: 'Test question',
      answer: 'Test answer'
    }
  ]

  it('renders w/out crashing', () => {
    shallow(<Deck cards={cards}/>)
  })
})
