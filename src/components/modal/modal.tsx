import React, { useState, useEffect, ReactNode } from 'react';
import './modal.scss';

interface Props {
  open: boolean,
  closeMenu: () => void,
  children: ReactNode
}

function Modal(props: Props) {
  const [wrapClassName, setWrapClassName] = useState('modal-wrap');

  useEffect(() => {
    setWrapClassName(prevState => {
      if (props.open) {
        prevState += ' active';
      } else {
        prevState = prevState.replace(' active', '');
      }
      return prevState;
    });
  }, [props.open]);

  return (
    <div className={wrapClassName}>
      <div className="modal-overflow" onClick={() => props.closeMenu()}></div>
      <div className="modal">
        <button className="close" onClick={() => props.closeMenu()}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;