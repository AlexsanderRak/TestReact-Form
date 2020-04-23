import React from 'react';
import './button.scss'

function Button(props) {
  return (
    <div className={`button ${props.btnStyle ? props.btnStyle : "btn-blue"}`}>
      <span className="button-text">{props.btnText}</span>
    </div>
  );
}

export default Button;