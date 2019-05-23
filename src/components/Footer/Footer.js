import React from 'react';
import analytics from '../../analytics';

const Footer = props => {

  const onClick = (label) => {
    analytics.event('Footer', 'Clicked Footer Link', label);
  }

  return (
    <footer className="footer">
      <div className="footer__entry footer__copyright">
        &copy; {(new Date()).getFullYear()} Riddlebit AS
      </div>
      <a
        className="footer__entry"
        href="https://www.riddlebit.net/contact"
        onClick={() => onClick('Contact')}
      >
        Contact Us
      </a>
      <a
        className="footer__entry"
        href="https://www.riddlebit.net/privacy"
        onClick={() => onClick('Privacy')}
      >
        Privacy Policy
      </a>
      <a
        className="footer__entry"
        href="https://github.com/Riddlebit"
        onClick={() => onClick('GitHub')}
      >
        GitHub &nbsp;
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
}

export default Footer;