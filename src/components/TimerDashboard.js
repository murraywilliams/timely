import React, { Component } from 'react';

// Components
import TimerForm from './TimerForm';
import TimerList from './TimerList';

class TimerDashboard extends Component {

  state = {
    timers: ''
  }

  addNewTimer = (timer) => {
    console.log(timer);
    let description = timer.description;
    let project = timer.project;
    let id = timer.id;
    if (timer) {
      this.setState({
        timers: this.state.timers.concat({id, description, project})
      });
    }
  }

  render() {
    console.log(this.state.timers)
    return (
      <div className="container-fluid">
        <TimerForm addTimer={this.addNewTimer}/>
        <br/>
        <TimerList timers={this.state.timers}/>
      </div>
    )
  }
}

export default TimerDashboard;