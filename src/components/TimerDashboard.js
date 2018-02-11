import React, { Component } from 'react';

// Components
import TimerForm from './TimerForm';

class TimerDashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <TimerForm />
      </div>
    )
  }
}

export default TimerDashboard;