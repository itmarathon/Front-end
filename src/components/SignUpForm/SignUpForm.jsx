import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Label, Icon } from 'semantic-ui-react';
import Validator from 'validator';
import { Redirect } from 'react-router';
import InlineError from '../InlineError/InlineError';
import Styles from '../SignInForm/SignInForm.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fireRedirect: false,
      errorValidate: false,
      data: {
        email: '',
        password: '',
      },
      errors: {},
    };
  }

  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value },
  });

  onSubmit = () => {
    const data = { data: { email: this.state.data.email, password: this.state.data.password } };
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 201) {
          fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((responseLogin) => {
              if (responseLogin.status === 200) {
                responseLogin.json().then((responseData) => {
                  localStorage.setItem('user_email', responseData.data.email);
                  localStorage.setItem('user_token', responseData.data.token);
                  this.setState({ fireRedirect: true });
                });
              } else {
                this.setState({ errorValidate: true });
              }
            });
        } else {
          this.setState({ errorValidate: true });
        }
      });
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) { errors.email = 'Неверный email'; }
    if (!data.password) { errors.password = 'Проверьте пароль'; }
    return errors;
  };

  render() {
    const { fireRedirect, errorValidate } = this.state;
    const { data, errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <Label htmlFor="email">
              <span className="emailTitle">Ваш Еmail</span>
              <Form.Input
                type="email"
                id="email"
                name="email"
                placeholder="Введите ваш email"
                value={data.email}
                onChange={this.onChange}
              />
            </Label>
            {errors.email && <InlineError text={errors.password} />}
          </Form.Field>
          <Form.Field>
            <Label htmlFor="password">
              <span className="passwordTitle">Пароль</span>
              <Form.Input
                type="password"
                id="password"
                name="password"
                placeholder="Введите пароль"
                value={data.password}
                onChange={this.onChange}
              />
            </Label>
          </Form.Field>
          {errorValidate && (
            <p>Этот email уже используется</p>
          )}
          <Form.Field>
            <Button compact animated color="green">
              <Button.Content visible>Зарегистрироваться</Button.Content>
              <Button.Content hidden>Войти
                <Icon color="green" />
              </Button.Content>
            </Button>
          </Form.Field>
        </Form>
        {fireRedirect && (
          <Redirect to="/profile" />
        )}
      </div>
    );
  }
}

SignUpForm.propTypes = {
};

export default SignUpForm;

