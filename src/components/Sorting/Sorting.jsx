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
    Показывать сперва:
    <a className={sortType === 'asc' ? 'Sorting-active' : ''} onClick={() => onClick('asc')}> старые</a>
    /
    <a className={sortType === 'desc' ? 'Sorting-active' : ''} onClick={() => onClick('desc')}>свежие</a>
  </div>
);

Sorting.propTypes = {
  onClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

export default Sorting;