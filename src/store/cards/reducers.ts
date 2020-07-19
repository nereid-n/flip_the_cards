import {CardsActionTypes, CardsState, CHANGE_LEVEL, CHANGE_STATUS, UPDATE_CARDS} from "./types";
import fillCards from "../../static/functions";

const initialState: CardsState = {
  cards: fillCards(0),
  level: 0
}

export default function (state = initialState, action: CardsActionTypes): CardsState {
  switch (action.type) {
    case CHANGE_LEVEL:
      return {...state, level: action.level};
    case UPDATE_CARDS:
      return {...state, cards: action.cards};
    case CHANGE_STATUS:
      return Object.assign({}, state, {cards: state.cards.map((card, index) => {
          if (index === action.index) {
            return {...card, status: action.status}
          }
          return card;
        })});
    default:
      return state;
  }
}
