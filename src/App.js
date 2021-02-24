import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeView from './views/HomeView/HomeView';
import AboutView from './views/AboutView/AboutView';
import AnalyticsRouter from './components/AnalyticsRouter/AnalyticsRouter';
import NotFoundView from './views/NotFoundView/NotFoundView';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/about" component={AboutView} />
          <Route component={NotFoundView} />
        </Switch>
        <AnalyticsRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
