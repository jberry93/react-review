import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toggleNewCard, updateCards } from "../store/configureStore";
import { Deck } from "./deck";
import { CardForm } from "./card-form";

export class Flashcards extends PureComponent {
  render = () => (
    <div>
      <h1>React Review</h1>
      {this.props.isNewCard ? (
        <CardForm
          cards={this.props.cards}
          updateCards={this.props.updateCards}
          toggleNewCard={this.props.toggleNewCard}
        />
      ) : (
        <button onClick={this.props.toggleNewCard}>Create Card</button>
      )}
      {this.props.cards.length > 0 ? (
        <Deck cards={this.props.cards}/>
      ) : (
        <h1>Sorry there are no cards to show</h1>
      )}
      <style jsx>{`
        h1 {
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
}

const mapStateToProps = ({ cards, isNewCard }) => ({ cards, isNewCard });
const mapDispatchToProps = (dispatch) => {
  return {
    updateCards: bindActionCreators(updateCards, dispatch),
    toggleNewCard: bindActionCreators(toggleNewCard, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flashcards);
