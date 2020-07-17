import React, {useState} from 'react';
import Card from './components/card';
import cardsStore, { Cards, levelData, changeLevel, level } from './store/cards.d';
import './App.scss';

let openCards: number[] = [];
function App() {
  const [cards, setCards] = useState(cardsStore);
  const [wrapClassName, setWrapClassName] = useState(`cards level-${level}`);

  const onClick = (index: number) => {
    openCards.push(index);
    const newCards: Array<Cards> = [...cards];
    newCards[index].status = 'open';
    setCards(newCards);
    if(openCards[1] !== undefined) {
      if (!checkSame()) {
        setWrapClassName(prevState => prevState + ' no-click');
        setTimeout(() => {
          newCards[openCards[0]].status = '';
          newCards[openCards[1]].status = '';
          setCards(newCards);
          setWrapClassName((prevState) => prevState.replace(' no-click', ''));
          openCards = [];
        }, 1000);
      }
      else {
        openCards = [];
      }
    }
  }
  const onClickLevel = (index: number) => {
    const newCards: Array<Cards> = changeLevel(index);
    setCards(() => newCards);
    setWrapClassName(prevState => prevState.replace(/level-\d/, `level-${level}`));
    openCards = [];
  }

  const buttonClassName = (index: number): string => {
    let className = 'btn btn-primary';
    if (level === index) {
      className += ' active';
    }
    return className;
  }

  const checkSame = (): boolean => {
    const { color: color1, img: img1 } = cards[openCards[0]];
    const { color: color2, img: img2 } = cards[openCards[1]];
    return color1 === color2 && img1 === img2;
  }

  return (
    <div className="App">
      <div className="container">
        <div className="levels">
          {levelData.map((level, index) => <button
            onClick={() => onClickLevel(index)}
            key={`button-${index}`}
            className={buttonClassName(index)}>
              {level.name}
            </button>)}
        </div>
        <div className={wrapClassName}>
          {cards.map((card, index) => <Card
            data={card}
            index={index}
            key={`card-${card.id}`}
            onClick={(index) => onClick(index)}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
