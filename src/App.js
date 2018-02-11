import React, { Component } from 'react';
import './App.css';

// Components
import TimerDashboard from './components/TimerDashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">Add a new time entry</h1>
        <TimerDashboard />
      </div>
    );
  }
}

export default App;
