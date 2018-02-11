import React, { Component } from 'react';

class TimerForm extends Component {
  render() {
    return (
      <div className="form-row">
        <div className="col-7">
          <input type="text" className="form-control" placeholder="What are you working on?" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="What is the project?" />
        </div>
        <div className="col-auto">
        <button type="submit" class="btn btn-success">Add Entry <i class="far fa-clock"></i></button>
        </div>
      </div>
    )
  }
}

export default TimerForm;

