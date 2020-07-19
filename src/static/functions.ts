import {Cards} from "../store/cards/types";
import {colors, images, levels} from "./cardData";

export default function fillCards(level: number): Array<Cards> {
  let views = [];
  let cards = [];
  for (let i = 0; i < levels[level].images; i++) {
    for (let j = 0; j < levels[level].colors; j++) {
      views.push({
        img: images[i],
        color: colors[j]
      });
    }
  }
  views = [...views, ...views];
  shuffle(views);

  const cardCount: number = levels[level].colors * levels[level].images * 2;
  for (let i = 0; i < cardCount; i++) {
    cards[i] = {
      ...views[i],
      status: '',
      id: Math.random() * 100000
    };
  }
  return cards;
}

function shuffle(array: object[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}