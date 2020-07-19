import React from 'react';
import './modalWin.scss';

interface Props {
  updateGame: () => void,
}

function ModalWin(props: Props) {

  return (
    <div className="win-wrap">
      <h2>Congratulation!</h2>
      <button className="btn btn-primary" onClick={() => props.updateGame()}>Start again</button>
    </div>
  );
}

export default ModalWin;