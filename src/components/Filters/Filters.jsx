import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({
  city,
  onChange,
  onSubmit,
}) => (
  <div className="Filters">
    <form onSubmit={onSubmit} onChange={onChange}>
      City: <input name="city" value={city} />
    </form>
  </div>
);

Filters.propTypes = {
  city: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Filters;