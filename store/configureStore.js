import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initState = {
  cards: [
    {
      question: "When was React first published for production use?",
      answer: "March 2013"
    },
    {
      question: "What language is React written in?",
      answer: "JavaScript"
    },
    {
      question: "Is React a framework or a library?",
      answer: "A JavaScript library"
    }
  ],
  isNewCard: false
}

export const types = {
  UPDATE_CARDS: 'UPDATE_CARDS',
  TOGGLE_NEW: 'TOGGLE_NEW'
}

// Reducers
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_CARDS:
      return Object.assign({}, state, { cards: state.cards, isNewCard: !state.isNewCard })
    case types.TOGGLE_NEW:
      return Object.assign({}, state, { isNewCard: !state.isNewCard })
    default: return state
  }
}

// Actions
export const updateCards = () => dispatch => {
  return dispatch({ type: types.UPDATE_CARDS })
}
export const toggleNewCard = () => dispatch => {
  return dispatch({ type: types.TOGGLE_NEW })
}
export const initStore = (initialState = initState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
}
