import React from 'react';
import analytics from '../../analytics';

const SocialCard = props => {

  const icon = props.icon || 'fas fa-question-circle';
  const text = props.text;
  const link = props.link || 'https://www.riddlebit.net';

  const onClick = () => {
    analytics.event('Social', 'Clicked Social Link', text);
  }

  return (
    <a href={link} className="social-card" target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <i className={ icon + " social-card__icon"}></i>
      <span className="social-card__text">{text}</span>
    </a>
  );
}

export default SocialCard;