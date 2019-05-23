import React from 'react';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__entry footer__copyright">
        &copy; {(new Date()).getFullYear()} Riddlebit AS
      </div>
      <a className="footer__entry" href="https://www.riddlebit.net/contact">
        Contact Us
      </a>
      <a className="footer__entry" href="https://www.riddlebit.net/privacy">
        Privacy Policy
      </a>
      <a className="footer__entry" href="https://github.com/Riddlebit">
        GitHub &nbsp;
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
}

export default Footer;