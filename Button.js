import React from 'react';
import './App.css';

const Button = (props) => {
  return (
    <button className="Button" type="submit" onClick={props.clicked}>Reset password</button>
  );
}

export default Button;
