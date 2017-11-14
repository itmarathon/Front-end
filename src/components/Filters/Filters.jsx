import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({
  onChange,
  onSubmit,
  cities,
  types,
}) => (
  <div className="Filters">
    <form onSubmit={onSubmit} onChange={onChange}>
      Где:
      <select name="city">
        {cities.map(city => <option key={city}>{city}</option>)}
      </select>
      Тип:
      <select name="type">
        {types.map(city => <option key={city}>{city}</option>)}
      </select>
      <button type="submit">Применить</button>
    </form>
  </div>
);

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filters;