import React from 'react';
import { Form, Button, Label, Input } from 'semantic-ui-react';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
      },
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="SignInForm">
        <Form>
          <Form.Field>
            <Label htmlFor="email">Email
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Введите ваш email"
              value={data.email}
            />
            </Label>
          </Form.Field>
        </Form>
        <Form>
          <Form.Field>
            <Label htmlFor="password">Пароль
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Введите пароль"
                value={data.password}
              />
            </Label>
          </Form.Field>
        </Form>
        <Form>
          <Button>
            Вход
          </Button>
        </Form>
      </div>
    );
  }
}
export default SignInForm;

