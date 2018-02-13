import React, { Component } from 'react';

class TimerForm extends Component {

  addNewTimer = (e) => {
    console.log(this)
    let description = this.refs.description.value;
    let project = this.refs.project.value;
    let id = Math.floor((Math.random() * 100) + 1);
    e.preventDefault();
    this.setState({
      timers: this.props.timers.concat({id, description, project})
    })
  }

  passTimer = (e) =>{
    e.preventDefault();
    // console.log('Got to passTimer');
    let description = this.refs.description.value;
    let project = this.refs.project.value;
    let id = Math.floor((Math.random() * 100) + 1);
    let timerRes = {id, description, project}
    return this.props.addTimer(timerRes);
  }

  render() {

    return (
      <form onSubmit={this.passTimer}>
      <div className="form-row">
          <div className="col-7">
            <input type="text" className="form-control" placeholder="What are you working on?" ref="description" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="What is the project?" ref="project" />
          </div>
          <div className="col-auto">
          <button type="submit" className="btn btn-success">Add Entry <i className="far fa-clock"></i></button>
          </div>
      </div>
      </form>
    )
  }
}

export default TimerForm;

