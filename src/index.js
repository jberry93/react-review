import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { Deck } from './components/Deck'
import './index.css'

class FlashCards extends PureComponent {
  constructor () {
    super()
    this.state = {
      card: {
        question: '',
        answer: ''
      },
      cards: [],
      isNewCard: false,
      hasError: false
    }
  }

  // Currying ftw :D
  handleChange = propName => e => {
    const { card } = this.state
    const newCard = {
      ...card,
      [propName]: e.target.value
    }
    this.setState({ card: newCard })
  }

  submitCard = e => {
    const card = this.state.card
    const cards = this.state.cards
    if (card.question && card.answer) {
      cards.push(card)
      this.setState({
        cards,
        hasError: false
      })
      this.toggleNewCard()
    } else {
      this.setState({ hasError: true })
    }
  }

  toggleNewCard = e => {
    this.setState({
      isNewCard: !this.state.isNewCard,
      card: {
        question: '',
        answer: ''
      }
    })
  }

  render () {
    return (
      <div>
        <h1>React Cards</h1>
        <button onClick={this.toggleNewCard}>Create Card</button>
        {this.state.isNewCard &&
          <div className="new-card-form">
            {this.state.hasError &&
              <p>Please give a question and answer</p>
            }
            <textarea
              placeholder="Question"
              onChange={this.handleChange('question')}
              value={this.state.card.question}
              rows="5"
            ></textarea>
            <textarea
              placeholder="Answer"
              onChange={this.handleChange('answer')}
              value={this.state.card.answer}
              rows="5"
            ></textarea>
            <button onClick={this.submitCard}>Create</button>
          </div>
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
