import React from 'react';
import PropTypes from 'prop-types';
import Flat from '../Flat';
import './FlatList.css';

const FlatList = ({ flats }) => (
  <div className="FlatList">
    {
      flats.length ?
      flats.map(flat => <Flat key={flat.id} {...flat} />) :
      'Not found'
    }
  </div>
);

FlatList.propTypes = {
  flats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FlatList;
