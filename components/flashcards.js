import React, { PureComponent } from 'react'
import { Deck } from './deck'
import { CardForm } from './card-form'

export class Flashcards extends PureComponent {
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

  toggleNewCard = () => {
    this.setState({ isNewCard: !this.state.isNewCard })
  }

  render = () => (
    <div>
      <h1>React Review</h1>
      <button onClick={this.toggleNewCard}>Create Card</button>
      {this.state.isNewCard &&
        <CardForm
          cards={this.state.cards}
          updateCards={this.updateCards}
        />
      }
      {this.state.cards.length > 0 ? (
        <Deck cards={this.state.cards}/>
      ) : (
        <h1>Sorry there are no cards to show</h1>
      )}
    </div>
  )
}
