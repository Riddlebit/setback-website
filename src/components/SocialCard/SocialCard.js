import React from 'react';

const SocialCard = props => {

  const icon = props.icon || 'fas fa-question-circle';
  const text = props.text;
  const link = props.link || 'https://www.riddlebit.net';

  return (
    <a href={link} className="social-card" target="_blank" rel="noopener noreferrer">
      <i className={ icon + " social-card__icon"}></i>
      <span className="social-card__text">{text}</span>
    </a>
  );
}

export default SocialCard;