import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label }) => (
  <div>
    <button className="button">{label}</button>
  </div>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;