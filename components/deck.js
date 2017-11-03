import React, { PureComponent } from 'react'

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
    this.setState({ toggleSide: !this.state.toggleSide })
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

  render = () => (
    <div className="deck-container">
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
      <style jsx>{`
        .action-btns {
          align-items: center;
          display: flex;
          justify-content: space-evenly;
        }
        .action-btns > button {
          margin: 0 3rem;
          width: 6rem;
        }
        .deck-container {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .flashcard {
          align-items: center;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2);
          display: flex;
          flex-wrap: wrap;
          height: 12rem;
          justify-content: center;
          margin: 1rem 0.5rem;
          overflow: auto;
          padding: 1rem;
          width: 36rem;
        }
        @media screen and (max-width: 992px) {
          .deck-container,
          .flashcard,
          .action-btns {
            width: 100%;
          }
          .action-btns > button {
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  )
}
