import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({
  onChange,
  onSubmit,
  cities,
}) => (
  <div className="Filters">
    <form onSubmit={onSubmit} onChange={onChange}>
      Где:
      <select>
        {cities.map(city => <option id={city}>{city}</option>)}
      </select>
      Квартира/дом:
      <select>
        <option>Не важно</option>
        <option>Квартира</option>
        <option>Дом</option>
      </select>
      Кол-во комнат:
      <select>
        <option>Не важно</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4+</option>
      </select>
      Макс. цена:
      <select>
        <option>Любая</option>
        <option>50к</option>
        <option>70к</option>
        <option>100к</option>
      </select>
      Сортировать по:
      <select>
        <option>Дате</option>
        <option>Еще дате</option>
        <option>Еще дате</option>
      </select>
    </form>
  </div>
);

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filters;