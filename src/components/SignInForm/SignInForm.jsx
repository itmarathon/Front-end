import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Label, Icon } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../InlineError/InlineError';
import Styles from '../SignInForm/SignInForm.css';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) { errors.email = 'Неверный email'; }
    if (!data.password) { errors.password = 'Проверьте пароль'; }
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
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
        <Form.Field>
          <Button compact animated color="green">
            <Button.Content visible>Войти</Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        </Form.Field>
      </Form>
    );
  }
}

SignInForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SignInForm;

