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
    this.props.getFlats();
  }

  handlerFiltersChange = (e) => {
    e.preventDefault();
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { flats } = this.props;

    return (
      <div className="HomePage">
        <Filters
          cities={[]}
          types={[]}
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getFlats: Actions.getFlats,
}, dispatch);

HomePage.propTypes = {
  flats: PropTypes.arrayOf(PropTypes.object),
  getFlats: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  flats: [],
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);