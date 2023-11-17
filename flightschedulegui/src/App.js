// src/App.js
import React from 'react';
import ArrivalList from './components/ArrivalList';
import DepartureList from './components/DepartureList';

const App = () => {
  return (
    <div>
      <h1>My Flight Schedule App</h1>
      <ArrivalList />
      <DepartureList />
    </div>
  );
};

export default App;
