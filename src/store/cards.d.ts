export interface Cards {
  img: string,
  status: string,
  color: string,
  id: number
}

export let level = 0;
let cards: Array<Cards> = [];
export const levelData = [
  {
    images: 3,
    colors: 2,
    name: 'Easy'
  },
  {
    images: 5,
    colors: 3,
    name: 'Medium'
  },
  {
    images: 8,
    colors: 3,
    name: 'Hard'
  },
  {
    images: 10,
    colors: 4,
    name: 'Very Hard'
  }
];
const images = [
  'circle',
  'square',
  'triangle',
  'moon',
  'sun',
  'cloud',
  'ray',
  'water',
  'star',
  'flower'
];
const colors = [
  'blue',
  'red',
  'green',
  'yellow'
]

fillCards();

export default cards;

function fillCards() {
  let views = [];
  cards = [];
  for (let i = 0; i < levelData[level].images; i++) {
    for (let j = 0; j < levelData[level].colors; j++) {
      views.push({
        img: images[i],
        color: colors[j]
      });
    }
  }
  views = [...views, ...views];
  shuffle(views);

  const cardCount: number = levelData[level].colors * levelData[level].images * 2;
  for (let i = 0; i < cardCount; i++) {
    cards[i] = {
      ...views[i],
      status: '',
      id: Math.random() * 100000
    };
  }
}

function shuffle(array: object[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function changeLevel(newLevel: number): Array<Cards> {
  level = newLevel;
  fillCards();
  return cards;
}