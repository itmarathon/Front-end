import React from 'react';
import PropTypes from 'prop-types';
import './FlatFullDescription.css';
import Button from '../Button/';

const FlatFullDescription = ({
  city,
  type,
  rooms,
  price,
  description,
  linkToOrigin,
  createdDate,
  photos,
}) => (
  <div className="FlatFullDescription">
    <div className="FlatFullDescription-photos">
      {photos && photos.map(photo => <img src={photo} alt={photo} />)}
    </div>
    <div className="WrapData">
      <p className="Description">{description}</p>
      <p>Город: {city}</p>
      <p>Комнат: {rooms}</p>
      <p>Цена: {price}</p>
      <p>Тип: {type}</p>
      <p>Дата размещения: {createdDate && createdDate.split('T')[0]}</p>
      <a href={linkToOrigin}><Button label="К источнику" /></a>
    </div>
  </div>
);

FlatFullDescription.propTypes = {
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkToOrigin: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FlatFullDescription;