import React, { PureComponent } from "react";

export class CardForm extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      card: {
        question: "",
        answer: ""
      },
      hasError: false
    }
  }

  // Currying ftw :D
  handleChange = (propName) => (e) => {
    const { card } = this.state;
    const newCard = {
      ...card,
      [propName]: e.target.value
    };
    this.setState({ card: newCard });
  }

  emptyNewCard = () => {
    this.setState({
      card: {
        question: "",
        answer: ""
      }
    });
  }

  setError = (setting) => {
    this.setState({ hasError: setting });
  }

  submitCard = () => {
    const { card } = this.state;
    const { cards } = this.props;
    if (card.question && card.answer) {
      cards.push(card);
      this.props.updateCards(cards);
      this.emptyNewCard();
      this.setError(false);
    } else {
      this.setError(true);
    }
  }

  render = () => (
    <div className="new-card-form">
      {this.state.hasError &&
        <p className="error-msg">Please give a question and answer</p>
      }
      <div className="form-container">
        <textarea
          placeholder="Front"
          onChange={this.handleChange('question')}
          value={this.state.card.question}
          rows="5"
        ></textarea>
        <textarea
          placeholder="Back"
          onChange={this.handleChange('answer')}
          value={this.state.card.answer}
          rows="5"
        ></textarea>
      </div>
      <div className="action-btns">
        <button className="cancel-btn" onClick={this.props.toggleNewCard}>Cancel</button>
        <button className="create-btn" onClick={this.submitCard}>Create</button>
      </div>
      <style jsx>{`
        .action-btns {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .action-btns > button {
          margin: 0 0.5rem;
        }
        .error-msg {
          color: #F44336;
          margin-bottom: 0;
        }
        .new-card-form {
          display: flex;
          flex-direction: column;
        }
        .form-container {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .create-btn,
        .cancel-btn {
          width: 6rem;
          margin: 0 auto;
        }
        .create-btn {
          background-color: #00C853;
        }
        .cancel-btn {
          background-color: #D50000;
        }
        textarea {
          border: 1px solid #d3d3d3;
          border-radius: 5px;
          font-family: 'Montserrat', sans-serif;
          height: 10rem;
          margin: 1rem auto;
          outline-width: 0;
          padding: 1rem;
          resize: none;
          transition: 1s;
          width: 25rem;
        }
        textarea:focus {
          background-color: #efefef;
          border: 1px solid #29B6F6;
        }
        @media screen and (max-width: 992px) {
          .form-container {
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          .action-btns {
            flex-direction: column;
          }
          .action-btns > button {
            margin: 0.5rem 0;
            width: 100%;
          }
          textarea {
            margin: 0.5rem 0;
            width: calc(100% - 2rem);
          }
        }
      `}</style>
    </div>
  );
}
