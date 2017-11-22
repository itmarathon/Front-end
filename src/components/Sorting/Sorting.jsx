/* eslint-disable jsx-a11y/click-events-have-key-events,
jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import './Sorting.css';

const Sorting = ({
  sortType,
  onClick,
}) => (
  <div className="Sorting">
    Сортировать по:
    <a className={sortType === 'asc' ? 'Sorting-active' : ''} onClick={() => onClick('asc')}> возврастанию</a>
    /
    <a className={sortType === 'desc' ? 'Sorting-active' : ''} onClick={() => onClick('desc')}>убыванию</a>
  </div>
);

Sorting.propTypes = {
  onClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

export default Sorting;