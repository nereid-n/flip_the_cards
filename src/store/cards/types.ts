export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const UPDATE_CARDS = 'UPDATE_CARDS';

export interface Cards {
  img: string,
  status: string,
  color: string,
  id: number
}

export interface CardsState {
  cards: Array<Cards>,
  level: number
}

interface ChangeLevelAction {
  type: typeof CHANGE_LEVEL,
  level: number
}

interface UpdateCardsAction {
  type: typeof UPDATE_CARDS,
  cards: Array<Cards>
}

interface ChangeStatusAction {
  type: typeof CHANGE_STATUS,
  index: number,
  status: string
}

export type CardsActionTypes = ChangeLevelAction | ChangeStatusAction | UpdateCardsAction;