import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Button } from 'semantic-ui-react';
import SignInForm from '../../components/SignInForm';
import Styles from '../SignInPage/SignInPage.css';

class SignInPage extends React.Component {
  render() {
    return (
      <div>
        <SignInForm submit={this.submit} />
        <Divider horizontal>или</Divider>
        <Button className="buttonNewAccount"><Link to="/sign-up">Регистрация</Link></Button>
      </div>
    );
  }
}

export default SignInPage;