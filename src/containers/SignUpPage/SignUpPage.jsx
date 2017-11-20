import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <SignUpForm submit={this.submit} />
      </div>
    );
  }
}

export default SignUpPage;