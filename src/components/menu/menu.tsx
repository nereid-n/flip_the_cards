import React from 'react';
import { connect, ConnectedProps  } from 'react-redux';
import { levels } from "../../static/cardData";
import { CardsState } from "../../store/cards/types";
import './menu.scss';

const mapState = (state: any): CardsState => ({
  cards: state.cards.cards,
  level: state.cards.level
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  updateGame: (index: number) => void,
}

function Menu(props: Props) {

  const buttonClassName = (index: number): string => {
    let className = 'btn btn-primary';
    if (props.level === index) {
      className += ' active';
    }
    return className;
  }

  return (
    <div>
      <div className="levels-wrap">
        <h3>Levels</h3>
        <div className="levels">
          {levels.map((level, index) => <button
            onClick={() => props.updateGame(index)}
            key={`button-${index}`}
            className={buttonClassName(index)}>
            {level.name}
          </button>)}
        </div>
      </div>
      <table className="statistics">

      </table>
    </div>
  );
}

export default connector(Menu);
