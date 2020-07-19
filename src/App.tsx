import React, {useState} from 'react';
import { connect } from 'react-redux';
import { CardsState, Cards } from "./store/cards/types";
import { changeLevel, changeStatus, updateCards } from "./store/cards/actions";
import Card from './components/card/card';
import Menu from './components/menu/menu';
import Modal from './components/modal/modal';
import ModalWin from './components/modalWin/modalWin';
import './App.scss';

let openCards: number[] = [];
let findCards: number = 0;
function App(props: any) {
  const [wrapClassName, setWrapClassName] = useState(`cards level-${props.cards.level}`);
  const [menu, setMenu] = useState(false);
  const [modalWin, setModalWin] = useState(false);

  const onClick = (index: number) => {
    openCards.push(index);
    props.changeStatus(index, 'open');
    if(openCards[1] !== undefined) {
      if (!checkSame()) {
        setWrapClassName(prevState => prevState + ' no-click');
        setTimeout(() => {
          props.changeStatus(openCards[0], '');
          props.changeStatus(openCards[1], '');
          setWrapClassName((prevState) => prevState.replace(' no-click', ''));
          openCards = [];
        }, 1000);
      }
      else {
        findCards += 2;
        openCards = [];
        if (findCards === props.cards.length) {
          winGame();
        }
      }
    }
  }
  const updateGame = (index?: number) => {
    if (index !== undefined) {
      props.changeLevel(index)
      setWrapClassName(prevState => prevState.replace(/level-\d/, `level-${index}`));
    }
    const newCards: Array<Cards> = props.level;
    updateCards(newCards);
    openCards = [];
    findCards = 0;
    setMenu(false);
    setModalWin(false);
  }
  const winGame = () => {
    setModalWin(true);
  }
  const checkSame = (): boolean => {
    const { color: color1, img: img1 } = props.cards[openCards[0]];
    const { color: color2, img: img2 } = props.cards[openCards[1]];
    return color1 === color2 && img1 === img2;
  }

  return (
    <div className="App">
      <div className="container">
        <button
          className="menu-btn btn-primary"
          onClick={() => setMenu(prevState => !prevState)}
        >
          <span></span><span></span><span></span>
        </button>
        <div className={wrapClassName}>
          {props.cards.cards.map((card: Cards, index: number) => <Card
            data={card}
            index={index}
            key={`card-${card.id}`}
            onClick={(index) => onClick(index)}/>
          )}
        </div>
      </div>
      <Modal
        open={menu}
        closeMenu={() => setMenu(false)}
      >
        <Menu
          level={props.cards.level}
          updateGame={(index) => updateGame(index)}
        />
      </Modal>
      <Modal
        open={modalWin}
        closeMenu={() => setModalWin(false)}
      >
        <ModalWin
          updateGame={() => updateGame()}
        />
      </Modal>
    </div>
  );
}

export default connect(
  (state: CardsState): CardsState => ({
    cards: state.cards,
    level: state.level
  }),
  dispatch => ({
    changeLevel: (level: number) => dispatch(changeLevel(level)),
    changeStatus: (index: number, status: string) => dispatch(changeStatus(index, status)),
    updateCards: (cards: Array<Cards>) => dispatch(updateCards(cards)),
  })
)(App);
