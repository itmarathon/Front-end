import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => (
  <div className="wrapHeader">
    <div className="logo"><Link to="/">IT-Marathon</Link></div>
    <div className="sign">
      <span>Регистрация</span>
      <span>/</span>
      <Link to="/sign-in">Вход</Link>
    </div>
  </div>
);

export default Header;