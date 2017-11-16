import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions/flats';
import * as FiltersActions from '../../actions/filters';

import {
  Filters,
  FlatList,
} from '../../components';

class HomePage extends Component {
  componentDidMount() {
    this.props.getCities();
    this.props.getRentalTypes();
    this.props.getFlats();
  }

  handlerFiltersChange = (e) => {
    e.preventDefault();

    const filter = {};
    filter[e.target.name] = e.target.value;
    this.props.setFilter({ ...filter });
  }

  /* eslint-disable arrow-parens,
  arrow-body-style, array-callback-return,
  no-restricted-syntax, consistent-return, guard-for-in */

  filter = (flats, filters) => {
    return flats.filter(flat => {
      for (const filter in filters) {
        if (!flat[filter].includes(filters[filter])) {
          return false;
        }
        return true;
      }
    });
  }

  render() {
    const {
      flats,
      cities,
      rentalTypes,
      filters,
    } = this.props;

    const filtredFlats = this.filter(flats, filters);

    return (
      <div className="HomePage">
        <Filters
          cities={cities}
          rentalTypes={rentalTypes}
          onChange={this.handlerFiltersChange}
          onSubmit={this.handleFilterSubmit}
        />
        <FlatList flats={filtredFlats} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flats: state.flats.data,
  cities: state.lists.cities,
  rentalTypes: state.lists.rentalTypes,
  filters: state.filters,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCities: Actions.getCities,
  getRentalTypes: Actions.getRentalTypes,
  getFlats: Actions.getFlats,
  setFilter: FiltersActions.setFilter,
}, dispatch);

HomePage.propTypes = {
  flats: PropTypes.arrayOf(PropTypes.object),
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  rentalTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape(PropTypes.object),
  getCities: PropTypes.func.isRequired,
  getRentalTypes: PropTypes.func.isRequired,
  getFlats: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  flats: [],
  filters: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);