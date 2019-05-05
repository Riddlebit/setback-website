import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomeView from './views/HomeView/HomeView';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomeView />
    </div>
  );
}

export default App;
