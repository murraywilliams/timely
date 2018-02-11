import React, { Component } from 'react';
import './App.css';

// Components
import TimerDashboard from './components/TimerDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="display-4 text-left">Add a new time entry</h1>
        <TimerDashboard />
      </div>
    );
  }
}

export default App;
