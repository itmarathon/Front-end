import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import './Header.css';


class Header extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="mainHeader" borderless>
        <Menu.Item
          className="logoTop"
          position="left"
          name="logo"
          active={activeItem === 'logo'}
          onClick={this.handleItemClick}
        >
          <Link to="/">IT-Marathon</Link>
        </Menu.Item>
        <Menu position="right">
          <Menu.Item
            name="signUp"
            active={activeItem === 'signUp'}
            onClick={this.handleItemClick}
            compact
          >
            <Link to="/sign-up">Регистрация</Link>
          </Menu.Item>
          <Menu.Item
            name="signIn"
            active={activeItem === 'signIn'}
            onClick={this.handleItemClick}
          >
            <Button><Link to="/sign-in">Войти</Link></Button>
          </Menu.Item>
        </Menu>
      </Menu>
    );
  }
}

export default Header;