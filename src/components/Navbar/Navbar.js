import React, { Component } from 'react';
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

  render() {

    const navOpen = this.state.navOpen;
    const toggleIcon = 'fas fa-' + (navOpen ? 'times' : 'bars');

    return (
      <div className={'navbar' + (navOpen ? ' navbar--open' : '')}>
        <a href="https://www.riddlebit.net">
          <RiddlebitLogo className="navbar__logo" />
        </a>
        <nav className="navbar__navlinks">
          <ul>
            <li>
              <i
                className={toggleIcon + ' navbar__toggle-icon'}
                onClick={this.toggleNav}>
              </i>
            </li>
            <li className="navbar__navlink">Home</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
