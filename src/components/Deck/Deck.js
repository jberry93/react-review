import React, { PureComponent } from 'react'
import './Deck.css'

export class Deck extends PureComponent {
  constructor (props) {
    super(props)
    let totalCount = 0
    if (this.props.cards) {
      totalCount = this.props.cards.length
    }
    this.state = {
      toggleSide: true,
      counts: {
        total: totalCount,
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
    this.setState({
      counts: {
        total: this.props.cards.length,
        current: this.state.counts.current < this.state.counts.total - 1 ? this.state.counts.current + 1 : this.state.counts.current,
        next: this.state.counts.next < this.state.counts.total ? this.state.counts.next + 1 : this.state.counts.next,
        prev: this.state.counts.prev < this.state.counts.total - 2 ? this.state.counts.prev + 1 : this.state.counts.prev
      }
    })
  }

  prevCard = () => {
    this.setState({
      counts: {
        total: this.props.cards.length,
        current: this.state.counts.current > 0 ? this.state.counts.current - 1 : 0,
        next: this.state.counts.next > 1 ? this.state.counts.next - 1 : 1,
        prev: this.state.counts.prev > 0 ? this.state.counts.prev - 1 : 0
      }
    })
  }

  render () {
    return (
      <div>
        <div className="flashcard">
          {this.state.toggleSide ? (
            <strong>{this.props.cards[this.state.counts.current].question}</strong>
          ) : (
            <strong>{this.props.cards[this.state.counts.current].answer}</strong>
          )}
        </div>
        <div className="action-btns">
          <button onClick={this.switchSides}>Flip</button>
          <button onClick={this.prevCard}>Previous</button>
          <button onClick={this.nextCard}>Next</button>
        </div>
      </div>
    )
  }
}
