import React from 'react';

const NotFoundView = props => {

  const icons = [
    'fa-sad-tear',
    'fa-sad-cry',
    'fa-frown',
    'fa-angry',
    'fa-tired'
  ];

  const icon = icons[Math.floor(Math.random()*icons.length)];

  return (
    <div className="not-found-view">
      <i className={'not-found-view__icon far ' + icon}></i>
      <span className="not-found-view__text">404 Not Found</span>
    </div>
  );
}

export default NotFoundView;