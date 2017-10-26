import React from 'react';
import './Header.css';

const Header = () => (
  <div className="wrapHeader">
    <div className="logo">IT-Marathon</div>
    <div className="sign">
      <p>Регистрация</p>
      <span>/</span>
      <p>Вход</p>
    </div>
  </div>
);

export default Header;