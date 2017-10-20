import React from "react";
import './Header.css';

const Header = () => (
  <div className="wrapHeader">
    <div className="logo">IT-Marathon</div>
    <div className="sign">
      <a className="signIn" href="#">Регистрация</a>
      <span>/</span>
      <a className="signUp" href="#">Вход</a>
    </div>
  </div>
);

export default Header;