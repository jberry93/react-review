import React, { PureComponent } from 'react'

export class Form extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      card: {
        question: '',
        answer: ''
      },
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

  emptyNewCard = e => {
    this.setState({
      card: {
        question: '',
        answer: ''
      }
    })
  }

  setError = setting => {
    this.setState({
      hasError: setting
    })
  }

  submitCard = e => {
    const card = this.state.card
    const cards = this.props.cards
    if (card.question && card.answer) {
      cards.push(card)
      this.props.updateCards(cards)
      this.emptyNewCard()
      this.setError(false)
    } else {
      this.setError(true)
    }
  }

  render () {
    return (
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
    )
  }
}
