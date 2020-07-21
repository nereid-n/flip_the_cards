import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { Cards } from "../../store/cards/types";
import './card.scss';

interface Props {
  data: Cards,
  index: number,
  onClick: (index: number) => void
}

function Card(props: Props) {

  const [wrapClassName, setWrapClassName] = useState('card-wrap ' + props.data.color);

  useEffect(() => {
    if (props.data.status === 'open') {
      setWrapClassName((prevState) => prevState + ' card-open');
    } else {
      setWrapClassName((prevState) => prevState.replace(' card-open', ''));
    }
  }, [props.data.status]);

  return (
    <div
      className={wrapClassName}
      onClick={() => {props.onClick(props.index)}}
    >
      <div className="card-front card"></div>
      <div className="card-back card">
        <ReactSVG
          src={`img/cards/${props.data.img}.svg`}
          className="card__svg"
        />
      </div>
    </div>
  );
}

export default Card;