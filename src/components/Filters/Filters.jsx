import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({
  onChange,
  cities,
  rentalTypes,
}) => (
  <div className="Filters">
    <form onChange={onChange}>
      <span>Где: </span>
      <select name="city">
        {cities.map(city => <option key={city}>{city}</option>)}
      </select>
      <span> Тип: </span>
      <select name="type">
        {rentalTypes.map(city => <option key={city}>{city}</option>)}
      </select>
    </form>
  </div>
);

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  rentalTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filters;