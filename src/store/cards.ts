export interface Cards {
  img: string,
  status: string
}

enum Levels {
  Level1 = 10
}

let level = Levels.Level1;
let cards: Array<Cards> = [];
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

for (let i = 0; i < level; i++) {
  cards[i] = {
    img: '',
    status: ''
  };
}

// export default cards;