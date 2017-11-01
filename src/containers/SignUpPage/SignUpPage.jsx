import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../../components/SignInForm';
import Styles from '../SignInPage/SignInPage.css';

class SignUpPage extends React.Component {
  render() {
    return (
      <div>
        <SignInForm submit={this.submit} />
      </div>
    );
  }
}

export default SignUpPage;