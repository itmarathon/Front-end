import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions/flats';

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
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { flats, cities, rentalTypes } = this.props;

    return (
      <div className="HomePage">
        <Filters
          cities={cities}
          types={rentalTypes}
          onChange={this.handlerFiltersChange}
          onSubmit={this.handleFilterSubmit}
        />
        <FlatList flats={flats} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flats: state.flats.data,
  cities: state.lists.cities,
  rentalTypes: state.lists.rentalTypes,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCities: Actions.getCities,
  getRentalTypes: Actions.getRentalTypes,
  getFlats: Actions.getFlats,
}, dispatch);

HomePage.propTypes = {
  flats: PropTypes.arrayOf(PropTypes.object),
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  rentalTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCities: PropTypes.func.isRequired,
  getRentalTypes: PropTypes.func.isRequired,
  getFlats: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  flats: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);