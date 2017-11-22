import React from 'react';
import PropTypes from 'prop-types';
import './FlatFullDescription.css';

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
  <div className="FlatPage">
    <div className="FlatPage-photos">
      {photos && photos.map(photo => <img src={photo} alt={photo} />)}
    </div>
    <p>Город: {city}</p>
    <p>Комнат: {rooms}</p>
    <p>Цена: {price}</p>
    <p>Тип: {type}</p>
    <p>Описание: {description}</p>
    <p>Ссылка на оригинал: <a href={linkToOrigin}>{linkToOrigin}</a></p>
    <p>Дата: {createdDate}</p>
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