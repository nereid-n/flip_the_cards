import fillCards from "../../static/functions";
import { CHANGE_LEVEL } from "./types";
import { updateCards } from "./actions";

let updateCardsMiddleware: (store: any) => (next: any) => (action: any) => void;
updateCardsMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === CHANGE_LEVEL) {
    const newCards = fillCards(action.level);
    store.dispatch(updateCards(newCards));
  }
  next(action);
};

export default updateCardsMiddleware;