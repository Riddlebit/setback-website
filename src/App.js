import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeView from './views/HomeView/HomeView';
import AboutView from './views/AboutView/AboutView';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/about" component={AboutView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
