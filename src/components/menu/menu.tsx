import React from 'react';
import {levelData} from '../../store1/cards.d';
import './menu.scss';

interface Props {
  level: number,
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
          {levelData.map((level, index) => <button
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

export default Menu;