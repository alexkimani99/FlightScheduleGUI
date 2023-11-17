// src/App.js
import React from 'react';
import ArrivalList from './components/ArrivalList';
import DepartureList from './components/DepartureList';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div style={{ backgroundColor: '#add8e6', minHeight: '100vh', padding: '20px' }}>
      <div className="container mt-5 text-center" style={{ color: '#001f3f' }}>
        <h1 className="display-4 mb-4">OPERATIONS | Flight Schedule APP</h1>
        <ArrivalList />
        <DepartureList />
      </div>
    </div>
  );
}
export default App;
