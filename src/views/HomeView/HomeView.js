import React, { Component } from 'react';
import SocialCard from '../../components/SocialCard/SocialCard';
import setbackLogo from '../../assets/setback_logo.png';

class HomeView extends Component {
  render() {
    return (
      <div className="home-view">
        <div className="home-view__center-content">
          <img className="home-view__logo" src={setbackLogo} alt="Setback Logo" />
          <div className="home-view__social">
            <SocialCard icon="fab fa-discord" text="Discord" link="https://discord.gg/ZrsJFan" />
            <SocialCard icon="fab fa-twitter" text="Twitter" link="https://twitter.com/setback" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeView;