import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FlatActions from '../../actions/flat';

import {
  FlatFullDescription,
} from '../../components';

class FlatPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFlat(id);
  }

  render() {
    const { flat, isLoading } = this.props;

    return (
      <div>
        { isLoading ? 'Loading...' : <FlatFullDescription flat={flat} /> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  flat: state.flat.data,
  isLoading: state.flat.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getFlat: FlatActions.getFlat,
}, dispatch);

FlatPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  flat: PropTypes.shape(PropTypes.object).isRequired,
  getFlat: PropTypes.func.isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlatPage);