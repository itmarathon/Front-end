import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import './Header.css';

class Header extends React.Component {
  state = {};
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
    this.setState({
      userIsLogged: isLogged,
    });
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleLogoutClick = (event) => {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_token');
    this.setState({
      userIsLogged: false,
      redirectToHome: true,
    });
  };
  render() {
    const { activeItem } = this.state;
    const { userIsLogged, redirectToHome } = this.state;
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
          {userIsLogged && (
            <Menu.Item
              name="profile"
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
              compact
            >
              <Link to="/profile">Профиль</Link>
            </Menu.Item>
          )}
          {userIsLogged && (
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleLogoutClick}
              compact
            >
              <Link to="#">Выйти</Link>
            </Menu.Item>
          )}
          {!userIsLogged && (
            <Menu.Item
              name="signUp"
              active={activeItem === 'signUp'}
              onClick={this.handleItemClick}
              compact
            >
              <Link to="/sign-up">Регистрация</Link>
            </Menu.Item>
          )}
          {!userIsLogged && (
            <Menu.Item
              name="signIn"
              active={activeItem === 'signIn'}
              onClick={this.handleItemClick}
            >
              <Button><Link to="/sign-in">Вход</Link></Button>
            </Menu.Item>
            )}
          {redirectToHome && (
            <Redirect to="/" />
          )}
        </Menu>
      </Menu>
    );
  }
}

export default Header;