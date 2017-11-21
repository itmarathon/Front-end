import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/';
import './Flat.css';

const Flat = ({
  img,
  title,
  city,
  rooms,
  price,
  type,
  _id,
}) => (
  <div className="WrapFlat">
    <div className="Flat">
      <img src={img} alt={title} />
      <p>{title}</p>
      <p>Город: {city}</p>
      <p>Комнат: {rooms}</p>
      <p>Цена: {price}</p>
      <p>Тип: {type}</p>
      <a href={`/flats/${_id}`}><Button label="Подробнее..." /></a>
    </div>
  </div>
);

Flat.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};

Flat.defaultProps = {
  img: '/tmp.jpg',
};

export default Flat;