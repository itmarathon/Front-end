import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userIsLogged: true,
      userToken: localStorage.getItem('user_token'),
    };
  }
  componentDidMount() {
    this.checkIsLogged();
  }
  componentWillReceiveProps() {
    this.checkIsLogged();
  }
  checkIsLogged() {
    let isLogged = true;
    if (localStorage.getItem('user_email') === null) {
      isLogged = false;
    }
    console.log(isLogged);
    this.setState({ userIsLogged: isLogged });
  }
  render() {
    const { userIsLogged, userToken } = this.state;

    return (
      <div>
        <p>Profile</p>
        <p>user token: {userToken}</p>
        {!userIsLogged && (
          <Redirect to="/sign-in" />
        )}
      </div>
    );
  }
}

export default ProfilePage;