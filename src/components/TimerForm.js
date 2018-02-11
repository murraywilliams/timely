import React, { Component } from 'react';

class TimerForm extends Component {
  render() {
    return (
      <div className="form-row">
        <div className="col-7">
          <input type="text" className="form-control" placeholder="What are you working on?" />
        </div>
        <div className="col">
          <select class="custom-select" id="projectSelect">
            <option selected>Select a project...</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
            <option value="project3">Project 3</option>
          </select>
        </div>
        <div className="col-auto">
        <button type="submit" class="btn btn-success">Add Entry <i class="far fa-clock"></i></button>
        </div>
      </div>
    )
  }
}

export default TimerForm;

