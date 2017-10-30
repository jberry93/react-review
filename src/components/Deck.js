import React, { PureComponent } from 'react'

export class Deck extends PureComponent {
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
