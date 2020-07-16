import React, {useState} from 'react';
import Card from './components/card';
import { Cards } from './store/cards';
import './App.scss';

let countOpenCards: number = 0;
function App() {
  const [cards, setCards] = useState([
    {
      img: 'circle',
      status: 'g'
    },
    {
      img: 'square',
      status: ''
    },
    {
      img: 'flower',
      status: ''
    },
    {
      img: 'triangle',
      status: ''
    },
  ]);
  const [wrapClassName, setWrapClassName] = useState('cards');

  const onClick = (index: number) => {
    countOpenCards++;
    const newCards: Array<Cards> = [...cards];
    newCards[index].status = 'open';
    setCards(newCards);
    if(countOpenCards === 2) {
      setWrapClassName(prevState => prevState + ' no-click');
      setTimeout(() => {
        newCards.map((card) => {
          card.status = '';
          return card;
        });
        setCards(newCards);
        setWrapClassName((prevState) => prevState.replace(' no-click', ''));
        countOpenCards = 0;
      }, 2000);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className={wrapClassName}>
          {cards.map((card, index) => <Card
            data={card}
            index={index}
            key={index}
            onClick={(index) => onClick(index)}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
