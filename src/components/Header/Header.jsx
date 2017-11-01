import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => (
  <div className="wrapHeader">
    <div className="logo"><Link to="/">IT-Marathon</Link></div>
    <div className="sign">
      <Link to="/sign-up">Регистрация /</Link>
      <Link to="/sign-in">Вход</Link>
    </div>
  </div>
);

export default Header;