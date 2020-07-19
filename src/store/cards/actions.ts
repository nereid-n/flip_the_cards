import { CHANGE_LEVEL, CHANGE_STATUS, UPDATE_CARDS, Cards, CardsActionTypes } from './types';

export function changeLevel(level: number): CardsActionTypes {
  return {
    type: CHANGE_LEVEL,
    level: level
  }
}

export function updateCards(cards: Array<Cards>): CardsActionTypes {
  return {
    type: UPDATE_CARDS,
    cards: cards
  }
}

export function changeStatus(index: number, status: string = ''): CardsActionTypes {
  return {
    type: CHANGE_STATUS,
    index: index,
    status: status
  }
}