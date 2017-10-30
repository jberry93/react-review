import React from 'react'
import { shallow } from 'enzyme'
import { Deck } from './Deck'

describe('Deck Component', () => {
  it('renders w/out crashing', () => {
    const cards = [
      {
        question: 'q1',
        answer: 'a1'
      }
    ]
    shallow(<Deck cards={cards}/>)
  })
})
