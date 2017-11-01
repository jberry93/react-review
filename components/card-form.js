import React, { PureComponent } from 'react'

export class CardForm extends PureComponent {
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

  emptyNewCard = () => {
    this.setState({
      card: {
        question: '',
        answer: ''
      }
    })
  }

  setError = setting => {
    this.setState({ hasError: setting })
  }

  submitCard = () => {
    const { card } = this.state
    const { cards } = this.props
    if (card.question && card.answer) {
      cards.push(card)
      this.props.updateCards(cards)
      this.emptyNewCard()
      this.setError(false)
    } else {
      this.setError(true)
    }
  }

  render = () => (
    <div className="new-card-form">
      {this.state.hasError &&
        <p className="error-msg">Please give a question and answer</p>
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
      <style jsx>{`
        .error-msg {
          color: #F44336;
          margin-bottom: 0;
        }
        .new-card-form {
          display: flex;
          flex-direction: column;
        }
        textarea {
          border: 1px solid #d3d3d3;
          border-radius: 5px;
          font-family: 'Titillium Web', sans-serif;
          height: 5rem;
          margin: 1rem 0;
          outline-width: 0;
          padding: 1rem;
          resize: none;
          transition: 1s;
          width: auto;
        }
        textarea:focus {
          background-color: #efefef;
          border: 1px solid #29B6F6;
        }
      `}</style>
    </div>
  )
}
