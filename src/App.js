import React, { PureComponent } from 'react'
import { Deck } from './components/Deck/Deck'
import { Form } from './components/Form/Form'
import './index.css'

export class FlashCards extends PureComponent {
  constructor () {
    super()
    this.state = {
      cards: [],
      isNewCard: false
    }
  }

  updateCards = cards => {
    this.setState({ cards })
    this.toggleNewCard()
  }

  toggleNewCard = e => {
    this.setState({ isNewCard: !this.state.isNewCard })
  }

  render () {
    return (
      <div>
        <h1>React Cards</h1>
        <button onClick={this.toggleNewCard}>Create Card</button>
        {this.state.isNewCard &&
          <Form
            cards={this.state.cards}
            updateCards={this.updateCards}
          />
        }
        {this.state.cards.length > 0 ? (
          <Deck cards={this.state.cards}/>
        ) : (
          <h1>Sorry, there are no cards to show</h1>
        )}
      </div>
    )
  }
}
