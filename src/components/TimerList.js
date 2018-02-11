import React, { Component } from 'react';

class TimerForm extends Component {
  render() {
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
          <tr>
            <th scope="row">1</th>
            <td className="text-left">
              Change fetch calls to use async/await
              <footer className="blockquote-footer">Eaztamore</footer>
            </td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn-outline-success">Play <i className="fas fa-play"></i></button>
                <button type="button" className="btn-outline-danger">Pause <i className="fas fa-pause"></i></button>
                <button type="button" className="btn-outline-info">Save <i class="fas fa-check-square"></i></button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td className="text-left">
              Build out kitchen dashboard component, pulling orders in from WordPress
              <footer class="blockquote-footer">Eaztamore</footer>
            </td>
            <td>09 Feb 2018 <i class="far fa-calendar-alt"></i></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td className="text-left">
              Build Timer ui
              <footer className="blockquote-footer">Personal</footer>
            </td>
            <td><h6>08 Feb 2018 <i class="far fa-calendar-alt"></i></h6></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TimerForm;

