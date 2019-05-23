import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeView from './views/HomeView/HomeView';
import AboutView from './views/AboutView/AboutView';
import BlogListView from './views/BlogListView/BlogListView';
import BlogPostView from './views/BlogPostView/BlogPostView';
import AnalyticsRouter from './components/AnalyticsRouter/AnalyticsRouter';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/about" component={AboutView} />
          <Route exact path="/blog" component={BlogListView} />
          <Route exact path="/blog/:postName" component={BlogPostView} />
        </Switch>
        <AnalyticsRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
