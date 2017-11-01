import React from 'react';
import PropTypes from 'prop-types';

const Filtres = ({
  city,
  onChange,
  onSubmit,
}) => (
  <div className="Filtres">
    <form onSubmit={onSubmit} onChange={onChange}>
      City: <input name="city" value={city} />
    </form>
  </div>
);

Filtres.propTypes = {
  city: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Filtres;