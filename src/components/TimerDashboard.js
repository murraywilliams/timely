import React, { Component } from 'react';

// Components
import TimerForm from './TimerForm';
import TimerList from './TimerList';

class TimerDashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <TimerForm />
        <br/>
        <TimerList />
      </div>
    )
  }
}

export default TimerDashboard;