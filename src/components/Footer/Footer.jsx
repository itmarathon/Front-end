import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './Footer.css';


class Footer extends React.Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="footer" borderless>
        <Menu.Item
          className="logoFooter"
          position="left"
          name="logo"
          active={activeItem === 'logo'}
          onClick={this.handleItemClick}
        >
          <Link to="/">
            IT-Marathon
          </Link>
        </Menu.Item>
      </Menu>)
  }
}

export default Footer;