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
function App(props: any) {
  const [wrapClassName, setWrapClassName] = useState('');
  const [menu, setMenu] = useState(false);
  const [modalWin, setModalWin] = useState(false);

  const onClick = (index: number) => {
    openCards.push(index);
    props.changeStatus(index, 'open');
    if(openCards.length % 2 === 0) {
      if (!checkSame()) {
        setWrapClassName('');
        setTimeout(() => {
          props.changeStatus(openCards[openCards.length - 1], '');
          props.changeStatus(openCards[openCards.length - 2], '');
          setWrapClassName('');
          openCards.splice(-2, 2);
        }, 1000);
      }
      else if (openCards.length === props.cards.length) {
        winGame();
      }
    }
  }
  const updateGame = (index?: number) => {
    if (index !== undefined) {
      props.changeLevel(index)
    } else {
      props.updateCards([]);
    }
    openCards = [];
    setMenu(false);
    setModalWin(false);
  }
  const winGame = () => {
    setModalWin(true);
  }
  const checkSame = (): boolean => {
    const { color: color1, img: img1 } = props.cards[openCards[openCards.length - 1]];
    const { color: color2, img: img2 } = props.cards[openCards[openCards.length - 2]];
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
        <div className={`cards level-${props.level} ${wrapClassName}`}>
          {props.cards.map((card: Cards, index: number) => <Card
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
  (state: any): CardsState => ({
    cards: state.cards.cards,
    level: state.cards.level
  }),
  dispatch => ({
    changeLevel: (level: number) => dispatch(changeLevel(level)),
    changeStatus: (index: number, status: string) => dispatch(changeStatus(index, status)),
    updateCards: (cards: Array<Cards>) => dispatch(updateCards(cards)),
  })
)(App);
