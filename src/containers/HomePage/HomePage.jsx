import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions/flats';
import * as FiltersActions from '../../actions/filters';
import * as SortingActions from '../../actions/sorting';

import {
  Filters,
  FlatList,
  Sorting,
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
      }
      return true;
    });
  }

  render() {
    const {
      flats,
      cities,
      rentalTypes,
      filters,
      isLoading,
      sortType,
      setSorting,
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
        <Sorting
          sortType={sortType}
          onClick={setSorting}
        />
        { isLoading ? 'Loading...' : <FlatList flats={filtredFlats} /> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flats: state.flats.data,
  isLoading: state.flats.isLoading,
  cities: state.lists.cities,
  rentalTypes: state.lists.rentalTypes,
  filters: state.filters,
  sortType: state.sorting,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCities: Actions.getCities,
  getRentalTypes: Actions.getRentalTypes,
  getFlats: Actions.getFlats,
  setFilter: FiltersActions.setFilter,
  setSorting: SortingActions.setSorting,
}, dispatch);

HomePage.propTypes = {
  flats: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  rentalTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape(PropTypes.object),
  sortType: PropTypes.string,
  getCities: PropTypes.func.isRequired,
  getRentalTypes: PropTypes.func.isRequired,
  getFlats: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSorting: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  flats: [],
  filters: {},
  sortType: 'desc',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);