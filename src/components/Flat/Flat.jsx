import React from 'react';
import PropTypes from 'prop-types';

const Flat = ({
  img,
  title,
  city,
  rooms,
  price,
}) => (
  <div className="Flat">
    <img src={img} alt={title} />
    <p>{title}</p>
    <p>{city}</p>
    <p>{rooms}</p>
    <p>{price}</p>
  </div>
);

Flat.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Flat;