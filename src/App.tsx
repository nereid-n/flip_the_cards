import React from 'react';
import Card from './components/card';
import './App.scss';

interface Cards {
  img: string
}

const cards: Array<Cards> = [
  {
    img: 'circle'
  },
  {
    img: 'square'
  },
  {
    img: 'flower'
  },
  {
    img: 'triangle'
  },
];

function onClick(event: React.MouseEvent) {
  console.log(event);
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cards">
          {cards.map((card, index) => <Card
            data={card}
            key={index}
            onClick={(event) => onClick(event)}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
