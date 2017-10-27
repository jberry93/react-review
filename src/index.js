import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Deck extends Component {
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

  // Need to update state when props are updated
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
      currentCount,
      nextCount,
      prevCount
    ] = [
      this.state.counts.current,
      this.state.counts.next,
      this.state.counts.prev
    ]
    this.setState({
      counts: {
        total: this.props.cards.length,
        current: currentCount < this.state.counts.total - 1 ? currentCount + 1 : currentCount,
        next: nextCount < this.state.counts.total ? nextCount + 1 : nextCount,
        prev: prevCount < this.state.counts.total - 2 ? prevCount + 1 : prevCount
      }
    })
  }

  prevCard = () => {
    const [
      currentCount,
      nextCount,
      prevCount
    ] = [
      this.state.counts.current,
      this.state.counts.next,
      this.state.counts.prev
    ]
    this.setState({
      counts: {
        total: this.props.cards.length,
        current: currentCount > 0 ? currentCount - 1 : 0,
        next: nextCount > 1 ? nextCount - 1 : 1,
        prev: prevCount > 0 ? prevCount - 1 : 0
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

class FlashCards extends Component {
  constructor () {
    super()
    this.state = {
      card: {
        question: '',
        answer: ''
      },
      cards: [],
      isNewCard: false
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
    cards.push(card)
    this.setState({ cards })
    this.toggleNewCard()
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
    const toggleNewCard = this.state.isNewCard

    const newCardStyles = {
      display: 'flex',
      flexDirection: 'column'
    }

    return (
      <div>
        <h1>React Cards</h1>
        <button onClick={this.toggleNewCard}>Create Card</button>
        {toggleNewCard &&
          <div style={newCardStyles}>
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
