import React from 'react';
import { ReactSVG } from 'react-svg';
import './card.scss';

interface StandardComponentProps {
  data: {
    img: string
  },
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

function Card(props: StandardComponentProps) {
  return (
    <div
      className="card-wrap"
      onClick={(event) => {props.onClick(event)}}
    >
      <div className="card-top card"></div>
      <div className="card-inner card">
        <ReactSVG
          src={`img/cards/${props.data.img}.svg`}
          className="card__svg"
        />
      </div>
    </div>
  );
}

export default Card;