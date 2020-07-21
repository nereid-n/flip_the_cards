import fillCards from "../../static/functions";
import { CHANGE_LEVEL, UPDATE_CARDS } from "./types";
import { updateCards } from "./actions";

let updateCardsMiddleware: (store: any) => (next: any) => (action: any) => void;
updateCardsMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === CHANGE_LEVEL) {
    const newCards = fillCards(action.level);
    store.dispatch(updateCards(newCards));
  } else if (action.type === UPDATE_CARDS) {
    if (action.cards.length === 0) {
      action.cards = fillCards(store.getState().cards.level);
    }
  }
  next(action);
};

export default updateCardsMiddleware;