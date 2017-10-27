import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Card (props) {
  return (
    <div>
      <h1>This is a card</h1>
    </div>
  )
}

class Deck extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      toggleSide: true,
      counts: {
        total: this.props.cards.length,
        current: 0,
        next: 1,
        prev: 0
      }
    }
  }

  // Need to manually update state when props are updated
  componentWillReceiveProps (props) {
    this.setState({
      counts: {
        total: props.cards.length,
        current: this.state.counts.current,
        next: this.state.counts.next,
        prev: this.state.counts.prev
      }
    })
  }

  switchSides = () => {
    this.setState({
      toggleSide: !this.state.toggleSide
    })
  }

  nextCard = () => {
    const [
      updatedCurrent,
      updatedNext,
      updatedPrev
    ] = [
      this.state.counts.current < this.state.counts.total - 1 ? this.state.counts.current + 1 : this.state.counts.current,
      this.state.counts.next < this.state.counts.total ? this.state.counts.next + 1 : this.state.counts.next,
      this.state.counts.prev < this.state.counts.total - 2 ? this.state.counts.prev + 1 : this.state.counts.prev
    ]
    this.setState({
      counts: {
        total: this.props.cards.length,
        current: updatedCurrent,
        next: updatedNext,
        prev: updatedPrev
      }
    })
  }

  prevCard = () => {
    const [
      updatedCurrent,
      updatedNext,
      updatedPrev
    ] = [
      this.state.counts.current > 0 ? this.state.counts.current - 1 : 0,
      this.state.counts.next > 1 ? this.state.counts.next - 1 : 1,
      this.state.counts.prev > 0 ? this.state.counts.prev - 1 : 0
    ]
    this.setState({
      counts: {
        total: this.props.cards.length,
        current: updatedCurrent,
        next: updatedNext,
        prev: updatedPrev
      }
    })
  }

  render () {
    return (
      <div>
        {this.state.toggleSide ? (
          <h1>{this.props.cards[this.state.counts.current].question}</h1>
        ) : (
          <h1>{this.props.cards[this.state.counts.current].answer}</h1>
        )}
        <button onClick={this.switchSides}>Flip</button>
        <button onClick={this.prevCard}>Previous</button>
        <button onClick={this.nextCard}>Next</button>
      </div>
    )
  }
}

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
