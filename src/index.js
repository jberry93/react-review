import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { Deck } from './components/Deck'
import { Form } from './components/Form'
import './index.css'

class FlashCards extends PureComponent {
  constructor () {
    super()
    this.state = {
      cards: [],
      isNewCard: false,
      hasError: false
    }
  }

  updateCards = cards => {
    this.setState({ cards })
    this.toggleNewCard()
  }

  setError = setting => {
    this.setState({ hasError: setting })
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
            setError={this.setError}
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

ReactDOM.render(<FlashCards/>, document.querySelector('#root'))
