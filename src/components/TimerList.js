import React, { Component } from 'react';
import Timer from './Timer';

class TimerForm extends Component {
  render() {
    let timers = this.props.timers;
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th className="w10" scope="col">#</th>
            <th className="w65 text-left" scope="col">Project Description</th>
            <th className="w25" scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {timers.length > 0 &&
          timers.map((timer)=> {
            return <Timer timer={timer} />
          })
        }
        </tbody>
      </table>
    )
  }
}

export default TimerForm;

