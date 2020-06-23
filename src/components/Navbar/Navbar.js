import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as RiddlebitLogo } from '../../assets/riddlebit_logo.svg';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  closeNav = () => {
    this.setState({
      navOpen: false
    });
  }

  render() {

    const navOpen = this.state.navOpen;
    const toggleIcon = 'fas fa-' + (navOpen ? 'times' : 'bars');

    return (
      <div className={'navbar' + (navOpen ? ' navbar--open' : '')}>
        <a href="https://www.riddlebit.net">
          <RiddlebitLogo className="navbar__logo" />
        </a>
        <nav className="navbar__navlinks">
          <i
            className={toggleIcon + ' navbar__toggle-icon'}
            onClick={this.toggleNav}>
          </i>
          <NavLink
            exact to="/"
            className="navbar__navlink"
            activeClassName="navbar__navlink--selected"
            onClick={this.closeNav}
          >
            Home
          </NavLink>
          <a
            href="https://blog.riddlebit.net"
            target="_blank"
            rel="noopener"
            className="navbar__navlink"
            activeClassName="navbar__navlink--selected"
            onClick={this.closeNav}
          >
            Blog
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
